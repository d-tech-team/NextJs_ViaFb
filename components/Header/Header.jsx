import React from 'react'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Dropdown, Nav, NavDropdown } from 'react-bootstrap'
import { faArrowRight, faBars, faBarsStaggered, faRightToBracket, faWallet } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const isLogin = true;

function Header({ toggleMenu , isShowMenu}) {
    return (
        <header id="header">
            <div className={styles.header_wrap}>
                <div className={styles.left}>
                    <Button variant='link' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isShowMenu ? faBars : faArrowRight} className={styles.button_toggle} />
                    </Button>
                </div>
                <Nav className={styles.right}>
                    {isLogin ? (
                        <>
                            <Nav.Item className={`${styles.item} ${styles.deposit}`}>
                                <Nav.Link >
                                    <FontAwesomeIcon icon={faWallet} />
                                    Nạp Tiền
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={`${styles.item} ${styles.balance}`}>
                                <Nav.Link as='span'>
                                    Số dư: {100} VND
                                </Nav.Link>
                            </Nav.Item>
                            <NavDropdown className={styles.item}
                                title={<Image src="/images/logo.png" alt="" className={styles.dropdown_icon} layout="fill" />}
                                id={styles.dropdown_profile}>
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>


                        </>
                    ) :
                        (
                            <>
                                <Button className={styles.button_auth} variant="danger">
                                    <FontAwesomeIcon icon={faRightToBracket} className={styles.icon} />
                                    Đăng Nhập
                                </Button>
                                <Button className={styles.button_auth} variant="outline-primary">Đăng Ký</Button>
                            </>
                        )
                    }

                </Nav>
            </div>

        </header>
    )
}

export default Header