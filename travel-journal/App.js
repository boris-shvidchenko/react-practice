import React from "react"
import Title from "./components/Title.js"
import Cards from "./components/Cards.js"
import dataArray from "./data.js"

export default function App() {
    
    const cardData = dataArray.map((data) => {
        return (
            <Cards 
                key = {data.key}
                data = {data}
            />
        )
    })
    
    return(
        <div>
            <Title />
            {cardData}
        </div>
    )
} 



            
