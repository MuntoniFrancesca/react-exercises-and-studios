import React, { useState } from 'react';
import data from "../data.json"



export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const list = data.projects;
    const project = list[index];
    
    
    function handleClick() {
        if (index < list.length - 1) {
            setIndex(index+1);
        } else {
            setIndex(0)
        }
    }
return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1>{project.canvas}</h1>
      <p>{project.designer}</p>
      <img src={project.photoUrl} alt={project.alt} />
    </div>
    );
};