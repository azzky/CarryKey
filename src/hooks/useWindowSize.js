import { useState, useEffect, useCallback } from "react"

function useWidth() {
    // Try to get initial values from localStorage
    const getStoredValue = (key, defaultValue) => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem(key);
            return stored !== null ? JSON.parse(stored) : defaultValue;
        }
        return defaultValue;
    };

    const [width, setWidth] = useState(getStoredValue('window-width', 0));
    const [isVertical, setIsVertical] = useState(getStoredValue('window-isVertical', false));

    const updateWidth = useCallback(() => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const isVerticalOrientation = height > width;
            
            // Update state
            setWidth(width);
            setIsVertical(isVerticalOrientation);
            
            // Store in localStorage
            localStorage.setItem('window-width', JSON.stringify(width));
            localStorage.setItem('window-isVertical', JSON.stringify(isVerticalOrientation));
        }
    }, []);

    useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        window.addEventListener("orientationchange", updateWidth);
        return () => {
            window.removeEventListener("resize", updateWidth);
            window.removeEventListener("orientationchange", updateWidth);
        };
    }, [updateWidth]);

    return {
        width: width,
        isVertical,
        isMobile: width < 754,
        isTablet: width > 753 && width < 1280,
        isDesktop: width > 1279
    };
}

export default useWidth;
