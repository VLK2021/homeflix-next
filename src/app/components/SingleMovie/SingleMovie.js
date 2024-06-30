"use client"
import {useRouter} from "next/navigation";
import {useState} from "react";
import clsx from "classnames";
import Modal from 'react-modal';

import styles from './SingleMovie.module.css';
import Navbar from "../nav/navbar";
import Like from "../icons/like-icon";
import DisLike from "../icons/dislike-icon";





const SingleMovie = ({movie}) => {
    const {
        title, imgUrl, id, description, publishTime, channelTitle, channelId,
        statistics: {viewCount, likeCount}
    } = movie;
    const router = useRouter();
    const [toggleLike, setToggleLike] = useState(false);
    const [toggleDisLike, setToggleDisLike] = useState(false);

    const handleToggleLike = () => {
    }

    const handleToggleDislike = () => {
    }


    //Modal
    //                 isOpen={true}
    //                 contentLabel="Watch the video"
    //                 onRequestClose={() => router.back()}
    //                 className={styles.modal}
    //                 overlayClassName={styles.overlay}




    return (
        <main className={styles.wrap}>
            <Navbar/>

            <div className={styles.modal}>
                <button onClick={() => router.back()} className={styles.btn}>back</button>

                <iframe
                    id="ytplayer"
                    className={styles.videoPlayer}
                    type="text/html"
                    width="100%"
                    height="360"
                    src={`https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&rel=1`}
                    frameBorder="0"
                > </iframe>

                <section className={styles.likeDislikeBtnWrapper}>
                    <article className={styles.likeBtnWrapper}>
                        <button onClick={handleToggleLike}>
                            <div className={styles.btnWrapper}>
                                <Like selected={toggleLike}/>
                            </div>
                        </button>
                    </article>
                    <button onClick={handleToggleDislike}>
                        <div className={styles.btnWrapper}>
                            <DisLike selected={toggleDisLike}/>
                        </div>
                    </button>
                </section>
                <section className={styles.modalBody}>
                    <section className={styles.modalBodyContent}>
                        <article className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </article>
                        <article className={styles.col2}>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>Cast: </span>
                                <span className={styles.channelTitle}>{channelTitle}</span>
                            </p>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>View Count: </span>
                                <span className={styles.channelTitle}>{viewCount}</span>
                            </p>
                        </article>
                    </section>
                </section>
            </div>
        </main>
    );
};

export default SingleMovie;