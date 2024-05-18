import Link from "next/link";
import Image from "next/image";

import styles from "./login.module.css";
import InputForm from "../components/inputForm/inputForm";


export const metadata = {
    title: 'Sign In page',
    description: 'Sign In page on Netflix',
}


const Login = () => {

    return (
        <main className={styles.container}>
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
                <InputForm/>
            </section>
        </main>
    );
};

export default Login;