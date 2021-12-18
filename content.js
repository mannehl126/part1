import React from 'react'
import Course from './Course'
import Total from './Total'

const Content = ({course}) =>{    
    return(
        <div>
             {
             course[0].parts.map((i)=>
             (
                <div key={i.id}>
                <p>
                    {i.name} {i.exercises}
                    {/* {console.log(i.name)}
                    {console.log(i.exercise)} */}
                </p>
                </div>
    
            )                            
             )}
             <Total course={course}/>

           <h2>{course[1].name} </h2>
{

       
             course[1].parts.map((i)=>
             (
                <div key={i.id}>
                <p>
                    {i.name} {i.exercises}
                    {/* {console.log(i.name)}
                    {console.log(i.exercise)} */}
                </p>
                </div>
    
            )                            
             )}

        </div>
        
    
        
    )
}

export default Content