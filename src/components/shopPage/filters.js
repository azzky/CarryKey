import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";

export const Filters = ({categories, categoryNames, setFilterCategories, filterCategories, resetFilters, removeFilter}) => {
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
        <div className="filters">
            <h3>
                <FormattedMessage id="shop.filters"/>
            </h3>
            {filterCategories?.length > 0 ? (<div className="applied">
                <p className="applied-title"><FormattedMessage id="shop.activeFilters"/></p>
                <button className="reset" onClick={resetFilters}><FormattedMessage id="global.clear"/></button>
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
            <p className="filter-name"><FormattedMessage id="filter.category"/></p>
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
    )
}