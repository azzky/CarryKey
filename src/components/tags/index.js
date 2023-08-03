import React from 'react';
import { Link } from 'gatsby';

import Wrapper from './tags.styled';

export const Tags = ({tags, path}) => {
    return (
        <Wrapper className="top">
            <div className="tags">
                {tags.map(tag=>(<Link className="tag" key={tag} to={'/' +path +'/tag/'+tag.replace(' ','_')}>{tag}</Link>))}
            </div>
            <div className="sorting">
            sorting
            </div>
        </Wrapper>
    )
};