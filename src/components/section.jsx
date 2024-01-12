import React from 'react'
import Pikachu from '../assets/pika-chu.png'
import './section.css'

function Section() {
  return (
    <div className='sec'>
        <div className="quote">" CHANGE STARTS FROM TODAY "</div>
        <div className="cofe">
            <div className="inner-cofe">
                <div className="ft"> Hi <u className="cof">.</u></div>
                <div className="bod">
                    <div className="maint">
                        WANT TO BUY <br/> ME A CUP OF <br/> <u className='coff'> COFFEE :) </u>
                        <div className="btn">
                            <button className='obtn'>Click Here</button>
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
