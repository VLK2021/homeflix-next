import React from 'react';

import styles from './SingleItem.module.css';
import {getVideoById} from "../../../lib/videos";
import SingleMovie from "../../components/SingleMovie/SingleMovie";


const SingleItem =  async ({params}) => {
    const dataVideo = await getVideoById(params.slug);


    return (
        <main className={styles.wrap}>
            <SingleMovie movie={dataVideo[0]}/>
        </main>
    );
};

export default SingleItem;