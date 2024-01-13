import React from 'react'
// import {linkdin} from '../assets/linkedin.png'
// import {telegram} from '../assets/telegram.png'
// import {twitter} from '../assets/twitter.png'
import './footer.css'

// const socials = [
//     {
//         name : linkdin,
//         link : "www.google.com",
//     },
//     {
//         name : telegram,
//         link : "www.google.com",
//     },
//     {
//         name : twitter,
//         link : "www.google.com",
//     },
// ]

function Footer() {
  return (
    <div className='footer'>
      <div className="foarea">
        <div className="ls">
           <b className="col">Thank You</b> , <br/> for the visit <br/> <b className="col">What can</b> I do<br/> Better ...
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Mail Me ..." />
                <button class="search-button">Send</button>
            </div>
        </div>
        <div className="rs">
            Lets <b className="col">Connect</b> <br/> on Socials
            <div class="icons">
                {/* {socials.map((item)=><a href=''><img src={item.name} alt="Not loaded yet" /></a>)} */}
            </div>
        </div>
      </div>
      <div className="bologo">
        <b>Astitwa</b>Dwivedi<b>.</b>
      </div>
    </div>
  )
}

export default Footer
