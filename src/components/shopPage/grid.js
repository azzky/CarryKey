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
    const {isMobile, isTablet, width} = useWidth()
    const {
        uniqueTags,categories,categoryNames,finalItems, setFilterCategories, filterCategories, resetFilters, removeFilter, setSortingValue, sortList
    } = useShop(items, width, isTablet, banner, 'shop');
    console.log(finalItems);
    return (
        <GridWrapper>
            {isMobile && <MobileFilters count={finalItems.length}
                categories={categories}
                setFilterCategories={setFilterCategories}
                resetFilters={resetFilters}
                removeFilter={removeFilter}
                filterCategories={filterCategories}
                categoryNames={categoryNames}
                setSortingValue={setSortingValue}
                sortList={sortList}/>}
            {!isMobile && <Tags tags={uniqueTags} path="shop"
                setSortingValue={setSortingValue}
                sortList={sortList} />}
            {!isMobile && <Filters categories={categories}
                setFilterCategories={setFilterCategories}
                resetFilters={resetFilters}
                removeFilter={removeFilter}
                filterCategories={filterCategories}
                categoryNames={categoryNames} />}
            <ul className="grid">
                {finalItems.length > 0 && finalItems.map(post => {
                    return post.type ? (
                        <Banner post={post} key="banner"/>
                    ) : (
                        <ShopItem post={post} key={post.postId} isBanner={false}/>
                    )
                })}
            </ul>
        </GridWrapper>
    )
}

export default Grid