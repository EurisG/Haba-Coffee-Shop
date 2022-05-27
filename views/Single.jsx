const React = require('react');
const coffee = require('../models/coffeeModel');

class Single extends React.Component {

            render(){
                const {coffee} = this.props.coffee;
                return(
                        <div>

                            <h1>This is a single Product</h1><br />
                            <h2>{Coffee}</h2>

                        </div>


                );

            }

}

module.exports = Single;