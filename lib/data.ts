const data = {
    headerMenu: [
        {
            name: "Today's Deal",
            href: '/search?tag=todays-deal',
        },
        {
            name: 'New Arrivals',
            href: '/search?tag=new-arrivals',
        },
        {
            name: 'Featured Products',
            href: '/search?tag=featured-products',
        },
        {
            name: 'Best Sellers',
            href: '/search?tag=best-sellers',
        },
    ],
    carousels: [
        {
            title: 'Most Popular Shoes For Sale',
            buttonCaption: 'Shop Now',
            image: '/images/banner3.jpg',
            url: '/search?category=Shoes',
            isPublished: true,
        },
        {
            title: 'Best Seller in T-Shirts',
            buttonCaption: 'Shop Now',
            image: '/images/banner1.jpg',
            url: '/search?category=T-Shirts',
            isPublished: true,
        },
        {
            title: 'Best Deals on Wrist Watches',
            buttonCaption: 'See More',
            image: '/images/banner2.jpg',
            url: '/search?category=Wrist Watches',
            isPublished: true,
        },
    ]
}

export default data;