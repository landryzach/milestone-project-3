import { useState, useEffect } from "react";
import NavBar from "./NavBar";

const Home = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/listings", {
        mode: "cors",
      });
      const jsonData = await data.json();
      setListings(jsonData);
    };
    fetchData();
  }, []);

  const displayListings = listings.map((listing, i) => {
    return <ListItem props={listing} key={i} />;
  });
  return (
    <>
      <NavBar />
      <div>{displayListings}</div>
    </>
  );
}

export default Home;