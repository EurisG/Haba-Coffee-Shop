const React = require("react");
const coffee = require("./../modules/coffeeModule");

class Index extends React.Component {
    
    render() {
        const {coffee} = this.props;
        return (
            <div>
                <h1>Haba's Coffee Shop</h1>            
            
            
            
            </div>
        )
    }
};

module.exports = Index;