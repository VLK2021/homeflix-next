'use client'
import Image from "next/image";
import {useRouter} from "next/navigation";

import styles from "./page.module.css";


const ButtonBanner = ({videoId}) => {
    const router = useRouter();

    const handleOnPlay = () => {
        router.push(`video/${videoId}`);
    };


    return (
            <button className={styles.btnWithIcon} onClick={handleOnPlay}>
                <Image
                    src="/static/play_arrow.svg"
                    alt="Play icon"
                    width="32"
                    height="32"
                />
                <span className={styles.playText}>Play</span>
            </button>
    );
};

export default ButtonBanner;

