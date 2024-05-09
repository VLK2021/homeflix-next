import styles from "./page.module.css";
import Banner from "./components/banner/page";
import Navbar from "./components/nav/navbar";
import SectionCard from "./components/card/section-card";
import {getVideos} from "./lib/videos";


export async function getData() {
    return getVideos();
    // const res = await fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=disney&type=video&maxResults=25&key=')
    // return res.json();
}


export default async function Home() {
    const disneyVideos = await getData();


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

                <SectionCard
                    title="Watch it again"
                    // videos={watchItAgainVideos}
                    size="small"
                />

                <SectionCard title="Travel" size="medium" videos={disneyVideos}/>

                <SectionCard
                    title="Productivity"
                    // videos={productivityVideos}
                    size="medium"
                />

                <SectionCard title="Popular" size="small"/>
            </section>
        </main>
    );
}
