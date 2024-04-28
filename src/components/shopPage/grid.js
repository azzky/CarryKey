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
    const {items, banner, selectedTag} = props;
    const {isMobile, isTablet, width} = useWidth()
    const {
        uniqueTags,categories,categoryNames,finalItems, setFilterCategories, filterCategories, resetFilters, removeFilter, setSortingValue, sortList,
        hasBanner, sortOption
    } = useShop(items, width, isTablet, banner, 'shop');
    return (
        <GridWrapper>
            {isMobile && <MobileFilters count={hasBanner ? finalItems.length - 1 : finalItems.length}
                categories={categories}
                setFilterCategories={setFilterCategories}
                resetFilters={resetFilters}
                removeFilter={removeFilter}
                filterCategories={filterCategories}
                categoryNames={categoryNames}
                setSortingValue={setSortingValue}
                sortOption={sortOption}
                sortList={sortList}/>}
            {!isMobile && <Tags tags={uniqueTags} path="shop"
                setSortingValue={setSortingValue}
                sortOption={sortOption}
                selectedTag={selectedTag}
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
                        <ShopItem post={post.node ? post.node : post} key={post.node ? post.node.postId : post.postId} isBanner={false}/>
                    )
                })}
            </ul>
        </GridWrapper>
    )
}

export default Grid