import React from 'react'
import './offers.css'
import Miami from '../../assets/miami.png'
import Japan from '../../assets/japan.png'
import Dubai from '../../assets/dubai.png'
import TajMahal from '../../assets/taj-mahal.png'
import NewYork from '../../assets/newyork.png'
import Greece from '../../assets/greece.png'
const Offers = () => {
  return (
    <div className='offers'>    
        <div className='container'>
            <div className='offersTitle'>Upcoming Offers</div>
            <div className='offersCards'>
                <div className='OffersColumn'>
                    <div className='offersCard'>
                        <div className='CardTitle'>Miami Beaches</div>
                        <div className='CardImg'><img src={ Miami }></img></div>
                        <div className='CardInfo'><div className='type1'>Chill</div><div>2 Days, 1 Nights</div><div>20.5.2023</div></div>
                        <div className='CardPrice'><span className='price'>800$<p>/Person</p></span><span className='CardBtn'>Book Now</span></div>
                    </div>
                </div>
                <div className='OffersColumn'>
                    <div className='offersCard'>
                        <div className='CardTitle'>Japan</div>
                        <div className='CardImg'><img src={ Japan }></img></div>
                        <div className='CardInfo'><div className='type2'>Relax</div><div>2 Days, 1 Nights</div><div>20.5.2023</div></div>
                        <div className='CardPrice'><span className='price'>1200$<p>/Person</p></span><span className='CardBtn'>Book Now</span></div>
                    </div>
                </div>
                <div className='OffersColumn'>
                    <div className='offersCard'>
                        <div className='CardTitle'>Dubai</div>
                        <div className='CardImg'><img src={ Dubai }></img></div>
                        <div className='CardInfo'><div className='type1'>Chill</div><div>2 Days, 1 Nights</div><div>20.5.2023</div></div>
                        <div className='CardPrice'><span className='price'>500$<p>/Person</p></span><span className='CardBtn'>Book Now</span></div>
                    </div>
                </div>
                <div className='OffersColumn'>
                    <div className='offersCard'>
                        <div className='CardTitle'>Taj-Mahal</div>
                        <div className='CardImg'><img src={ TajMahal }></img></div>
                        <div className='CardInfo'><div className='type2'>Relax</div><div>2 Days, 1 Nights</div><div>20.5.2023</div></div>
                        <div className='CardPrice'><span className='price'>350$<p>/Person</p></span><span className='CardBtn'>Book Now</span></div>
                    </div>
                </div>
                <div className='OffersColumn'>
                    <div className='offersCard'>
                        <div className='CardTitle'>New York</div>
                        <div className='CardImg'><img src={ NewYork }></img></div>
                        <div className='CardInfo'><div className='type1'>Chill</div><div>2 Days, 1 Nights</div><div>20.5.2023</div></div>
                        <div className='CardPrice'><span className='price'>500$<p>/Person</p></span><span className='CardBtn'>Book Now</span></div>
                    </div>
                </div>
                <div className='OffersColumn'>
                    <div className='offersCard'>
                        <div className='CardTitle'>Greece</div>
                        <div className='CardImg'><img src={ Greece }></img></div>
                        <div className='CardInfo'><div className='type2'>Relax</div><div>2 Days, 1 Nights</div><div>20.5.2023</div></div>
                        <div className='CardPrice'><span className='price'>950$<p>/Person</p></span><span className='CardBtn'>Book Now</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers