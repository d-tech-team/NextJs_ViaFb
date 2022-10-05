import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Product'

function ProductAndHistory({ products }) {
    return (
        <Row>
            <Col xs={12} sm={12} lg={9}>
                <Row>
                    {products.map((product, index) => (
                        <>
                            <Col xs={12} sm={12} md={6} lg={3} key={index} >
                                <Product product={product} />
                            </Col>
                        </>
                    ))}
                </Row>
            </Col>
            <Col xs={12} sm={12} lg={3}>
                TIme line
            </Col>
        </Row>
    )
}

export default ProductAndHistory