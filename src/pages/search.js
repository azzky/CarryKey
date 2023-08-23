import React from 'react';
import Layout from '@components/layout'
import ShopITems from '@hooks/useShopitems'
import Grid from '@components/shopPage/grid';

const Search = ({location}) => {
    const posts = ShopITems()
    const string = location.search.split('?search=')[1] || 'empty'
    const includesCase = function(str, arr){
        const state = arr?.filter(i => i.toLowerCase().includes(str.toLowerCase())) || []
        return state.length > 0
    }
    let arr = []
    posts.map(post => {
        if(
            string !== 'empty' && (
                post.title.toLowerCase().includes(string.toLowerCase()) ||
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
            h1={'Search results for: '+ string}>
            {arr?.length > 0 ? <Grid items={arr}/> : <h2>Nothing found</h2>}
        </Layout>
    )
}

export default Search;