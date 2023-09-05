import ProductDetails from '../../components/product/ProductDetails/ProductDetails'

export default function ProductDetailsPage(props) {
    const product = {
        _id: '64f70470038d73079c037412',
        title: 'Best product everrrrr',
        description: 'THE best product ever',
        price: 24.14,
        createdBy: '64f700b9bc71f2e2b41ed340',
        image: 'https://en.wikipedia.org/wiki/Coffee_filter#/media/File:Die_Chemex_6_Cup.jpg',
        __v: 0,
    }

    return (
        <ProductDetails product={product} />
    )
}
/*
*         _id: '64f70470038d73079c037412',
        title: 'Best product everrrrr',
        description: 'THE best product ever',
        price: 24.14,
        createdBy: '64f700b9bc71f2e2b41ed340',
        image: '/vercel.svg',
        __v: 0,
        *
        * */
