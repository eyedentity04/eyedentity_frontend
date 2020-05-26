import React, { useState, useEffect } from "react";
import axios from "axios";
import UserDetail from "./Search";

function FilterUser() {
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredName, setFilteredName] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://api.riyofirsan.com/users/findQuery?name`)
      .then((res) => {
        setName(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
      <form className="form-inline my-2 my-lg-0 ">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            size="40"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      {search.length }
      <div className="card" style={{position:"absolute"}}>
        {filteredName.slice(0,3).map((item, index) => (
          <UserDetail key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default FilterUser;
