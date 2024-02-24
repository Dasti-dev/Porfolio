import React from 'react'
import Pikachu from '../assets/pika-chu.png'
import './section.css'

function Section() {
  return (
    <div className='sec'>
        <div className="quote">" WOW !!! DIFFERENT ERROR "</div>
        <div className="cofe">
            <div className="inner-cofe">
                <div className="ft"> Hi <u className="cof">.</u></div>
                <div className="bod">
                    <div className="maint">
                        I AM Astitwa <br/> An Student And <br/> <u className='coff'>A Developer :) </u>
                        <div className="btn">
                            <button className='obtn'>Connect With Me</button>
                        </div>
                    </div>
                    <div className="imgp">
                        <img src={Pikachu} alt="" className='pika'/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Section;
