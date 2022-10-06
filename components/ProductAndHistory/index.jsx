import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../Product'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
                <VerticalTimeline layout={'1-column-left'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Col>
        </Row>
    )
}

export default ProductAndHistory