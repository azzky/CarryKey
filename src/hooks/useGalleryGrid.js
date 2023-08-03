import useWidth from '@hooks/useWindowSize'

const useGalleryGrid = (posts) => {
    const { width } = useWidth()
    let columnNumber = 2
    let getWidth = false
    let tags = []

    const setWidth  = () => {
        if (posts.length < columnNumber) columnNumber = posts.length
        getWidth = true
    }

    switch (true) {
        case width > 1279:
            columnNumber = 4
            setWidth()
            break
        case width > 1052:
            columnNumber = 3
            setWidth()
            break
        // case width > 753:
        //     columnNumber = 2
        //     setWidth()
        //     break
        default:
            getWidth = true
    }
    let postSubArray = [...Array(columnNumber)].map((_, i) => [])

    for (let i = 0; i < posts.length; i++) {
        postSubArray[(i + columnNumber) % columnNumber].push(posts[i])
        if (posts[i].node.tags) {
            tags = [...tags, ...posts[i].node.tags]
        }
    }
    const uniqueTags = [...new Set(tags)];
    return {
        columnNumber,
        getWidth,
        uniqueTags,
        postSubArray
    }
}

export default useGalleryGrid