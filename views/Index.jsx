const React = require('react');
const coffee = require('../models/coffeeModel');

class Index extends React.Component {

        render() {
            const {coffee} = this.props;
            return(
                    <div>
                        <h1>Haba's Coffee Shop</h1>
                        <nav>
                 <a href="/views/new.jsx">Create A New</a>
             </nav>

                    </div>

            );
        }

};

module.exports = Index; 