import React from 'react'
import { Link } from 'react-router-dom'


export const CardImg = (props) => {
  return (
    <Link class="img col-lg-4 col-md-4 col-sm-6 mb-4" to={props.image} data-barba-prevent="self">
      <img alt='' src={props.image} />
    </Link>
  )
}