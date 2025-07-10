import { useState, useCallback, useEffect } from 'react'
import { useIntl } from 'react-intl';

const getTagsAndCategories = array => {
    let tags = [];
    const categories = {};
// start getting all the tags and categories possible
    array.map(post => {
        if (post.categories) {
            post.categories.map(cat => {
                if(categories[cat]) {
                    categories[cat] = categories[cat] + 1
                } else {
                    categories[cat] = 1
                }
                return null
            })
        }
        if (post.tags) {
            tags = [...tags, ...post.tags]
        }
        return null
    })
    const uniqueTags = [...new Set(tags)];
    // end getting all the tags and categories possible
    return {uniqueTags, categories}
}

const useShop = (items, width, isTablet, banner, path) => {
    const intl = useIntl()
    const sortList = [
        { value: 'default', label: intl.formatMessage({id: 'sort.new'}) },
        { value: 'bestsellers', label: intl.formatMessage({id: 'sort.bestsellers'}) },
        { value: 'priceAsc', label: intl.formatMessage({id: 'sort.priceUp'}) },
        { value: 'priceDesc', label: intl.formatMessage({id: 'sort.priceDown'}) },
        { value: 'alphaAsc', label: intl.formatMessage({id: 'sort.nameUp'}) },
        { value: 'alphaDesc', label: intl.formatMessage({id: 'sort.nameDown'}) }
    ];
    let finalItems = items;
    const isGallery = path === 'gallery'
    const hasBanner = banner?.type || false;
    let columnNumber = 2
    let getWidth = false
    const bannerPosition = hasBanner ? banner.position - 1 : 0
    const [filterCategories, setFilterCategories] = useState([]);
    const [sortOption, setSortOption] = useState(sortList[0].value);
    const index = isTablet && bannerPosition % 2 !== 0 ? bannerPosition - 1 : bannerPosition;
    const setWidth  = () => {
        if (isGallery && items.length < columnNumber) columnNumber = items.length
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
        default:
            getWidth = true
    }
    let postSubArray = isGallery ? [...Array(columnNumber)].map((_, i) => []) : []
    
    const resetFilters = useCallback(() => {
        setFilterCategories([]);
    }, []);

    const removeFilter = useCallback(value => {
        setFilterCategories(prev => {
            const newfilters = prev.filter(el=>el !== value)
            return newfilters || []
        })
    }, []);
    const setSortingValue = useCallback(opt => {
        setSortOption(opt.value)
    }, [])
    
    if(filterCategories.length > 0) {
        finalItems = finalItems.filter(el => {
            let state = false;
            if(el.type) return true;
            if (filterCategories.length === 0) return true;
            for(let i = 0; i< filterCategories.length;i++) {
                if (el.categories?.includes(filterCategories[i])) {
                    state = true;
                }
            }
            return state
        });
    }
    
    const {uniqueTags, categories} = getTagsAndCategories(items)
    // TODO if we dont need categories to update after filtering - move it in the beginning of the hook
    // start sorting
        switch (sortOption) {
            case sortList[0].value: // use postId
                finalItems = finalItems.sort((el1,el2) => el2.postId - el1.postId)
                break
            case sortList[1].value: // bestsellers
                finalItems = finalItems.sort((el1,el2) => {
                    if (el1.isBestseller && !el2.isBestseller) {
                        return -1;
                    }
                    if (!el1.isBestseller && el2.isBestseller) {
                        return 1;
                    }
                    return 0;
                })
                break;
            case sortList[2].value: // price ASC
                finalItems = finalItems.sort((el1,el2) => el1.price - el2.price)
                break;
            case sortList[3].value: // price DESC
                finalItems = finalItems.sort((el1,el2) => el2.price - el1.price)
                break;
            case sortList[4].value: // alphabetical ASC
                finalItems = finalItems.sort((el1, el2) => el1.title.localeCompare(el2.title))
                break;
            case sortList[5].value: // alphabetical DESC
                finalItems = finalItems.sort((el1, el2) => el2.title.localeCompare(el1.title))
                break;
            default:
                break;
        }
    // end sorting
    if (isGallery) {
        for (let i = 0; i < items.length; i++) {
            postSubArray[(i + columnNumber) % columnNumber].push({...items[i], photoIndex: i})
        }
    }
    // put the banner on place after all
    if (hasBanner && finalItems.length > index) {
        finalItems = [
            ...finalItems.slice(0, index),
            banner,
            ...finalItems.slice(index)
        ];
    }
    if (hasBanner && finalItems.length <= index) {
        finalItems = [...finalItems, banner]
    }
    // useEffect(() => {
    //     setSortingValue(sortList[1])
    // }, [setSortingValue])    
    
    return {
        uniqueTags: uniqueTags.sort(),
        categories,
        categoryNames: Object.keys(categories).sort(),
        finalItems,
        setFilterCategories,
        filterCategories,
        resetFilters,
        removeFilter,
        setSortingValue,
        sortOption: sortList.find(el => el.value === sortOption),
        sortList,
        columnNumber,
        getWidth,
        postSubArray,
        hasBanner
    }
}

export default useShop;