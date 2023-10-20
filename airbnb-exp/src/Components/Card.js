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

export default function Card() {
    return (
        <div>
            <img src="./images/image_12.png" className=""></img>
            <div className="flex pt-0.5">
                <img src="./images/Star 1.png" className="mr-1.5 h-5"></img>
                <span className="flex my-auto mr-1">5.0</span>
                <span className="flex align-middle text-gray-400 mr-1">(6) • </span>
                <span className="flex align-middle text-gray-400">USA</span>
            </div>
            <p>
                Life Lessons with a Katie Zaferes<br></br>
            </p>
            <span className="pt-1 font-bold">
                From $136
            </span>
            /person
        </div>
    )
}