import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function useMediaValues(valuesConfig) {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  const isTab = useMediaQuery({ query: "(max-width: 900px)" });
  const isTabLand = useMediaQuery({ query: "(max-width: 1220px)" });
  const isDesktop = useMediaQuery({ query: "(max-width: 1440px)" });
  const isBigDesktop = useMediaQuery({ query: "(max-width: 1800px)" });

  const [valueToReturn, setValuesToReturn] = useState(null);

  const { mobile, tab, tabLand, desktop, bigDesktop, defaultValue } = valuesConfig;

  useEffect(() => {
    if (isMobile) setValuesToReturn(mobile || null);
    else if (isTab) setValuesToReturn(tab || null);
    else if (isTabLand) setValuesToReturn(tabLand || null);
    else if (isDesktop) setValuesToReturn(desktop || null);
    else if (isBigDesktop) setValuesToReturn(bigDesktop || null);
    else return setValuesToReturn(defaultValue || null);
  }, [isMobile, isTab, isTabLand, isDesktop, isBigDesktop]);

  return valueToReturn;
}
