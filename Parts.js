import React from 'react';

const Parts =({parts,exercises}) =>{
    console.log(parts);
    return(
     <p>
         {parts} {exercises}
     </p>
    )
}

export default Parts