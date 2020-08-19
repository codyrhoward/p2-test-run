const React = require('react');

class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Vegetable page</h1>
              <form action="/vegetables" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Is Green: <input type="checkbox" name="isGreen" /><br/>
                  <input type="submit" name="" value="Create Vegetable"/>
               </form>
          </div>);
    }
  }
  
  module.exports = New;