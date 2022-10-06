import Image from "next/image";
import ProductAndHistory from "../components/ProductAndHistory";
import styles from "../styles/Home.module.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home({ products }) {
    return (
        <>
            <div className={styles.page_title}>
                <h1 className={styles.title}>
                    <Image src="/images/icon.svg" width={30} height={30} alt="" />
                    VIAFB.VN - VIA FACEBOOK UY TÍN, CHẤT LƯỢNG
                    <Image src="/images/icon.svg" width={30} height={30} alt="" />
                </h1>
                <h3 className={styles.subtitle}>
                    GIAO DỊCH HOÀN TOÀN TỰ ĐỘNG 24/7 - NẠP TIỀN THANH TOÁN 5s BẤT KỂ NGÀY
                    ĐÊM
                </h3>
                <h3 className={styles.subtitle}>
                    <Image src="/images/icon2.svg" width={15} height={12} alt="" />
                    SUPPORT DEPOSIT USDTRC20 - Inbox Admin: <a href="./">Click Here</a>
                    <Image src="/images/icon2.svg" width={15} height={12} alt="" />
                </h3>
            </div>
            <div>
                <h3>Thông Báo Quan Trọng</h3>
                <VerticalTimeline layout={'1-column-left'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    >
                        <h3 className="vertical-timeline-element-title">Creative Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div>
                <ProductAndHistory products={products} />

            </div>
        </>
    );
}


// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    // Pass data to the page via props
    return { props: { products } }
}
