import React from 'react';
import Layout from '@components/layout'
import ShopITems from '@hooks/useShopitems'
import Grid from '@components/shopPage/grid';

const Search = ({location}) => {
    const posts = ShopITems()
    const string = location.search.split('?search=')[1] || 'empty'
    let arr = []
    posts.map(post => {
        if(
            string !== 'empty' && (
                post.title.toLowerCase().includes(string.toLowerCase()) ||
                post.categories?.includes(string.toLowerCase()) ||
                post.tags?.includes(string.toLowerCase())
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