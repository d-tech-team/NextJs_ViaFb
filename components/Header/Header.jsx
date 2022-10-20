import React from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Dropdown, Nav, NavDropdown } from "react-bootstrap";
import {
  faArrowRight,
  faBars,
  faBarsStaggered,
  faRightToBracket,
  faWallet,
  faGears,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const isLogin = true;

function Header({ toggleMenu, isShowMenu }) {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <header id="header">
      <div className={styles.header_wrap}>
        <div className={styles.left}>
          <Button variant="link" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={isShowMenu ? faBars : faArrowRight}
              className={styles.button_toggle}
            />
          </Button>
        </div>
        <Nav className={styles.right}>
          {isLogin ? (
            <>
              <Nav.Item className={`${styles.item} ${styles.deposit}`}>
                <Nav.Link>
                  <FontAwesomeIcon icon={faWallet} />
                  Nạp Tiền
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={`${styles.item} ${styles.balance}`}>
                <Nav.Link as={"span"}> Số dư: {100} VND</Nav.Link>
              </Nav.Item>
              <NavDropdown
                className={styles.item}
                title={
                  <Image
                    src="/images/logo.png"
                    alt=""
                    className={styles.dropdown_icon}
                    layout="fill"
                  />
                }
                id={styles.dropdown_profile}
              >
                <NavDropdown.Item
                  key={0}
                  className={styles.subMenu}
                  style={{
                    color: "#451B9B",
                  }}
                >
                  <FontAwesomeIcon icon={faGears} />
                  <Link href="/tool">Tạo phôi - XMDT</Link>
                </NavDropdown.Item>
                <NavDropdown.Item
                  key={1}
                  className={styles.subMenu}
                  style={{
                    color: "#FC2E53",
                  }}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <Link onClick={handleLogout}>Đăng xuất</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <Link href={"/login"}>
                <Button className={styles.button_auth} variant="danger">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className={styles.icon}
                  />
                  Đăng Nhập
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button
                  className={styles.button_auth}
                  variant="outline-primary"
                >
                  Đăng Ký
                </Button>
              </Link>
            </>
          )}
        </Nav>
      </div>
    </header>
  );
}

export default Header;
