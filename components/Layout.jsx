import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header/Header'
import Menu from './Menu/Menu'

function Layout({ children }) {
    const [isShowMenu, setShowMenu] = useState(true)
    const [deviceSize, changeDeviceSize] = useState(null);
    useEffect(() => {
        if (typeof window != 'undefined') {
            window.addEventListener('resize', function () {
                changeDeviceSize(window.innerWidth)
            });
            if (typeof deviceSize == 'number' && deviceSize < 768) {
                setShowMenu(false);
            }else {
                setShowMenu(true);
            }
        }

    }, [deviceSize]);

    const toggleMenu = () => {
        setShowMenu(!isShowMenu);
        return isShowMenu;
    }
    return (
        <div id="page" className={!isShowMenu && 'close'}>
            <Header toggleMenu={toggleMenu} isShowMenu={isShowMenu} />
            <Menu />
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