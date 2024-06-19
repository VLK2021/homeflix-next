'use client'
import Image from "next/image";
import {useState} from "react";
import cls from "classnames";
import { motion } from "framer-motion"

import styles from './card.module.css';
import {defaultImage} from '../../data/defaultImg';


const Card = (props) => {
const {imgUrl, size, shouldScale = true, id = 0} = props;

    const [imgSrc, setImgSrc] = useState(imgUrl);

    const classMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    const handleOnError = () => {
        setImgSrc(defaultImage);
    };

    const scale = id === 0 ? { scaleY: 1.1 } : { scale: 1.1 };

    const shouldHover = shouldScale && {
        whileHover: { ...scale },
    };


    return (
        <main className={styles.container}>
            <section className={ classMap[size]}>
                <motion.article
                    className={cls(styles.imgMotionWrapper, classMap[size])}
                    {...shouldHover}
                >
                    <Image
                    src={imgSrc}
                    alt="image"
                    fill={true}
                    sizes={size}
                    onError={handleOnError}
                    className={styles.cardImg}
                />
                </motion.article>
            </section>
        </main>
    );
};

export default Card;