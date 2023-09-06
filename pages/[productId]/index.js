import ProductDetails from '../../components/product/ProductDetails'

const dummyProducts = [
    {
        _id: '64f70470038d73079c037412',
        title: 'Best product everrrrr',
        description: 'THE best product ever',
        price: 24.14,
        createdBy: '64f700b9bc71f2e2b41ed340',
        image: 'https://en.wikipedia.org/wiki/Coffee_filter#/media/File:Die_Chemex_6_Cup.jpg',
        __v: 0,
    },
    {
        _id: '64f70470038d73079c037413',
        title: '2nd Best product ever!',
        description: 'The 2nd best product ever!',
        price: 3.56,
        createdBy: '64f700b9bc71f2e2b41ed340',
        image: '/vercel.svg',
        __v: 0,
    },
]

export default function ProductDetailsPage(props) {
    return (
        <ProductDetails product={props.product}/>
    )
}

export function getStaticPaths() {
    // needed to generate all possible versions of the dynamic page

    return {
        fallback: false,
        paths: dummyProducts.map(p => {
            return {
                params: {
                    productId: p._id,
                },
            }
        }),
    }
}

export async function getStaticProps(context) {
    // fetch product data

    const productId = context.params.productId

    return {
        props: {
            product: dummyProducts.find(p => p._id === productId),
        },
    }
}
