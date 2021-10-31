import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
        const { innerWidth, innerHeight } = window;
        return { width: innerWidth, height: innerHeight }
    } else {
        return {
            width: 0,
            height: 0
        };
    }
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}
