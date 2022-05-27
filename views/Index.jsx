const React = require('react');
const coffee = require('../models/coffeeModel');

class Index extends React.Component {

        render() {
            const {coffee} = this.props;
            return(
                    <div>
                        <h1>Haba's Coffee Shop</h1>

                        
                        <nav>
                 <a href={`/views/New.jsx`}>Create A New Product</a><br />
                 <a href={`/views/Single.jsx`}>single Product</a>
                 
                        </nav>

                    </div>

            );
        }

};

module.exports = Index; 