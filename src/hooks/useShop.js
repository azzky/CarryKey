import { useState, useCallback } from 'react'

const useShop = (items, isTablet, banner) => {
    let finalItems = items;
    const hasBanner = banner?.node?.type || false;
    const bannerPosition = hasBanner ? banner.node.position - 1 : 0
    const categories = {};
    let tags = [];
    const [filterCategories, setFilterCategories] = useState(null);
    const index = isTablet && bannerPosition % 2 !== 0 ? bannerPosition - 1 : bannerPosition;
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
            banner,
            ...items.slice(index)
        ];
    }
    if (hasBanner && items.length <= index) {
        finalItems = [...items, banner]
    }
    
    if(filterCategories) {
        finalItems = finalItems.filter(el => {
            let state = false;
            if(el.node.type) return true;
            if (filterCategories.length === 0) return true;
            for(let i = 0; i< filterCategories.length;i++) {
                if (el.node.categories?.includes(filterCategories[i])) {
                    state = true;
                }
            }
            return state
        });
    }
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