import React, { useState } from 'react';
import './home.css';
import FilterList from '../FilterList/filterList';
import Card from '../Card/card';
import hotelImage1 from '../../assets/hotel-image-1.png';
import hotelImage2 from '../../assets/hotel-image-2.png';
import hotelImage3 from '../../assets/hotel-image-3.png';
import { FaPoundSign, FaSortAlphaDown, FaStar } from "react-icons/fa";


function Home() {

    const roomList = [{
        Id: 1,
        Title: "Iberostar Grand Salome",
        Address: "Costa Adeje, Tenerife",
        Description: "2 Adults, 2 Children & 1 infant",
        Duration: "3rd July 2019 for 7 days",
        Departing: "departing from East Midlands",
        Star: 5,
        FullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur recusandae tempora mollitia amet, veritatis eveniet consequatur distinctio possimus temporibus omnis impedit dolor aliquam sapiente expedita odio ea! Modi pariatur, alias rerum omnis non quo nobis quaerat corporis placeat iste.",
        Price: 1136.50,
        Image: hotelImage1
    },
    {
        Id: 2,
        Title: "Aguamarina Golf Hotel",
        Address: "Costa Adeje, Tenerife",
        Description: "2 Adults, 2 Children & 1 infant",
        Duration: "3rd July 2019 for 7 days",
        Departing: "departing from East Midlands",
        Star: 4,
        FullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur recusandae tempora mollitia amet, veritatis eveniet consequatur distinctio possimus temporibus omnis impedit dolor aliquam sapiente expedita odio ea! Modi pariatur, alias rerum omnis non quo nobis quaerat corporis placeat iste.",
        Price: 696.80,
        Image: hotelImage2
    },
    {
        Id: 3,
        Title: "Las Piramides Resort",
        Address: "Costa Adeje, Tenerife",
        Description: "2 Adults, 2 Children & 1 infant",
        Duration: "3rd July 2019 for 7 days",
        Departing: "departing from East Midlands",
        Star: 3,
        FullDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequuntur recusandae tempora mollitia amet, veritatis eveniet consequatur distinctio possimus temporibus omnis impedit dolor aliquam sapiente expedita odio ea! Modi pariatur, alias rerum omnis non quo nobis quaerat corporis placeat iste.",
        Price: 499.99,
        Image: hotelImage3
    }];
    roomList.sort((a, b) => a.Price - b.Price);

    const classActive = 'list-group-item d-flex justify-content-between active';
    const classInActive = 'list-group-item d-flex justify-content-between';

    const [roomDetailsList,setRoomDetailsList] = useState(roomList);
    const [classNamePrice,setClassNamePrice] = useState(classActive);
    const [classNameAlphabet,setClassNameAlphabet] = useState(classInActive);
    const [classNameRatings,setClassNameRatings] = useState(classInActive);
    const onChangeSorting = (event) => {
        console.log(event.currentTarget.id)
        if (event.currentTarget.id === "idPrice"){
            roomList.sort((a, b) => a.Price - b.Price)
            setClassNamePrice(classActive);
            setClassNameAlphabet(classInActive);
            setClassNameRatings(classInActive);
        }  
        else if (event.currentTarget.id === "idRating"){
            roomList.sort((a, b) => b.Star - a.Star)
            setClassNamePrice(classInActive);
            setClassNameAlphabet(classInActive);
            setClassNameRatings(classActive);
        }
        else if (event.currentTarget.id === "idAlphabet"){
            roomList.sort((a, b) => a.Title.localeCompare(b.Title))
            setClassNamePrice(classInActive);
            setClassNameAlphabet(classActive);
            setClassNameRatings(classInActive);
        }
        
        setRoomDetailsList([...roomList]);
            
    }


    return (
        
        <div className='d-flex container'>
            <div className="col-lg-2 col-12 m-2">
                <div className="card">
                    <div className="list-group list-group-flush">
                        <div onClick={onChangeSorting} id="idPrice" className={classNamePrice}>Sort By Price <FaPoundSign /></div>
                        <div onClick={onChangeSorting} id="idAlphabet" className={classNameAlphabet}>Sort By Alphabet <FaSortAlphaDown /></div>
                        <div onClick={onChangeSorting} id="idRating" className={classNameRatings}>Sort By Rating <FaStar /></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-10 col-12">
                {roomDetailsList.map(room => (
                    <div>
                        <Card key={room.Id} roomDetails={room} />
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Home;
