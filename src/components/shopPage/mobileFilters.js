import React, { useState, useCallback } from 'react';
import Select from 'react-select'

import { MobileFiltersWrapper, MobileFiltersContent } from "./shop.styled";

export const MobileFilters = (props) => {
    const {count, setSortingValue, sortList, categories, categoryNames, setFilterCategories, filterCategories,
        resetFilters, removeFilter} = props
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const handleClick = useCallback((value, isSelected) => {
        if (isSelected) { // removed from filters
            setFilterCategories(prev=>{
                return prev.filter(el => el !== value);
            });
        } else { // add to filters
            setFilterCategories(prev=>{
                if (prev) {
                    return [...prev, value]
                } else {
                    return [value]
                }
            });
        }
    }, [setFilterCategories])
    return (
        <>
        <MobileFiltersWrapper>
            <p className="results">{count + ' results'}</p>
            <div className="sorting">
                <p>Sort by:</p>
                <Select options={sortList} unstyled isSearchable={false}
                    defaultValue={sortList[0]}
                    onChange={setSortingValue}
                    className="react-select-container"
                    classNamePrefix="react-select"/>
            </div>
            <button className="filters"
                onClick={() => setIsFilterOpen(prev=>!prev)}>
                <p>Filters</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#filter"/>
                </svg>
            </button>
        </MobileFiltersWrapper>
        <MobileFiltersContent $isOpen={isFilterOpen}>
            <div className="content">
                {filterCategories?.length > 0 ? (<div className="applied">
                    <p className="applied-title">Applied filters</p>
                    <button className="reset" onClick={resetFilters}>Clear all</button>
                    <div className="items">{filterCategories.map(el=>(
                        <button className="item"key={el}
                            onClick={()=>removeFilter(el)}>
                            <p>{el}</p>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use href="#close"/>
                            </svg>
                        </button>
                    ))}</div>
                </div>) : null}
                <p className="filter-name">
                    <span>Category</span>
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                        <use href="#arrowDownMobile"/>
                    </svg>
                </p>
                <div className="filter-items">
                    {categoryNames.map(category=>(
                        <button className="filter-item" key={category}
                            onClick={()=>handleClick(category, filterCategories && filterCategories.includes(category))}
                            >
                            <span className={filterCategories && filterCategories.includes(category) ? 'selected' : ''}>
                                {`${category} (${categories[category]})`}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <button onClick={() => setIsFilterOpen(false)} className="button">Close</button>
            </div>
        </MobileFiltersContent>
        </>
    )
}