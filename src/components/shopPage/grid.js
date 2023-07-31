import React from 'react';
import ShopItem from './shopItem';
import Banner from "./banner";
import useShop from './useShop'
import { useCallback } from "react";
import { Link } from 'gatsby';
import useWidth from '@hooks/useWindowSize'

import { GridWrapper, MobileFiltersWrapper } from "./shop.styled";

const Tags = ({tags}) => {
    return (
        <div className="top">
            <div className="tags">
                {tags.map(tag=>(<Link className="tag" key={tag} to={'/shop/tag/'+tag}>{tag}</Link>))}
            </div>
            <div className="sorting">
            sorting
            </div>
        </div>
    )
};

const Filters = ({categories, setFilterCategories, filterCategories, resetFilters, removeFilter}) => {
    const handleClick = useCallback(value => {
        setFilterCategories(prev=>{
            if (prev) {
                return [...prev, value]
            } else {
                return [value]
            }
        });
    }, [setFilterCategories])
    return (
        <div className="filters">
            <h3>filters</h3>
            {filterCategories?.length > 0 ? (<div className="applied">
                <p className="applied-title">Applied filters</p>
                <button className="reset" onClick={resetFilters}>Clear all</button>
                <div className="items">{filterCategories.map(el=>(
                    <button className="item"key={el}
                        onClick={e=>removeFilter(el)}>
                        <p>{el}</p>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <use href="#close"/>
                        </svg>
                    </button>
                ))}</div>
            </div>) : null}
            <p className="filter-name">Category</p>
            <div className="filter-items">{categories.map(category=>(
                <button className="filter-item" key={category}
                    onClick={(e)=>handleClick(category)}
                    disabled={filterCategories && filterCategories.includes(category)}>
                    <span className={filterCategories && filterCategories.includes(category) ? 'selected' : ''}>{category}</span>
                </button>
            ))}</div>
        </div>
    )
}

const MobileFilters = (props) => {
    const {count} = props
    return (
        <MobileFiltersWrapper>
            <p>{count + ' results'}</p>
            <div className="sorting">
            sorting
            </div>
            <div>Filters</div>
        </MobileFiltersWrapper>
    )
}

const Grid = (props)=>{
    const {items} = props;
    const {isMobile, isTablet} = useWidth()
    const {
        uniqueTags,uniqueCategories,finalItems, setFilterCategories, filterCategories, resetFilters, removeFilter
    } = useShop(items, isTablet);

    return (
        <GridWrapper>
            {isMobile && <MobileFilters count={finalItems.length}/>}
            {!isMobile && <Tags tags={uniqueTags} />}
            {!isMobile && <Filters categories={uniqueCategories}
                setFilterCategories={setFilterCategories}
                resetFilters={resetFilters}
                removeFilter={removeFilter}
                filterCategories={filterCategories} />}
            <ul className="grid">
                {finalItems.length > 0 && finalItems.map(post => {
                    return post.node.isBanner ? (
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