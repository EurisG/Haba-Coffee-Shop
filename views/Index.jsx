const React = require('react');
// const Coffee = require('../models/coffeeModel');
const product = require('../models/product');

class Index extends React.Component {

        render() {
            // const {Coffee} = this.props;
    //         const product = this.props.product;
    //  product.img.includes('.jpg')? product.img: product.img += '.jpg';
    //  console.log(product.img)
            return(
                
                    <div>
                        <h1>Haba's Coffee Shop</h1>
                        
                        <ul>
                    {product.map((product, i) => {
                        return(
                            <li>
                                  <img src={product.img}></img><br />
                             <a href={`/models/product.js${i}`}><br />{capitalize(product.name)}</a>{' '}<br />Price:{" "}${product.price}
                            
                            </li>
                           
                            // <img src={pokemon.img}></img>
                       
                        
                        );

                    })}
                </ul>

                        
                        <nav>
                 <a href={`/views/New.jsx`}>Create A New Product</a><br />
                 <a href={`./Single.jsx`}>single Product</a>
                 
                        </nav>

                    </div>

            );
            function capitalize(str){
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }

};

module.exports = Index; 