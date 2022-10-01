import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header/Header'
import Menu from './Menu/Menu'

function Layout({ children }) {
    const [isShowMenu, setShowMenu] = useState(true)
    const toggleMenu = () => {
        setShowMenu(!isShowMenu);
        return isShowMenu;
    }
    return (
        <div id="page" className={!isShowMenu && 'close'}>
            <Header toggleMenu={toggleMenu} isShowMenu={isShowMenu} />
            <Menu/>
            <main>
                <div className="main_content">
                    <div className="wrapper">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Layout