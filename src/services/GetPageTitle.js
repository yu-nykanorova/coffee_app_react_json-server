const GetPageTitle =() => {

    const getPageTitle = (pathname) => {
        const routes = {
            "/cart": "Cart",
            "/favorites": "Favorites",
        };

        return routes[pathname] || "";
    };
    
    return { getPageTitle };
}

export default GetPageTitle;