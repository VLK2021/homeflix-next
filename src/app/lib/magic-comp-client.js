"use client"
import {createMagic} from "./magic-client";
import {useEffect} from "react";



const MagicClient = () => {
    useEffect(() => {
        const magic = createMagic();
        console.log('Magic instance:', magic);
    }, []);

    return null;
};

export default MagicClient;