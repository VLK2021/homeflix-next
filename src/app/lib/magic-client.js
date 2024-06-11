"use client"
// import {Magic} from 'magic-sdk';
//
//
// const createMagic = () => {
//
//     return (
//         typeof window !== "undefined" &&
//         new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY)
//     );
// };
//
// export const magic = createMagic();

import {Magic} from 'magic-sdk';


export const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY);

magic.auth.loginWithMagicLink({email: 'vircheli@gmail.com'});


console.log('magic setup', magic);



