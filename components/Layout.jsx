import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import Menu from './Menu'

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