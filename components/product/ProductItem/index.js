import Card from '../../containers/Card'
import classes from './ProductItem.module.css'

function ProductItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.product.image} alt={props.product.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.product.title}</h3>
                    <p>{props.product.description}</p>
                    <p>{props.product.price}</p>
                </div>
                <div className={classes.actions}>
                    <button>Show Details</button>
                </div>
            </Card>
        </li>
    )
}

export default ProductItem
