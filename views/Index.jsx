const React = require('react')

class Index extends React.Component {
    render() {
    // const { products } = this.props
    return (
    <div>
        <h1>Signature Pies</h1>
            <ul>
            {this.props.products.map((product, i) => {
                return (
                    <li>
                    <a href={`/products/${product.id}`}>
                        {product.name}</a><br />
                        {product.description} <br />
                        {product.price} <br />
                        Quantity Available: {product.stockQuantity}
                    <br /> 
                    <form
                        action={`/products/${product.id}?_method=DELETE`} 
                        method='POST'>
                        <input
                            type='submit'
                            value='REMOVE'/> 
                    </form> 
                    <br />   
                    </li>
                )
            })}
            </ul>
            <a href={'/products/new'}><input type='button' value='CREATE YOUR OWN PIE!'/></a>
    </div>
)}
}
module.exports = Index