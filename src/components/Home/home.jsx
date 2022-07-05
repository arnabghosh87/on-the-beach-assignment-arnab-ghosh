import React, { useState } from 'react';
import './home.css';
import FilterList from '../FilterList/filterList';
import Card from '../Card/card';
import hotelImage1 from '../../assets/hotel-image-1.png';
import hotelImage2 from '../../assets/hotel-image-2.png';
import hotelImage3 from '../../assets/hotel-image-3.png';


function Home() {

    const roomDetailsList = [{
        Id:1,
        Title:"Iberostar Grand Salome",
        Address:"Costa Adeje, Tenerife",
        Description:"2 Adults, 2 Children & 1 infant",
        Duration: "3rd July 2019 for 7 days",
        Departing:"departing from East Midlands",
        Star:5,
        FullDescription:"The Iberostar Grand Salome Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        Price:1136.50,
        Image:hotelImage1
    },
    {
        Id:2,
        Title:"Aguamarina Golf Hotel",
        Address:"Costa Adeje, Tenerife",
        Description:"2 Adults, 2 Children & 1 infant",
        Duration: "3rd July 2019 for 7 days",
        Departing:"departing from East Midlands",
        Star:4,
        FullDescription:"The Iberostar Grand Salome Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        Price:696.80,
        Image:hotelImage2
    },
    {
        Id:3,
        Title:"Las Piramides Resort",
        Address:"Costa Adeje, Tenerife",
        Description:"2 Adults, 2 Children & 1 infant",
        Duration: "3rd July 2019 for 7 days",
        Departing:"departing from East Midlands",
        Star:3,
        FullDescription:"The Iberostar Grand Salome Lorem Ipsum Lorem Ipsum Lorem Ipsum",
        Price:499.99,
        Image:hotelImage3
    }];

    
  return (
    <div className='d-flex container'>
        <div className="col-lg-3">
            <FilterList />
        </div>
        <div className="col-lg-9">
        {roomDetailsList.map(room => (
        <div>
            <Card key={room.Id} roomDetails={room}/>
        </div>
        ))}
        </div>
    </div>
  );
}

export default Home;
