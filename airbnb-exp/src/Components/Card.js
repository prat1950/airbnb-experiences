import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
        <div className="p-5 mx-auto">
            <div className="relative">
                {props.item.openSpots === 0 && (
                    <div className="bg-gray-200 text-black text-white text-center absolute top-0 left-0 p-1 m-2 rounded font-bold ">SOLD OUT</div>
                    )}
                <img src={`./images/${props.item.coverImg}`} className="w-80" alt="Product" />
            </div>
            <div className="flex pt-2">
                <img src="./images/Star 1.png" className="mr-1.5 h-5"></img>
                <span className="flex my-auto mr-1">{props.item.stats.rating}</span>
                <span className="flex align-middle text-gray-400 mr-1">({props.item.stats.reviewCount}) • </span>
                <span className="text-gray-400">{props.item.location}</span>
                
            </div>
        
            <p>
                {props.item.title}<br></br>
            </p>
            <span className="pt-1 font-bold">
            {`From $${props.item.price}`}

            </span>
            /person
            <span className="flex text-gray-400 ">{props.item.openSpots} spots left</span>
        </div>
    )
}
// img={item.coverImg}
          // rating={item.stats.rating}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // title={item.title}
          // price={item.price}
          // openSpots={item.openSpots}