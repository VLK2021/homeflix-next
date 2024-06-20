
import React from 'react';

import styles from './SingleItem.module.css';
import {getVideoById} from "../../../lib/videos";


const SingleItem = async ({params}) => {
    const dataVideo = await getVideoById(params.slug);
    const {title, imgUrl, id, description, publishTime, channelTitle, statistics} = dataVideo[0];



    return (
        <main className={styles.wrap}>
            {title}
        </main>
    );
};

export default SingleItem;