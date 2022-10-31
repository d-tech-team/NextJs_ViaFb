import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Product'

function ProductByCategory({category, products}) {
    return (
        <div>
            <h3 className="mb-5 text-uppercase">{category?.title} ✅</h3>
            <Row>
                {Array.isArray(products) && products.map((product, index) => (
                    <Col xs={12} sm={12} md={6} lg={3} key={index}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProductByCategory