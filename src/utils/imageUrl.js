function fixImageUrl(url) {
    if (!url) return null;
    if (url.includes('cdn.sanity.io')) {
        return url.replace('cdn.sanity.io', 'images.carrykey.me');
    }
    return url;
}

export default fixImageUrl;