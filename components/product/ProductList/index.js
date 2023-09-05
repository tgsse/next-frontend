import ProductItem from '../ProductItem'
import classes from './ProductList.module.css'

function ProductList(props) {
    return (
        <ul className={classes.list}>
            {props.products.map((product) => (
                <ProductItem
                    key={product._id}
                    product={product}
                />
            ))}
        </ul>
    )
}

export default ProductList
