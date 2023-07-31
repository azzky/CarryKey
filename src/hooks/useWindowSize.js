import { useState, useEffect, useCallback } from "react"

function useWidth() {
    const [width, setWidth] = useState(0)
    const [isVertical, setIsVertical] = useState(false)

    const updateWidth = useCallback(() => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth
            const height = window.innerHeight
            setWidth(width)
            setIsVertical(height > width)
            const vh = window.innerHeight * 0.01
            document.documentElement.style.setProperty('--vh', vh.toFixed(2) + 'px')
        }
    }, [])

    useEffect(() => {
        updateWidth()
        window.addEventListener("resize", updateWidth)
        window.addEventListener("orientationchange", updateWidth)
        return () => {
            window.removeEventListener("resize", updateWidth)
            window.removeEventListener("orientationchange", updateWidth)
        };
    }, [updateWidth])

    return {
        width: width,
        isVertical,
        isMobile: width < 754,
        isTablet: width > 753 && width < 1280,
        isDesktop: width > 1279
    }
}

export default useWidth
