import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../features/colorSlice'

import WhiteWatch from '../Assets/white.png'
import BlackWatch from '../Assets/black.png'
import BlueWatch from '../Assets/blue.png'
import GreenWatch from '../Assets/green.png'

import './ProductCard.css'


const ProductCard = () => {

  const color = useSelector((state) => state.color.value)
  const dispatch = useDispatch()

  //movement animation
  const container = document.querySelector('.container')
  const card = document.querySelector('.card')


  const texts = document.querySelector('.texts')
  const colors = document.querySelector('.colors')
  const purchase = document.querySelector('.purchase_btn')
  const watch = document.querySelector('.wrapper img')

  container?.addEventListener('mousemove', (e) => {

    let xAxis = (window.innerWidth / 2 - e.pageX) / 25
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`

  })

  //Animate in
  container?.addEventListener('mouseenter', (e) => {

    texts.style.transform = 'translateZ(75px)'
    colors.style.transform = 'translateZ(75px)'
    purchase.style.transform = 'translateZ(100px)'
    watch.style.transform = 'translateZ(100px) rotateZ(20deg)'

    card.style.transitionDuration = '0s'
  })

  //Animate out
  container?.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 300ms ease-in'
    card.style.transform = null

    texts.style.transform = null
    colors.style.transform = null
    purchase.style.transform = null
    watch.style.transform = null
  })


  return (
    <div className='container'>
      <div className='card'>
        <div className="wrapper">
          <div className="rectangle"></div>
          <img src={color} alt="Watch" />
        </div>
        <div className="texts">
          <h2 className='title'>APPLE WATCH SERIES 3</h2>
          <p className='description'>Heavy on features. Light on price.</p>
        </div>
        <div className='colors'>
          <button
            onClick={() => {
              dispatch(change(WhiteWatch))
            }}
            className={color === WhiteWatch ? 'color_btn_selected' : 'color_btn'}>White
          </button>
          <button
            onClick={() => {
              dispatch(change(BlackWatch))
            }}
            className={color === BlackWatch ? 'color_btn_selected' : 'color_btn'}>Black
          </button>
          <button
            onClick={() => {
              dispatch(change(BlueWatch))
            }}
            className={color === BlueWatch ? 'color_btn_selected' : 'color_btn'}>Blue
          </button>
          <button
            onClick={() => {
              dispatch(change(GreenWatch))
            }}
            className={color === GreenWatch ? 'color_btn_selected' : 'color_btn'}>Green
          </button>
        </div>
        <button className='purchase_btn'>Purchase</button>
      </div>
    </div>
  )
}


export default ProductCard