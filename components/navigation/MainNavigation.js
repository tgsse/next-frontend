import classes from './MainNavigation.module.css'
import Link from 'next/link'

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>Ecommerce Store</div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">All Products</Link>
                    </li>
                    <li>
                        <Link href="/create-product">Add New Product</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
