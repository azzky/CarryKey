import React from 'react';

import { MobileFiltersWrapper } from "./shop.styled";

export const MobileFilters = (props) => {
    const {count} = props
    return (
        <MobileFiltersWrapper>
            <p>{count + ' results'}</p>
            <div className="sorting">
                sorting
            </div>
            <div>
                Filters
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#filter"/>
                </svg>
            </div>
        </MobileFiltersWrapper>
    )
}