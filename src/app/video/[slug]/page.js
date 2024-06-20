// "use client"
import React from 'react';

import styles from './SingleItem.module.css';


const SingleItem = ({params}) => {



    return (
        <main className={styles.wrap}>
            {params.slug}
        </main>
    );
};

export default SingleItem;