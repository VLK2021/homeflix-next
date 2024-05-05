import Link from "next/link";
import Image from "next/image";

import styles from './Navbar.module.css';
import NavUlMenu from "../navUlMenu/navUlMenu";


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
                        {/*<button className={styles.usernameBtn} onClick={handleShowDropdown}>*/}
                        {/*    <p className={styles.username}>{username}</p>*/}
                        {/*    /!** Expand more icon *!/*/}
                        {/*    <Image*/}
                        {/*        src={'/static/expand_more.svg'}*/}
                        {/*        alt="Expand dropdown"*/}
                        {/*        width="24"*/}
                        {/*        height="24"*/}
                        {/*    />*/}
                        {/*</button>*/}

                        {/*{showDropdown && (*/}
                        {/*    <div className={styles.navDropdown}>*/}
                        {/*        <div>*/}
                        {/*            /!*<a className={styles.linkName} onClick={handleSignout}>*!/*/}
                        {/*            /!*    Sign out*!/*/}
                        {/*            /!*</a>*!/*/}
                        {/*            /!*<div className={styles.lineWrapper}></div>*!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </section>
                </nav>
            </section>
        </main>
    );
};

export default Navbar;