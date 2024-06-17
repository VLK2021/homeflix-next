'use client'
import {useRouter} from "next/navigation";

import styles from './navUlMenu.module.css';
import {magic} from "../../lib/magic-client";
import {useEffect} from "react";


const NavUlMenu = () => {
    const router = useRouter();

    useEffect(() => {
        const checkIsLoggedIn = async () => {
            const isLoggedIn = await magic.user.isLoggedIn();
            if (!isLoggedIn) {
                console.log('User not logged in, redirecting to /login');
                router.push('/login');
            }
        };

        checkIsLoggedIn();
    }, []);

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