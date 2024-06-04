import React from 'react';
// import { Link } from 'gatsby';
import Select from 'react-select'

import Wrapper from './tags.styled';

export const Tags = ({tags, path, setSortingValue, sortList, selectedTag, sortOption}) => (
    <Wrapper className="top">
        <div className="tags">
            {/* {tags.length > 0 && tags.map(tag=>(<Link className="tag" key={tag} to={'/' +path +'/tag/'+tag.replace(' ','_')}>{tag}</Link>))} */}
            {/* {tags.length === 0 && <Link className='back' to='/shop'>{selectedTag+' x'}</Link>} */}
        </div>
        <div className="sorting">
            <Select options={sortList} unstyled isSearchable={false}
                defaultValue={sortOption}
                onChange={setSortingValue}
                className="react-select-container"
                classNamePrefix="react-select"/>
        </div>
    </Wrapper>
);