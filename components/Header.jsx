import React from 'react'
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Dropdown } from 'react-bootstrap'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const isLogin = false;

function Header() {
    return (
        <header id="header">
            <div className={styles.header_wrap}>
                <div className={styles.left}>
                    <FontAwesomeIcon icon="fa-regular fa-bars-staggered" />

                    <FontAwesomeIcon className={styles.button_toggle} icon={faBarsStaggered} />
                </div>
                <div className={styles.right}>
                    {isLogin ? (
                        <div>
                            <Button variant="primary">Primary</Button>
                            <span className={styles.balance}>Số dư: 0 VND</span>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    ) :
                        (
                            <div>
                                <Button variant="danger">Đăng Nhập</Button>
                                <Button variant="outline-primary">Đăng Ký</Button>
                            </div>
                        )
                    }

                </div>
            </div>

        </header>
    )
}

export default Header