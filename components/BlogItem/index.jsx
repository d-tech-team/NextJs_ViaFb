import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'
import styles from './index.module.scss'

function BlogItem({ blog }) {
    return (
        <Link href={blog.url}>
            <a>
                <Card className={styles.blog}>
                    <Card.Img variant="top" src="/images/logo.png" className={styles.thumbnail} />
                    <div className={styles.contentWrap}>
                        <Card.Header className={styles.title}>
                            {blog.title}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className={styles.subTitle}>{blog.title}</Card.Title>
                            <Card.Text className={styles.text}>
                                {blog.content}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className={styles.createdAt}>
                            <p>Tạo lúc: {blog.createdAt}</p>
                        </Card.Footer>
                    </div>
                </Card>
            </a>
        </Link>
    )
}

export default BlogItem