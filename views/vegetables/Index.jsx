const React = require('react')

class Index extends React.Component{
    render(){
        // const vegetables = this.props.vegetables;
        // OR obj desctructuring:
        const {vegetables} = this.props
        return (
            <>
            <h1>Vegetables Index Page</h1>
            {vegetables.map((vegetable)=>{// the '?' doesnt return undefinded if no data in db
                return(
                  
                    <div key={vegetable._id}>
                        <a href={'/vegetables/new'}>Add New Vegetable</a>
                        <p>{vegetable.name}</p>
                        {vegetable.isGreen ? `it is green`:`it is not green`}<br/>
                        <a href={`/vegetables/${vegetable._id}`}>check it out!</a>
                        <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="delete"/>
                        </form>
                    </div>
                  )
            })}
            </>
        )
    }
}


module.exports = Index