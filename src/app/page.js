import styles from "./page.module.css";
import Banner from "./components/banner/page";
import Navbar from "./components/nav/navbar";
import Card from "./components/card/card";


export default function Home() {

  return (
    <main className={styles.main}>
        <Navbar/>

        <Banner
            videoId={"4zH5iYM4wJo"}
            title={"Clifford the red dog"}
            subTitle={"a very cute dog"}
            imgUrl={"/static/clifford.webp"}
        />

        <Card
            imgUrl={'/static/clifford.webp'}
            size={'large'}
        />

        <Card
            imgUrl={''}
            size={'medium'}
        />

        <Card
            imgUrl={'/static/clifford.webp'}
            size={'small'}
        />
    </main>
  );
}
