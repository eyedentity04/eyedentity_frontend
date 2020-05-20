import React, { useState } from "react";
import "./tag.css";

const TagInput = () => {
  const [tag, setTag] = useState([]);
  
  const addTags = event => {
    if (event.key=="Enter" && event.target.value !== ""){
      setTag([...tag,event.target.value])
      event.target.value=""
    }
  }

  const removeTags = index =>{
    setTag([...tag.filter(tags=>tag.indexOf(tags) !== index)])
  }
  return (
    <div className="tags-input">
        <ul id="tags">
            {tag.map((tags, index) => (
                <li key={index} className="tag">
                    <span className='tag-title'>{tags}</span>
                    <span className='tag-close-icon'
                        onClick={() => removeTags(index)}
                    >
                        x
                    </span>
                </li>
            ))}
        </ul>
        <input
            type="text"
            onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
            placeholder="Press enter to add tags"
        />
    </div>
);
};

export default TagInput
