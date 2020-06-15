import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "./Search";

function FilterUser() {

  const url = process.env.REACT_APP_API_URL

  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/users/show`)
      .then((res) => {
        setName(res.data);
        setLoading(false);
      })
  }, []);
  
  useEffect(() => {
    setFilteredName(
      name.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, name]);

  if (loading) {
    return <p>Loading name...</p>;
  }

  return (
    <div>
      <form className="form-inline my-2 my-lg-0 ml-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control search"
            placeholder="Search"
            size="60"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      {search.length > 1 && ( 
      <div className="card" style={{position:"absolute"}}>
        {filteredName.map((item, index) => (
          <UserDetail key={index} {...item} />
        ))}
      </div>
      )}
    </div>
  );
}

export default FilterUser;
