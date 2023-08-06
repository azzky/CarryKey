import React from 'react';
import { Link } from 'gatsby';
import Select from 'react-select'

import Wrapper from './tags.styled';

export const Tags = ({tags, path, setSortingValue, sortList}) => {
    return (
        <Wrapper className="top">
            <div className="tags">
                {tags.map(tag=>(<Link className="tag" key={tag} to={'/' +path +'/tag/'+tag.replace(' ','_')}>{tag}</Link>))}
            </div>
            <div className="sorting">
                <Select options={sortList} unstyled
                    defaultValue={sortList[0]}
                    onChange={setSortingValue}
                    className="react-select-container"
                    classNamePrefix="react-select"/>
            </div>
        </Wrapper>
    )
};