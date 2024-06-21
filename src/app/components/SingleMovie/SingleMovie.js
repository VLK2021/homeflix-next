"use client"
import {useRouter} from "next/navigation";

import styles from './SingleMovie.module.css';


const SingleMovie = ({movie}) => {
    const {title, imgUrl, id, description, publishTime, channelTitle, statistics} = movie;
    const router = useRouter();


    return (
        <main className={styles.wrap}>
            <button onClick={() => router.back()}>back</button>
            {title}
        </main>
    );
};

export default SingleMovie;