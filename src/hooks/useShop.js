import { useState, useCallback } from 'react'

const useShop = (items, isTablet, indexFromdata = 3) => { // TODO move indexFromdata to parent and get from data
    let finalItems = items;
    const categories = {};
    let tags = [];
    const [filterCategories, setFilterCategories] = useState(null);
    const index = isTablet && indexFromdata % 2 !== 0 ? indexFromdata - 1 : indexFromdata;
    const hasBanner = true; // TODO
    const bannerElement = {node: {// TODO replace with data from admin
        isBanner: true,
        url: 'hjhgjhgjgj',
        preview: '//images.ctfassets.net/3mb1yc1vta0f/2P49KyvCUPMifVZMXcgoVG/6b3973c85656abc89f7d9f125b2ec67d/back-home.jpg'
    }};
    const resetFilters = useCallback(() => {
        setFilterCategories([]);
    }, []);

    const removeFilter = useCallback(value => {
        setFilterCategories(prev => {
            const newfilters = prev.filter(el=>el !== value)
            return newfilters || []
        })
    }, []);

    if (!items) {
        return {
            uniqueTags: [],
            uniqueCategories: [],
            finalItems: []
        }
    }
    // start getting all the tags and categories possible
    items.map(post => {
        if (post.node.categories) {
            post.node.categories.map(cat => {
                if(categories[cat]) {
                    categories[cat] = categories[cat] + 1
                } else {
                    categories[cat] = 1
                }
                return null
            })
        }
        if (post.node.tags) {
            tags = [...tags, ...post.node.tags]
        }
        return null
    })
    const uniqueTags = [...new Set(tags)];
    // end getting all the tags and categories possible

    if (hasBanner && items.length > index) {
        finalItems = [
            ...items.slice(0, index),
            bannerElement,
            ...items.slice(index)
        ];
    }
    if (hasBanner && items.length <= index) {
        finalItems = [...items, bannerElement]
    }
    
    if(filterCategories) {
        finalItems = finalItems.filter(el => {
            let state = false;
            if(el.isBanner) return true;
            if (filterCategories.length === 0) return true;
            for(let i = 0; i< filterCategories.length;i++) {
                if (el.node.categories?.includes(filterCategories[i])) {
                    state = true;
                }
            }
            return state
        });
    }
// debugger
    return {
        uniqueTags,
        uniqueCategories: categories,
        categoryNames: Object.keys(categories),
        finalItems,
        setFilterCategories,
        filterCategories,
        resetFilters,
        removeFilter
    }
}

export default useShop;