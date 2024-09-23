import React, {useEffect, useRef, useState} from "react"
import ToTopWrapper from "./toTop.styled";

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const topRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                // Set visibility of button when topRef is not intersecting (out of viewport)
                setIsVisible(!entry.isIntersecting);
            },
            { threshold: 0 } // Trigger when even 1 pixel of topRef is out of view
        );

        if (topRef.current) {
            observer.observe(topRef.current);
        }

        return () => {
            if (topRef.current) {
                observer.unobserve(topRef.current);
            }
        };
    }, []);

    return (
        <>
        <div ref={topRef} style={{ position: 'absolute', top: 0, bottom: 0 }}></div>
        <ToTopWrapper $isVisible={isVisible}>
            <button type="button" onClick={scrollToTop}>
                <svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#totop"/>
                </svg>
            </button>
        </ToTopWrapper>
        </>
    )
}

export default ToTop;