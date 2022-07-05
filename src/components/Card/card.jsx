import React ,{ useState } from 'react';
import './card.css';
import hotelImage1 from '../../assets/hotel-image-1.png';
import { AiOutlineArrowRight } from "react-icons/ai";
import { Rating } from 'react-simple-star-rating';

function Card({key,roomDetails}) {

    const [ratingValue,setRatingValue] =useState(roomDetails.Star)
    const [showFooter, setShowFooter] = useState(false)
    const [readMoreLinkText, setReadMoreLinkText] = useState("Read more about this hotel")

    const FooterDiv = () => (
        <div className="card-footer w-100">
        {roomDetails.FullDescription}
      </div>
    )


    const toggleFooter = () => {
        showFooter ? setReadMoreLinkText("Read more about this hotel") : setReadMoreLinkText("Read less about this hotel")
        setShowFooter(!showFooter)
    }
  return (
    <div className="card">
        <div className="row no-gutters">
            <div className="col-lg-8 containerImg">
                <img src={roomDetails.Image} className="card-img-top" alt="..." />
                <div className="bottom-left" onClick={toggleFooter}><AiOutlineArrowRight/> {readMoreLinkText}</div>
            </div>
            <div className='col-lg-4 '>
                <div className='card-block px-1 cardDiv'>
                    <h5 className='card-title text-left'> {roomDetails.Title}</h5>
                    <p className='card-text'> {roomDetails.Address}</p>
                    <Rating initialValue={ratingValue} size="25" readonly={true}/>
                    <p className='card-text'> {roomDetails.Description}</p>
                    <p className='card-text'> {roomDetails.Duration}</p>
                    <p className='card-text'> {roomDetails.Departing}</p>
                    <a href="" className='btn btn-primary px-5'>
                        Book Now
                        <br></br>£{roomDetails.Price}</a>
                </div>
            </div>
        </div>
        { showFooter ? <FooterDiv /> : null}
      
    </div>
  );
}

export default Card;