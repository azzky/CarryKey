import React from 'react';
import Layout from '@components/layout'
import Grid from '@components/shopPage/grid';
import MerchItems from '@hooks/useMerchItems';
import Meta from "@components/meta";

import backDesk from '@images/back-contact.jpg';

const Merch = () => {
    const items = MerchItems()

    return (
        <Layout hasNavigation isHero
            h1={'Merch'}
            heroImageDesktop={backDesk}>
            {items?.length > 0 && <Grid items={items}
                showFilters={false}
                isMerch/>}
        </Layout>
    )
}

export default Merch;

export const Head = () => {
    return (
        <>
            <link rel="mask-icon" href="safari-pinned-tab.svg" color="#fff"/>
            <Meta title="Merch"/>
        </>
    )
}