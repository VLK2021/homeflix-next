// import {Magic} from 'magic-sdk';
//
//
// const createMagic = () => {
//     return (
//         typeof window !== "undefined" &&
//         new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY)
//     );
// };
//
// export const magic = createMagic();

// lib/magic-client.js
import { Magic } from 'magic-sdk';

let magic;

export const createMagic = () => {
    if (!magic && typeof window !== "undefined") {
        magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY);
    }
    return magic;
};

export const getMagic = () => {
    return magic;
};



console.log('magic setup', magic);