import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
 
function Filter() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState(
      'https://api.riyofirsan.com/users/findQuery?name=redux',
    );
   
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(url);
   
        setData(result.data);
        console.log(result.data)
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
            setUrl(`https://api.riyofirsan.com/users/findQuery?name=${query}`)
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