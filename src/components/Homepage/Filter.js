import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
 
function Filter() {

    const url = process.env.REACT_APP_API_URL

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(
      `${url}/findQuery?name=redux`,
    );
   
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(url);
   
        setData(result.data);
      };
   
      fetchData();
    }, [url]);
   
    return (
      <Fragment>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button
          type="button"
          onClick={() =>
            setUrl(`${url}/users/findQuery?name=${query}`)
          }
        >
          Search
        </button>
   
        <ul>
          {data.map(item => (
            
            <li key={item}>
              {item.name} , {item._id}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
export default Filter;