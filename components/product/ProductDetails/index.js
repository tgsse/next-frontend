import classes from './ProductDetails.module.css'

export default function ProductDetails(props) {
    return (
        <section className={classes.detail}>
            <img src={props.product.image} alt={props.product.title}/>
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
        </section>
    )
}
