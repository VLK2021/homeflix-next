import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";

import styles from "./login.module.css";


const Page = () => {


    return (
        <main className={styles.container}>
            <Head>
                <title>Netflix SignIn</title>
            </Head>

            <header className={styles.header}>
                <section className={styles.headerWrapper}>
                    <Link className={styles.logoLink} href="/">
                        <article className={styles.logoWrapper}>
                            <Image
                                src="/static/netflix.svg"
                                alt="Netflix logo"
                                width="128"
                                height="34"
                            />
                        </article>
                    </Link>
                </section>
            </header>

            <section className={styles.main}>
                <article className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sign In</h1>

                    <input
                        type="text"
                        placeholder="Email address"
                        className={styles.emailInput}
                        // onChange={handleOnChangeEmail}
                    />

                    {/*<p className={styles.userMsg}>{userMsg}</p>*/}
                    <button className={styles.loginBtn}>
                        {'Sign in'}
                    </button>
                </article>
            </section>
        </main>
    );
};

export default Page;