import React from 'react'
import './weblog.css'
const Weblog = () => {
  return (
    <div className='weblog'>
        <h1 className='weblogTitle'>Read Before You Travel</h1>
        <div className='weblogHolder'>
            <div className='holderBlog'>
                <div className='holderImg'></div>
                <div className='holderInfo'>
                    <div className='holderHeader'>NUSA PENIDA ISLAND GUIDE</div>
                    <div className='holderText'>The beautiful, exotic Nusa Penida island lies just 25 kilometers from Bali, the most famous tourist destination in Indonesia.</div>
                    <div className='holderBtn'>Read More</div>
                </div>
            </div>
            <div className='holderBlog'>
                <div className='holderInfo'>
                    <div className='holderHeader'></div>
                    <div className='holderText'></div>
                </div>
                <div className='img'></div>
            </div>
        </div>
    </div>
  )
}

export default Weblog