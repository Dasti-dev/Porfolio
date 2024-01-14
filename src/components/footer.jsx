import React,{useState} from 'react'
import apicall from '../Hooks/hooks';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [body, setBody] = useState('');
  const [sender, setSender] = useState('');

  const handleBodyData = (e) => {
    e.preventDefault()
      setBody(e.target.value)
  }

  const handleSenderData = (e) => {
    e.preventDefault()
      setSender(e.target.value)
  }

  const handlePostRequest = async () => {
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      const response = await apicall('https://portfolio-backend-mailing-service.onrender.com/send', { from : sender , text : body });

      setLoading(false);
      setSuccess(true);
      console.log(response.data);
      if(success === true)
      {
        alert("Feedback Recieved");
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error('Error:', error);
    }

  };

  return (
    <div className='footer'>
      <div className="foarea">
        <div className="ls">
           <b className="col">Thank You</b> , <br/> for the visit <br/> <b className="col">What can</b> I do<br/> Better ...
            <div class="search-container">
            {loading && <p>Loading...</p>}
                {!loading && (<div>
                  <input type="text" className="search-input" placeholder="Enter Your Name" onChange={handleSenderData}/>
                  <input type="text" className="search-input" placeholder="Feedback" onChange={handleBodyData}/>
                  <button className="search-button" onClick={handlePostRequest}>Send</button>
                </div>)}             
            </div>
          
        </div>
        <div className="rs">
            Lets <b className="col">Connect</b> <br/> on Socials
            <div className="icons">
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
