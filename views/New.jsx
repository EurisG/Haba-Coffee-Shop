const React = require('react')
// const coffee = require('../models/coffee');
const product = require('../models/product')

class New extends React.Component{

    render() {

        return(
            <>
            <form action="/home" method="POST">
            <div style={inside}>
               Product Name: <input type="text" name='name' placeholder='type..' value={Products.name}></input><br /><br />
               Product Price: <input type="text" name="price" placeholder='cost..' value={Products.price}></input><br /><br />
               Product Image: <textarea type="text" name="img" placeholder='paste img address..' value={Products.img}></textarea><br /><br />
               <input type="submit" name='' value="Create Product" style={button}/>
               </div>
               </form>
    
             </>
        )
    }

}

module.exports = New;