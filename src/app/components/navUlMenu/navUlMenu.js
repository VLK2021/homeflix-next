'use client'
import {useRouter} from "next/navigation";

import styles from './navUlMenu.module.css';


const NavUlMenu = () => {
    const router = useRouter();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    };

    const handleOnClickMyList = (e) => {
        e.preventDefault();
        router.push('/browse/my-list');
    };


    return (
        <ul className={styles.navItems}>
        <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
        </li>
        <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
        </li>
    </ul>
    );
};

export default NavUlMenu;