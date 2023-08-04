import React from 'react';
import ShopItem from './shopItem';
import Banner from "./banner";
import useShop from '@hooks/useShop'
import useWidth from '@hooks/useWindowSize'
import { Filters } from './filters';
import { MobileFilters } from './mobileFilters';
import { Tags } from '@components/tags';

import { GridWrapper } from "./shop.styled";

const Grid = (props)=>{
    const {items, banner} = props;
    const {isMobile, isTablet} = useWidth()
    const {
        uniqueTags,uniqueCategories,categoryNames,finalItems, setFilterCategories, filterCategories, resetFilters, removeFilter
    } = useShop(items, isTablet, banner);
    return (
        <GridWrapper>
            {isMobile && <MobileFilters count={finalItems.length}/>}
            {!isMobile && <Tags tags={uniqueTags} path="shop" />}
            {!isMobile && <Filters categories={uniqueCategories}
                setFilterCategories={setFilterCategories}
                resetFilters={resetFilters}
                removeFilter={removeFilter}
                filterCategories={filterCategories}
                categoryNames={categoryNames} />}
            <ul className="grid">
                {finalItems.length > 0 && finalItems.map(post => {
                    return post.node.type ? (
                        <Banner post={post} key="banner"/>
                    ) : (
                        <ShopItem post={post} key={post.node.postId} isBanner={false}/>
                    )
                })}
            </ul>
        </GridWrapper>
    )
}

export default Grid