const React = require('react')
const pieStyle = {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Tahoma',
    color: '#990000',
    backgroundColor: '#FFFF99',
  
  }
  const buttonStyle = {
    color: '#ffffff',
    backgroundColor: '#556b2f'
  }

class Index extends React.Component {
    render() {
    // const { products } = this.props
    return (
    <div>
        <body style={pieStyle}>
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
                            style={buttonStyle}
                            type='submit'
                            value='REMOVE'/> 
                    </form> 
                    <br />   
                    </li>
                )
            })}
            </ul>
            <a href={'/products/new'}><input style={buttonStyle}type='button' value='CREATE YOUR OWN PIE!'/></a>
            </body>
    </div>
)}
}
module.exports = Index