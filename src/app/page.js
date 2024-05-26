import styles from "./page.module.css";
import Banner from "./components/banner/page";
import Navbar from "./components/nav/navbar";
import SectionCard from "./components/card/section-card";
import {getPopularVideos, getVideos} from "./lib/videos";
import MagicClient from "./lib/magic-comp-client";


export default async function Home() {
    const disneyVideos = await getVideos("disney trailer");
    const travelVideos = await getVideos("travel");
    const popularVideos = await getPopularVideos();
    const productivityVideos = await getVideos("Productivity");


    return (
        <main className={styles.main}>
            <Navbar/>

            <Banner
                videoId={"4zH5iYM4wJo"}
                title={"Clifford the red dog"}
                subTitle={"a very cute dog"}
                imgUrl={"/static/clifford.webp"}
            />

            <section className={styles.sectionWrapper}>
                <SectionCard title="Disney" size="large" videos={disneyVideos}/>

                <SectionCard title="Watch it again" videos={disneyVideos} size="small"/>

                <SectionCard title="Travel" size="small" videos={travelVideos}/>

                <SectionCard title="Productivity" videos={productivityVideos} size="medium"/>

                <SectionCard title="Popular" size="small" videos={popularVideos}/>
            </section>

            <MagicClient/>
        </main>
    );
}
