import React from 'react'

const Total =({course}) =>{
const total = course[0].parts.reduce((sum,part) => sum + part.execrises,0)


return(
    <p>
        Number of execrises {total}
        

    </p>
)
}

export default Total