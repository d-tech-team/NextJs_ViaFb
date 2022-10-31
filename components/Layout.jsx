import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { getProfile } from "../redux/features/userSlice";
import { histories } from "../redux/features/dataSlice";
const cookies = new Cookies();

function Layout({ children, user }) {
  const [isShowMenu, setShowMenu] = useState(true);
  const [deviceSize, changeDeviceSize] = useState(null);
  const dispatch = useDispatch();
  const token = cookies.get("token");

  useEffect(() => {
    // console.log("token", token);
    dispatch(histories());
    if (token) {
      dispatch(getProfile());
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Layout);
