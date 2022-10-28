import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";

function Layout({ children }) {
  const [isShowMenu, setShowMenu] = useState(true);
  const [deviceSize, changeDeviceSize] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && typeof window != "undefined") {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    if (typeof window != "undefined") {
      window.addEventListener("resize", function () {
        changeDeviceSize(window.innerWidth);
      });
      if (typeof deviceSize == "number" && deviceSize < 768) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    }
  }, [deviceSize]);

  const toggleMenu = () => {
    setShowMenu(!isShowMenu);
    return isShowMenu;
  };
  return (
    <div id="page" className={!isShowMenu ? "close" : ""}>
      <Header toggleMenu={toggleMenu} isShowMenu={isShowMenu} />
      <Menu />
      <main>
        <div className="main_content">
          <div className="wrapper">{children}</div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
