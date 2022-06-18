const React = require('react');
// const Coffee = require('../models/coffeeModel');
const product = require('../models/product');

const myBody = {
    // backgroundColor: "#A3CCAB",
    backgroundImage: "url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",
    margin: "50px",
    backgroundSize: "cover"
    // padding: "30px"
}

const head = {
    backgroundColor: "#053D38",
    color: "white",
    textAlign: "center",
    padding: "30px",
    border: "4px #14140F",
    borderStyle: "double",
    // fontFamily: "'Fredericka the Great', cursive",
    fontSize: "50px",
}
const text = {
    color: "#14140F",
    fontSize: "25px",
    textDecoration: "underline #34675C",
    // fontFamily: "'Fredericka the Great', cursive",

}
const proText = {
    color: "white",
    fontSize: "25px",
    textDecoration: "underline #34675C",
    // fontFamily: "'Fredericka the Great', cursive",
}

const secText = {
    color: "#14140F",
    float: "right",
    fontSize: "18px",
    border: "double 6px white",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "bold",
    // fontFamily: "'Fredericka the Great', cursive",
}

const rdText = {
    color: "#14140F",
    fontSize: "18px",
    border: "double 6px white",
    padding: "10px",
    borderRadius: "10px",
    fontWeight: "bold",
    // fontFamily: "'Fredericka the Great', cursive",
}

const myProd = {
        display: "flex",
        justifyContent: "center",
        border: "4px #F26800",
        borderStyle: "double",
        borderRadius: "25px",
        width: "40%",
        backgroundColor: "#053D38",
        color: "white",
}



const myFooter = {
    backgroundColor: "#14140F",
    color: "white",
    textAlign: "center",
    padding: "40px",
    marginTop: "40px",
    fontWeight: "bold"
}

class Index extends React.Component {

        render() {
            // const {Coffee} = this.props;
    //         const product = this.props.product;
    //  product.img.includes('.jpg')? product.img: product.img += '.jpg';
    //  console.log(product.img)
            return(
                
                    <div >
                        <body style={myBody}>
                        <h1 style={head}>Haba's Coffee Shop</h1>
                        <a style={secText} href='/'>Back</a>
                        <h3 style={text}>Choose Item Below</h3>
                        
                        <ul>
                    {product.map((product, i) => {
                        return(
                            <li style={myProd}>
                                  {/* <img src={product.img}></img><br /> */}
                             <a style={proText} href={`/home/New${i}`}><br />{capitalize(product.name)}</a>{' '}<br />Price:{" "}${product.price}
                                <br />
                            </li>
                           
                            // <img src={pokemon.img}></img>
                       
                        
                        );

                    })}
                </ul>

                        
                        <nav>
                        <h3 style={text}>Need to Add a Product ?</h3>
                 <a style={rdText} href={`/home/New`}>Create A New Product</a><br />
                 {/* <a href={`./Single.jsx`}>single Product</a> */}
                        </nav>
                        <div style={myFooter}>
                                <footer >Made By : Euris Gonzalez™</footer>
                                </div>
                    </body>
                    </div>

            );
            function capitalize(str){
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }

};

module.exports = Index; 