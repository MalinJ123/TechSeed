import { useContext, useEffect } from "react";
import "../styles/root.css";

import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { AppContext } from "../ContextRoot.jsx";

export const Root = () => {
  const { showTextContainer, handleNavigation } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    // Kolla om användaren navigerar bort från root-sidan
    if (location.pathname !== "/") {
      // Om ja, dölj text-container
      handleNavigation();
    }
  }, [location.pathname, handleNavigation]);

  return (
    <>
      <Header />

      <Outlet />
      {showTextContainer && (
        <div className="text-container">
          <div className="text-info">
            <h1 className="text-title">Bacon Ipsum Bacon Ipsum</h1>
            <p>
              Bacon ipsum dolor amet short ribs porchetta shank jowl, flank pork
              belly ham hock bacon ground round sausage tenderloin tail. Pork
              loin swine picanha, pork chop pork meatball filet mignon ribeye
              pancetta shankle biltong.{" "}
            </p>
            <br />
            <p>
              Rump sausage bacon tongue, pastrami prosciutto cupim jerky swine
              pig short loin picanha. Kielbasa beef ribs shankle meatloaf jowl.
              Prosciutto filet mignon tri-tip meatloaf tongue flank pork belly.
            </p>
            <br />
            <p>
              Rump sausage bacon tongue, pastrami prosciutto cupim jerky swine
              pig short loin picanha. Kielbasa beef ribs shankle meatloaf jowl.
              Prosciutto filet mignon tri-tip meatloaf tongue flank pork belly.
            </p>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
