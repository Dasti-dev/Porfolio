import React from 'react'
import './landingpage.css'

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();

var formattedDate = year + '-' + padZero(month) + '-' + padZero(day);

function padZero(num) {
    return (num < 10 ? '0' : '') + num;
  }

function Landingpage() {
  return (
    <div className='landing'>
      <div className="maintxt">
        <div className="lt"></div>
        <div className="rt"></div>
        <h2 className='txt u'>Welcome To My</h2>
        <h2 className='txt l'><b className='b'> PORTFOLIO</b></h2>
        <div className="lb"></div>
        <div className="rb"></div>
      </div>
      <div className="timer">{formattedDate}</div>
    </div>
  )
}

export default Landingpage
