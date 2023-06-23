import './ArticleStyles.css'
import Container from '../Container/Container'
import images from '../../model/images'
import { useState, useEffect } from 'react'
import React from 'react'

const url = "https://api.adviceslip.com/advice"

const Article = ({title}) => {

  const [data, setData] = useState({}); 
  const [update, setUpdate] = useState(true);

    useEffect(() => {
      if (update){
      fetch(url)
        .then((response) => response.json())
        .then((data) =>{ 
            setData(data.slip);
            setUpdate(false);
          });
      }
  }, [update]);


  const fetchRandomAdvice = () => {
    setUpdate(true)
  }



  return (
    <div className="article">
        <h1 className='advice'>{title}{data.id}</h1>
              <div className='council'>
                <h2 className='phrase'>{data.advice}</h2>
              </div>
        <div className='icondesktop'>
          <img src={images.img_desktop} alt="desktop" className='desktop'/>
        </div>
        <button className='btn' onClick={fetchRandomAdvice}><img src={images.img_dice} alt='icon_dice'/></button>
    </div>
  )
}

export default Article