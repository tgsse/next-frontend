import CreateProductForm from '../../components/product/CreateProductForm'

export default function CreateProductPage() {

    function onCreateProduct(productData) {
        console.log({productData})
    }

    return (
        <CreateProductForm onCreateProduct={onCreateProduct} />
    )
}
