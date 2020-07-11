import React from 'react'
import api from '../components/API/api'

const TravelTimeCall = () => {
    // Create state variables
    //'getter' and 'setter' functions = initial state is empty string
    let [responseData, setResponseData] = React.useState('')


    // fetch data based on parameters
    const fetchData = (e) => {
        e.preventDefault()

        api.postData()
            .then(response => {
                setResponseData(response.data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>{responseData.title}</h1>
            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
            {responseData.dates && responseData.dates.map(date => {
                return <p>{date}</p>
            })}
        </div>
    );
}

export default TravelTimeCall