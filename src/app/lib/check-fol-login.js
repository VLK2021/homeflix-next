// "use client"
// import {useRouter} from "next/navigation";
//
// import {magic} from "./magic-client";
//
//
// const checkForLogin = async () => {
//     const router = useRouter();
//
//     const w = await magic.user.isLoggedIn();
//
//     if (w === false) {
//         return router.push('/login');
//     }
// }
//
// export {checkForLogin};


// import {magic} from "./magic-client";
//
// export async function checkForLogin() {
//     console.log('checkForLogin start');
//     try {
//         const isLoggedIn = await magic.user.isLoggedIn();
//         console.log('isLoggedIn23', isLoggedIn);
//         return isLoggedIn;
//     } catch (error) {
//         console.error("Failed to check login status:", error);
//         return false;
//     }
// }


// import { magic } from "./magic-client";
//
// export async function checkForLogin() {
//     console.log('checkForLogin start');
//     try {
//         if (magic.user && typeof magic.user.isLoggedIn === 'function') {
//             const isLoggedIn = await magic.user.isLoggedIn();
//             console.log('isLoggedIn23', isLoggedIn);
//             return isLoggedIn;
//         } else {
//             console.error("Method magic.user.isLoggedIn is not available.");
//             return false;
//         }
//     } catch (error) {
//         console.error("Failed to check login status:", error);
//         return false;
//     }
// }
