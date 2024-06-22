"use client"
import {useRouter} from "next/navigation";

import styles from './SingleMovie.module.css';
import {useState} from "react";
import clsx from "classnames";
import Modal from 'react-modal';


const SingleMovie = ({movie}) => {
    const {
        title, imgUrl, id, description, publishTime, channelTitle, channelId,
        statistics: {viewCount, likeCount}
    } = movie;
    const router = useRouter();
    const [toggleLike, setToggleLike] = useState(false);
    const [toggleDisLike, setToggleDisLike] = useState(false);


    return (
        <main>
            <Modal
                isOpen={true}
                contentLabel="Watch the video"
                onRequestClose={() => router.back()}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <button onClick={() => router.back()}>back</button>

                <iframe
                    id="ytplayer"
                    className={styles.videoPlayer}
                    type="text/html"
                    width="100%"
                    height="360"
                    src={`https://www.youtube.com/embed/${id}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
                    frameBorder="0"
                > </iframe>

                {/*<div className={styles.likeDislikeBtnWrapper}>*/}
                {/*    <div className={styles.likeBtnWrapper}>*/}
                {/*        <button onClick={handleToggleLike}>*/}
                {/*            <div className={styles.btnWrapper}>*/}
                {/*                /!*<Like selected={toggleLike}/>*!/*/}
                {/*            </div>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*    <button onClick={handleToggleDislike}>*/}
                {/*        <div className={styles.btnWrapper}>*/}
                {/*            /!*<DisLike selected={toggleDisLike}/>*!/*/}
                {/*        </div>*/}
                {/*    </button>*/}
                {/*</div>*/}
                <div className={styles.modalBody}>
                    <div className={styles.modalBodyContent}>
                        <div className={styles.col1}>
                            <p className={styles.publishTime}>{publishTime}</p>
                            <p className={styles.title}>{title}</p>
                            <p className={styles.description}>{description}</p>
                        </div>
                        <div className={styles.col2}>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>Cast: </span>
                                <span className={styles.channelTitle}>{channelTitle}</span>
                            </p>
                            <p className={clsx(styles.subText, styles.subTextWrapper)}>
                                <span className={styles.textColor}>View Count: </span>
                                <span className={styles.channelTitle}>{viewCount}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Modal>
        </main>
    );
};

export default SingleMovie;