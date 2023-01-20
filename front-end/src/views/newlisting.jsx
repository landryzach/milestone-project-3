const React = require('react')
const Def = require('../default')

function NewListing () {
    return (
        <Def>
          <main>
            <h1>Create a New Listing</h1>
            <form method="POST" action="/places">
                <div className="form-group">
                    <label htmlFor="name">Car Name ("Year" "Make" "Model")</label>
                    <input className="form-control" id="name" name="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Car Picture</label>
                    <input className="form-control" type="url" id="pic" name="pic"/>
                </div>
                <div className="form-group">
                    <label htmlFor="mileage">Car Mileage</label>
                    <input className="form-control" id="mileage" name="mileage" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Car Price</label>
                    <input className="form-control" id="price" name="price" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" required/>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Listing" />
            </form>
          </main>
        </Def>
    )
}

module.exports = NewListing