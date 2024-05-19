"use client"
import {useState} from "react";

import styles from './inputForm.module.css';
import {useRouter} from "next/navigation";


const InputForm = () => {
    const [email, setEmail] = useState('');
    const [userMsg, setUserMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleOnChangeEmail = (e) => {
        setUserMsg('');
        const email = e.target.value;
        setEmail(email);
    };

    const handleLoginWithEmail = async (e) => {
        e.preventDefault();
        if (email === 'www') {
            // log in a user by their email
            try {
                setIsLoading(true);
                router.push('/');

                // const didToken = await magic.auth.loginWithMagicLink({
                //     email,
                // });
                // if (didToken) {
                //     const response = await fetch('/api/login', {
                //         method: 'POST',
                //         headers: {
                //             Authorization: `Bearer ${didToken}`,
                //             'Content-Type': 'application/json',
                //         },
                //     });
                //
                //     const loggedInResponse = await response.json();
                //     if (loggedInResponse.done) {
                //         router.push('/');
                //     } else {
                //         setIsLoading(false);
                //         setUserMsg('Something went wrong logging in');
                //     }
                // }
            } catch (error) {
                // Handle errors if required!
                console.error('Something went wrong logging in', error);
                setIsLoading(false);
            }
        } else {
            // show user message
            setIsLoading(false);
            setUserMsg('Enter a valid email address');
        }

    };

    return (
        <section className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>

            <input
                type="text"
                placeholder="Email address"
                className={styles.emailInput}
                onChange={handleOnChangeEmail}
            />

            <p className={styles.userMsg}>{userMsg}</p>
            <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
                {isLoading ? 'Loading...' : 'Sign In'}
            </button>
        </section>
    );
};

export default InputForm;