import React, { useEffect } from "react";
import { getItems, closeNav } from "./store/actions/generalActions";
import "./App.scss";
import Text from "./components/atoms/Text/Text";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Item from "./pages/Item/Item";
import Checkout from "./pages/Checkout/Checkout";
import HeaderNav from "./components/organism/HeaderNav/HeaderNav";
import MobileNav from "./components/organism/MobileNav/MobileNav";
import Layout from "./components/atoms/Layout/Layout";
import Footer from "./components/organism/Footer/Footer";
import More from "./pages/More/More";
import Media from "./pages/Media/Media";
import MediaItem from "./pages/MediaItem";
import Contact from "./pages/Contact/Contact";
import Tracking from "./pages/Tracking/Tracking";
import Cart from "./pages/Cart/Cart";
import { AnimatePresence } from "framer-motion";
import { connect } from "react-redux";
import CartModal from "./components/organism/CartModal/CartModal";
import { showCart as ShowCartAction } from "./store/actions/cartActions";
import { useMediaQuery } from "react-responsive";
import ReactGA from "react-ga";
import { GAHandler } from "./utils/GA";

const Red = () => {
  window.location.reload();
  return <Redirect to="/" />;
};

function App({ getItems, showCart, openNav, closeNav, ShowCartAction }) {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-161143318-1");
    GAHandler("INGRESO", "INGRESO_EXITOSO");
    getItems();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    closeNav();
  }, [location.pathname]);

  useEffect(() => {
    if (!location.pathname.includes("item") && showCart) {
      ShowCartAction();
    }
  }, [location.pathname, showCart, ShowCartAction]);

  return (
    <div className="App">
      <HeaderNav />
      <Layout>
        {!isMobile ? (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route path="/" exact component={Home} />
              <Route path="/store" exact component={Store} />
              <Route path="/item/:id" exact component={Item} />
              <Route path="/checkout" exact component={Checkout} />
              <Route path="/more" exact component={More} />
              <Route path="/media" exact component={Media} />
              <Route path="/media/:id" exact component={MediaItem} />
              <Route path="/contact" exact component={Contact} />
              {/* <Route path='/tracking' exact component={Tracking} /> */}
              <Route path="/cart" exact component={Cart} />
              <Route component={Red} />
            </Switch>
          </AnimatePresence>
        ) : (
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Home} />
            <Route path="/store" exact component={Store} />
            <Route path="/item/:id" exact component={Item} />
            <Route path="/checkout" exact component={Checkout} />
            <Route path="/more" exact component={More} />
            <Route path="/media" exact component={Media} />
            <Route path="/media/:id" exact component={MediaItem} />
            <Route path="/contact" exact component={Contact} />
            {/* <Route path='/tracking' exact component={Tracking} /> */}
            <Route path="/cart" exact component={Cart} />
            <Route component={Red} />
          </Switch>
        )}
      </Layout>

      <Footer fromHome={location.pathname === "/"} />
      {isMobile && (
        <AnimatePresence exitBeforeEnter>
          {openNav && <MobileNav closeNav={closeNav} key="opennav" />}
        </AnimatePresence>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  showCart: state.general.showCart,
  openNav: state.general.openNav,
});

export default connect(mapStateToProps, { getItems, closeNav, ShowCartAction })(App);
