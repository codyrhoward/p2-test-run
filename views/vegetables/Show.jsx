const React = require('react');

class Show extends React.Component {
    render() {
        // const name = this.props.vegetable.name;
        // const color = this.props.vegetable.color;
        // const readyToEat = this.props.vegetable.readyToEat;
        // destructuring
        const { name, isGreen, _id } = this.props.vegetable;
        return (
            <div>
                <h1>Vegetable Show Page</h1>
                <p>The Veggie is {name}</p>
                <p>{isGreen ? `It is green` : `Is not green`}</p>
                <a href={`/vegetables/${_id}/edit`}>Edit</a>
            </div>
        )
    }
}

module.exports = Show;