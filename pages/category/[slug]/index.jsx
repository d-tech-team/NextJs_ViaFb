import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../../../components/Product'
import ProductAndHistory from '../../../components/ProductAndHistory'


function Category({products}) {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <ProductAndHistory products={products} />

        </>

    )
}


export default Category


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    // Pass data to the page via props
    return { props: { products } }
}