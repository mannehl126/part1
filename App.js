import React, {useState} from 'react'


const StatisticLine  = ({text,value}) =>{
  return(
    <p>{text} {value}</p>
  )
}


const Statistic = ({good, neutral, bad}) =>{
  const total = good + neutral+ bad
  const average = total/3
  const positive = ((good + neutral ) / total) * 100


  return(
    <div>
      <h1>Statistic</h1>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
    
    </div>
  )
}


const App =( ) => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  
  
  

  const handleGoodClick=()=>{
    setGood(good + 1)

  }
  const handleNeutralClick=()=>{
    setNeutral(neutral + 1)

  }
  const handleBadClick=()=>{
    setBad(bad + 1)

 
  }
  


  

  return(
    <div>
      <h1>Give feelback </h1>

    <button onClick={handleGoodClick}> good</button>

    <button onClick={handleNeutralClick}> neutral</button>

    <button onClick={handleBadClick}> bad</button>

    <Statistic good={good} bad={bad} neutral={neutral}/>




    
    </div>

   
   )

  

}

export default App
