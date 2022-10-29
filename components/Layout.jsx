import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import { getProfile, setUser } from "../redux/features/userSlice";

function Layout({ children, user }) {
  const [isShowMenu, setShowMenu] = useState(true);
  const [deviceSize, changeDeviceSize] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const preValue = useRef();

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("token")) {
      dispatch(getProfile());
    }
  }, []);

  useEffect(() => {
    preValue.current = user;
    if (preValue.current !== user) {
      preValue.current = user;
      if (!user) {
        router.push("/login");
      }
    }
  }, [user]);

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
    user: state.default.user,
  };
};

export default connect(mapStateToProps)(Layout);
