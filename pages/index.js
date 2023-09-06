import ProductList from '../components/product/ProductList'

const dummyProducts = [
    {
        _id: '64f70470038d73079c037412',
        title: 'Best product everrrrr',
        description: 'THE best product ever',
        price: 24.14,
        createdBy: '64f700b9bc71f2e2b41ed340',
        image: '/vercel.svg',
        __v: 0,
    },
    {
        _id: '64f70470038d73079c037413',
        title: '2nd Best product everrrrr',
        description: 'The 2nd best product ever',
        price: 3.56,
        createdBy: '64f700b9bc71f2e2b41ed340',
        image: '/vercel.svg',
        __v: 0,
    },
]

export default function HomePage(props) {
    return (
        <ProductList products={props.products}/>
    )
}

// export async function getServerSideProps(context) {
//     // runs for every incoming request
//     // use when data changes all the time, and when request data is needed
//     const req = context.req
//     const res = context.res
//
//     return {
//         props: {
//             products: dummyProducts,
//         },
//     }
// }

export async function getStaticProps() {
    // runs once in the build process, and then every [revalidate] seconds
    // faster than getServerSideProps
    return {
        props: {
            products: dummyProducts,
        },
        revalidate: 10,
    }
}
