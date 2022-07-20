import React from "react"

export default function Cards(props) {
    return (
        <div className = "cards">
            <img src = {props.data.imageUrl} alt = "Card image" className = "cards--img"/>
            <div className = "cards--info">
                <div className = "cards--info--location">
                    <p className = "location"><img src = "../images/location-dot-solid.svg" alt = "Location icon" className = "cards--icon"/>{props.data.location}</p>
                    <a className = "map" href = {props.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className = "cards--info--title" >{props.data.title}</h1>
                <h4 className = "cards--info--date" >{`${props.data.startDate} - ${props.data.endDate}`}</h4>
                <p className = "cards--info--description" >{props.data.description}</p>
            </div>
        </div>
    )
}
    
        

               
