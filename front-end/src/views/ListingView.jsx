import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListingView = ({ props }) => {
  const [view, setView] = useState(false);

  const navigate = useNavigate();

  const editListing = (id) => {
    navigate('/edit/'+id)
   
  }

  const View = () => {
    const deleteListing = async (id) => {
      console.log("delete route", id);
      const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      };
      const data = await fetch(`/listing/${id}`, requestOptions);
      console.log("deleting", data);
      window.location.reload();
    };

    return (
      <div>
        <div>
          <div>
            <img
              className="image"
              src={`/images/ComingSoon.jpg`}
              alt={`${props.make} cover`}
              height={"350px"}
            />
          </div>
          <div>
            <div>
              <h2>{props.make}</h2>
              <h3>{props.model}</h3>
              <h3>{props.year}</h3>
              <h4>{props.city}</h4>
              <h4>{props.state}</h4>
              <h4>{props.mileage}</h4>
              <h3>{props.price}</h3>
            </div>
            <div>
              <button onClick={ () => editListing(props.id) }>edit</button>
              <button onClick={ () => deleteListing(props.id) }>delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="view-container" onClick={() => setView(!view)}>
      {view}
    </div>
  );
};

export default ListingView;