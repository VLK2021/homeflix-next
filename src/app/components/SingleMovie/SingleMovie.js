"use client"
import {useRouter} from "next/navigation";

import styles from './SingleMovie.module.css';


const SingleMovie = ({movie}) => {
    const {
        title, imgUrl, id, description, publishTime, channelTitle, channelId,
        statistics: {viewCount, likeCount}
    } = movie;
    const router = useRouter();


    return (
        <main className={styles.wrap}>
            <button onClick={() => router.back()}>back</button>
            {title}

            <iframe
                id="ytplayer"
                type="text/html"
                width="100%"
                height="360"
                src={`https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                frameBorder="0"
            > </iframe>
        </main>
    );
};

export default SingleMovie;