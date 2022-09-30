import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header/Header'
import Menu from './Menu/Menu'

function Layout({ children }) {
    return (
        <>
            <Header />
            <Menu />
            <main>
                <div className="main_content">
                    <Container>
                        {children}
                    </Container>
                </div>
            </main>
        </>
    )
}

export default Layout