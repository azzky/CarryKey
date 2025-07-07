import React from 'react';
import Layout from '@components/layout';
import ShopITems from '@hooks/useShopitems';
import MerchItems from '@hooks/useMerchItems';
import Grid from '@components/shopPage/grid';
import { FormattedMessage } from 'react-intl';

import backDesk from '@images/back-shop.jpg';
import { Content } from '@components/searchPage/search.styled';

const Search = ({location, 
    pageContext: {
        langKey: lang
    }
}) => {
    const posts = ShopITems();
    const merch = MerchItems();
    const search = new URLSearchParams(location.search);    
    const string = search.get('q') || 'empty';
    const type = search.get('type') || 'shop';
    const elements = type === 'merch' ? merch : posts;
    const results = elements.filter(item => item?.title && item?.title !== 'empty');
    const includesCase = function(str, arr){
        const state = arr?.filter(i => i.toLowerCase().includes(str.toLowerCase())) || []
        return state.length > 0
    }
    let arr = []
    results.map(post => {
        if(
            string !== 'empty' && (
                post.title.toLowerCase().includes(string.replaceAll('_', ' ').toLowerCase()) ||
                includesCase(string, post.categories) ||
                includesCase(string, post.tags)
            )
        ) {
            arr.push(post)
        }
        return null
    })
    return (
        <Layout hasNavigation isHero
            h1={'Search results for: '+ string.replaceAll('_', ' ')}
            lang={lang}
            type={'shop'}
            heroImageDesktop={backDesk}>
            {arr?.length > 0 ? <Grid items={arr}
                lang={lang}
                isMerch={type === 'merch'}/> : <Content><h2><FormattedMessage id="search.noResults"/></h2></Content>}
        </Layout>
    )
}

export default Search;

export const Head = () => {
    return (
        <>
            <title>Search | CarryKey</title>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
        </>
    )
}