import styles from "./pager.module.css";
import ButtonBanner from "../buttonBanner/page";


const Banner = ({title, subTitle, imgUrl, videoId}) => {


    return (
        <main className={styles.container}>
            <secton className={styles.leftWrapper}>
                <section className={styles.left}>
                    <article className={styles.nseriesWrapper}>
                        <p className={styles.firstLetter}>N</p>
                        <p className={styles.series}>S E R I E S</p>
                    </article>

                    <h3 className={styles.title}>{title}</h3>
                    <h3 className={styles.subTitle}>{subTitle}</h3>

                    <article className={styles.playBtnWrapper}>
                        <ButtonBanner videoId={videoId}/>
                    </article>
                </section>
            </secton>

            <section className={styles.bannerImg}
                style={{
                    backgroundImage: `url(${imgUrl}`,
                }}
            > </section>
        </main>
    );
};

export default Banner;