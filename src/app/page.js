import styles from "./page.module.css";
import Banner from "./components/banner/page";


export default function Home() {

  return (
    <main className={styles.main}>
        <Banner
            videoId={"4zH5iYM4wJo"}
            title={"Clifford the red dog"}
            subTitle={"a very cute dog"}
            imgUrl={"/static/clifford.webp"}
        />
    </main>
  );
}
