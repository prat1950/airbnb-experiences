import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data"


export default function App() {
  const cards=data.map((item)=>{
    return (
      <Card 
          id={item.id}
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          location={item.location}
          title={item.title}
          price={item.price}
          openSpots={item.openSpots}
      />
    )}) 

    return (
      <div>
        <Navbar />
        <Hero />
        <div className="flex flex-col mx-auto p-5 justify-between sm:flex-row ">
          {cards}
        </div>
        
      </div>
          )
}