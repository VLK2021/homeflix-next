import {Magic} from 'magic-sdk';


const createMagic = () => {
    return (
        typeof window !== "undefined" &&
        new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY)
    );
};

export const magic = createMagic();

console.log('magic setup', magic);



// lib/magic-client.js
// import { Magic } from 'magic-sdk';
//
// let magic;
//
// const createMagic = () => {
//     if (typeof window !== "undefined") {
//         magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY);
//     }
//     return magic;
// };
//
// console.log('magic setup', magic);