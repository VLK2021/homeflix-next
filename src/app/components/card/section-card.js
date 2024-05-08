import clsx from 'classnames';
import Link from "next/link";

import styles from './section-card.module.css';
import Card from "./card";


const SectionCard = (props) => {
    const {title, size, videos = [], shouldWrap = false} = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>

            <article className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
                {videos.map((video, idx) => {
                    return (
                        <Link href={`/video/${video.id}`} key={video.id}>
                            <Card
                                id={idx}
                                imgUrl={video.imgUrl}
                                size={size}
                                // shouldScale={shouldScale}
                            />
                        </Link>
                    );
                })};
            </article>
        </section>
    );
};

export default SectionCard;