import Head from 'next/head'
import React from 'react'
import BlogItem from '../../components/BlogItem'
import PageTitle from '../../components/Breadcumb'

const blogs = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eius.',
        url: '/blogs/blog1',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, cupiditate?',
        createdAt: '20/10/2022'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eius.',
        url: '/blogs/blog2',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, cupiditate?',
        createdAt: '20/10/2022'
    },
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eius.',
        url: '/blogs/blog3',
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, cupiditate?',
        createdAt: '20/10/2022'
    },
]
function News() {
    return (
        <>
            <Head>
                <title>Tin tức</title>
            </Head>
            <PageTitle title="Tin Tức"></PageTitle>
            {
                blogs.map((blog, index) => (
                    <BlogItem key={index} blog={blog} />
                ))
            }
        </>
    )
}

export default News