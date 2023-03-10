const { statement } = require('@babel/template');
const React = require('react');
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


  class Show extends React.Component {
    render() {
    const { product } = this.props
    let renderOrder = () => {
        if(product.stockQuantity > 0){
            return <div>
              <body style={pieStyle}>   
                <form action={`/products/${this.props.product._id}?_method=PUT`}  method="POST">
                <input type="hidden" name="name" defaultValue={this.props.product.name}/>
                <br/>
                <input type="hidden" name="description" defaultValue={this.props.product.description}/>
                <br />
                <input type="hidden" name="stockQuantity" defaultValue={this.props.product.stockQuantity-1}/>
                <br />
                <input style={buttonStyle} type="submit" value="ORDER"/>
        </form>
        </body>   
        </div>
        } else {
            return <div><h3>OUT OF STOCK</h3></div>
        }
    }
    return (
     <div>
      <body style={pieStyle}>
      <h1>Signature Pies</h1>
      <h2>{product.name}</h2>
      <br /> 
      <h3>
        <img src={this.props.product.image}></img>
        <br />
        {product.description}
        <br />
        {product.price}
        <br />
        {renderOrder()}
      <a href={'/products'}><input style={buttonStyle} type='button' value='Back'/></a>
      </h3>
      <br/>
      <a href={`/products/${product.id}/edit`}><input style={buttonStyle} type='button' value='Additional Toppings'/></a>
      </body>
      </div>)
    }
  }

module.exports = Show