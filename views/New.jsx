const React = require('react')

class New extends React.Component{

    render() {

        return(
            <>
            <form action="/modules/coffeeModule.js" method="POST">
                 Product Name: <input type="text" name="name" placeholder='POST'/><br/>
                 Price: <input type="text" name="color" placeholder='Add' /><br/>
                 Ingredients: <input type="text" name="name" placeholder='POST'/><br/>
                 <input type="submit" name="" value="Create Fruit"/>
               </form>
    
             </>
        )
    }

}

module.exports = New