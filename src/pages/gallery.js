import React from 'react';
import Layout from '@components/layout'

import backDesk from '@images/back-gallery.jpg';

const Gallery = () => {
    return (
        <Layout hasNavigation isHero
            heroImageDesktop={backDesk}
            h1={'Gallery'}>
        </Layout>
    )
}

export default Gallery;