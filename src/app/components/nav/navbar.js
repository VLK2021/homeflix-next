import Link from "next/link";
import Image from "next/image";

import styles from './Navbar.module.css';
import NavUlMenu from "../navUlMenu/navUlMenu";
import LogInfoNav from "../logInfoNav/logInfoNav";


const Navbar = () => {


    return (
        <main className={styles.container}>
            <section className={styles.wrapper}>
                <Link className={styles.logoLink} href="/">
                    <article className={styles.logoWrapper}>
                        <Image
                            src="/static/netflix.svg"
                            alt="Netflix logo"
                            width={"128"}
                            height={"34"}
                        />
                    </article>
                </Link>

                <NavUlMenu/>

                <nav className={styles.navContainer}>
                    <section>
                        <LogInfoNav/>
                    </section>
                </nav>
            </section>
        </main>
    );
};

export default Navbar;