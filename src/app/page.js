import styles from "./page.module.css";
import Banner from "./components/banner/page";
import Navbar from "./components/nav/navbar";
import SectionCard from "./components/card/section-card";
import {getPopularVideos, getVideos} from "./lib/videos";
import {magic} from "./lib/magic-client";


// Серверна функція для перевірки автентифікації
// async function checkForLogin() {
//     try {
//         const isLoggedIn = await magic.user.isLoggedIn();
//         console.log('isLoggedIn', isLoggedIn);
//         return isLoggedIn;
//     } catch (error) {
//         console.error("Failed to check login status:", error);
//         return false;
//     }
// }
// Функція для отримання даних на сервері
// async function getData() {
//     const isLoggedIn = await checkForLogin();
//
//     if (isLoggedIn === false) {
//         redirect('/login');
//     }
//
//     const disneyVideos = await getVideos("disney trailer");
//     const travelVideos = await getVideos("travel");
//     const popularVideos = await getPopularVideos();
//     const productivityVideos = await getVideos("Productivity");
//
//     return {
//         disneyVideos,
//         travelVideos,
//         popularVideos,
//         productivityVideos,
//     };
// }


export default async function Home() {
    // const isLoggedIn = await checkForLogin();
    // if (isLoggedIn === false) {
    //     console.log('isLoggedIn52', isLoggedIn);
    //     redirect('/login');
    // }
    // const { disneyVideos, travelVideos, popularVideos, productivityVideos } = await getData();
    const disneyVideos = await getVideos("disney trailer");
    const travelVideos = await getVideos("travel");
    const popularVideos = await getPopularVideos();
    const productivityVideos = await getVideos("Productivity");


    console.log('magic', {magic});

    return (
        <main className={styles.main}>
            <Navbar/>

            <Banner
                videoId={"4zH5iYM4wJo"}
                title={"Clifford the red dog"}
                subTitle={"a very cute dog"}
                imgUrl={"/static/clifford.webp"}
            />

            <section className={styles.sectionWrapper}>
                <SectionCard title="Disney" size="large" videos={disneyVideos}/>

                <SectionCard title="Watch it again" videos={disneyVideos} size="small"/>

                <SectionCard title="Travel" size="small" videos={travelVideos}/>

                <SectionCard title="Productivity" videos={productivityVideos} size="medium"/>

                <SectionCard title="Popular" size="small" videos={popularVideos}/>
            </section>
        </main>
    );
}




// import styles from "./page.module.css";
// import Banner from "./components/banner/page";
// import Navbar from "./components/nav/navbar";
// import SectionCard from "./components/card/section-card";
// import { getPopularVideos, getVideos } from "./lib/videos";
// import { magic } from "./lib/magic-client";
// import { redirect } from "next/navigation";
//
// // Серверна функція для перевірки автентифікації
// async function checkForLogin() {
//     try {
//         const isLoggedIn = await magic.user.isLoggedIn();
//         console.log(isLoggedIn);
//         return isLoggedIn;
//     } catch (error) {
//         console.error("Failed to check login status:", error);
//         return false;
//     }
// }
//
// // Функція для отримання даних на сервері
// async function getData() {
//     const isLoggedIn = await checkForLogin();
//
//     if (isLoggedIn === false) {
//         redirect('/login');
//     }
//
//     const disneyVideos = await getVideos("disney trailer");
//     const travelVideos = await getVideos("travel");
//     const popularVideos = await getPopularVideos();
//     const productivityVideos = await getVideos("Productivity");
//
//     return {
//         disneyVideos,
//         travelVideos,
//         popularVideos,
//         productivityVideos,
//     };
// }
//
// export default async function Home() {
//     const { disneyVideos, travelVideos, popularVideos, productivityVideos } = await getData();
//
//     return (
//         <main className={styles.main}>
//             <Navbar />
//
//             <Banner
//                 videoId={"4zH5iYM4wJo"}
//                 title={"Clifford the red dog"}
//                 subTitle={"a very cute dog"}
//                 imgUrl={"/static/clifford.webp"}
//             />
//
//             <section className={styles.sectionWrapper}>
//                 <SectionCard title="Disney" size="large" videos={disneyVideos} />
//                 <SectionCard title="Watch it again" videos={disneyVideos} size="small" />
//                 <SectionCard title="Travel" size="small" videos={travelVideos} />
//                 <SectionCard title="Productivity" videos={productivityVideos} size="medium" />
//                 <SectionCard title="Popular" size="small" videos={popularVideos} />
//             </section>
//         </main>
//     );
// }
