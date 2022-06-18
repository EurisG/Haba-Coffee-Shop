const React = require('react');

const myBody = {
    // backgroundColor: "#A3CCAB",
    backgroundImage: "url('https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')",
    // backgroundSize: "cover",
    margin: "50px",
    // backgroundSize: "cover",
    padding: "30px"
}

const head = {
    backgroundColor: "#053D38",
    color: "white",
    textAlign: "center",
    padding: "30px",
    border: "6px white",
    borderStyle: "double",
}

const rdText = {
    color: "white",
    fontSize: "25px",
    textDecoration: "underline #34675C",
    border: "double 4px white",
    padding: "10px",
    borderRadius: "10px",
    
}

class Welcome extends React.Component {

    render() {

        return(

            <div>
                <body style={myBody}>
                    
                <div style={head}>
                <h1>Welcome to Haba's Coffee Shop!</h1>
                <h3>The best Coffee in Town!</h3><br />
                <h3>Click below to view all products :</h3>
                <a style={rdText} href='/home'>All Products</a>
                </div>

            
            </body>
            </div>


        );

    }




};

module.exports = Welcome;