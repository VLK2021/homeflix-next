'use client'
import {useState} from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import styles from './logInfoNav.module.css';


const LogInfoNav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [username, setUsername] = useState('vf@gmail.com');
    const router = useRouter();

    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    };

    const handleSignOut = async (e) => {
        e.preventDefault();

        try {
            // const response = await fetch('/api/logout', {
            //     method: 'POST',
            //     headers: {
            //         Authorization: `Bearer ${didToken}`,
            //         'Content-Type': 'application/json',
            //     },
            // });
            //
            // const res = await response.json();
        } catch (error) {
            console.error('Error logging out', error);
            router.push('/login');
        }
    };


    return (
        <>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
                <p className={styles.username}>{username}</p>
                <Image
                    src={'/static/expand_more.svg'}
                    alt="Expand dropdown"
                    width="24"
                    height="24"
                />
            </button>

            {showDropdown && (
                <div className={styles.navDropdown}>
                    <div>
                        <a className={styles.linkName} onClick={handleSignOut}>
                            Sign out
                        </a>
                        <div className={styles.lineWrapper}> </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LogInfoNav;