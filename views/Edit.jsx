const React = require('react') 

class Edit extends React.Component{
  render() {
    return (
        <div>
      <form action={`/products/${this.props.product._id}?_method=PUT`}  method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.product.name}/>
          <br/>
          Include: <input type="text" name="description" defaultValue={this.props.product.description}/>
          <br />
          Stock: <input type="text" name="stockQuantity" defaultValue={this.props.product.stockQuantity}/>
          <br />
          Add Pineapple: <input type="checkbox" name="addPineapple" defaultValue={this.props.product.addPineapple}/>
          <br />
          <input type="submit" value="Submit Changes"/>
      </form>
      </div>)
  }
}
module.exports= Edit