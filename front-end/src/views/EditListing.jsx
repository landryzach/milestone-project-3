import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"

function EditListing() {

	const history = useHistory()

    const { id } = useParams()

    const [listing, setListing] = useState({
		make: '',
        model: '',
        year: '',
		city: '',
		state: '',
		mileage: '',
        price: '',
        pic: ''
	})

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:3000/marketplace/${id}`)
			const resData = await response.json()
			setListing(resData)
		}
		fetchData()
	}, [ id ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:3000/marketplace/${listing.id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(listing)
		})

		history.push(`/places/${listing.id}`)
	}

	return (
		<main>
			<h1>Edit Listing</h1>
			<form onSubmit={handleSubmit}>
                <div className="form-group">
					<label htmlFor="make">Make</label>
					<input
						value={listing.make}
						onChange={e => setListing({ ...listing, make: e.target.value })}
						className="form-control"
						id="make"
						name="make"
                        required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="model">Model</label>
					<input
						value={listing.model}
						onChange={e => setListing({ ...listing, model: e.target.value })}
						className="form-control"
						id="model"
						name="model"
                        required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="year">Year</label>
					<input
						value={listing.year}
						onChange={e => setListing({ ...listing, yaer: e.target.value })}
						className="form-control"
						id="year"
						name="year"
                        required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="city">City</label>
					<input
						value={listing.city}
						onChange={e => setListing({ ...listing, city: e.target.value })}
						className="form-control"
						id="city"
						name="city"
                        required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="state">State</label>
					<input
						value={listing.state}
						onChange={e => setListing({ ...listing, state: e.target.value })}
						className="form-control"
						id="state"
						name="state"
                        required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="mileage">Mileage</label>
					<input
						value={listing.mileage}
						onChange={e => setListing({ ...listing, mileage: e.target.value })}
						className="form-control"
						id="mileage" 
                        name="mileage" 
                        required 
                        />
				</div>
                <div className="form-group">
					<label htmlFor="price">Price</label>
					<input
						value={listing.price}
						onChange={e => setListing({ ...listing, price: e.target.value })}
						className="form-control"
						id="price"
						name="price"
                        required
					/>
				</div>
                <div className="form-group">
					<label htmlFor="pic">Picture</label>
					<input
						value={listing.pic}
						onChange={e => setListing({ ...listing, pic: e.target.value })}
						className="form-control"
						id="pic"
						name="pic"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Save" />
			</form>
		</main>
	)
}

export default EditPlaceForm