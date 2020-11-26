import React, { useState, useEffect } from "react";
import MainHeaderContent from "../../molecules/MainHeaderContent/MainHeaderContent";
import Season from "../../molecules/Season/Season";
import Cart from "../../molecules/Cart/Cart";
import BurgerMenu from "../../molecules/BurgerMenu/BurgerMenu";
import styles from "./HeaderNav.module.scss";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { openNav as setOpenNav, closeNav } from "../../../store/actions/generalActions";
import { OPEN_NAV } from "../../../store/actions/types";
const HeaderNav = ({ isShopHover, cartItems, openNav, closeNav, setOpenNav }) => {
  const location = useLocation();
  const fromHome = location.pathname === "/";
  const [scroll, setScroll] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const navHandler = () => {
    if (openNav) closeNav();
    else setOpenNav();
  };

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 2;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);
  return (
    <nav
      className={`${styles.headerNav} ${fromHome && styles.fromHome} ${scroll &&
        !fromHome &&
        styles.scrolled}`}
    >
      <div className={`${styles.headerNav_container} ${fromHome && styles.fromHome}`}>
        {isMobile && <BurgerMenu onClick={navHandler} isOpen={openNav} />}
        <Season fromHome={fromHome} isMobile={isMobile} />
        {!isMobile && <MainHeaderContent fromHome={fromHome} isShopHover={isShopHover} />}
        <Cart fromHome={fromHome} isMobile={isMobile} hasCartItems={cartItems.length} />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isShopHover: state.general.isShopHover,
  cartItems: state.general.cartItems,
  openNav: state.general.openNav,
});

export default connect(mapStateToProps, { setOpenNav, closeNav })(HeaderNav);
