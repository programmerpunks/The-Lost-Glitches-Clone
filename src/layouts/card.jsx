import React from 'react'

export const Card = (props) => {
  'https://playlostglitches.com/wp-content/uploads/2022/09/Frame_3_v2.png'
  return (
    <div class="card col-md-6 col-lg-3 col-sm-12">
      <div class="image">
        <img src={props.image} />
      </div>
      <div class="card-body">
        <h3 class="fw-bold fs-5 text-uppercase">{props.heading}</h3>
        <div class="description">{props.context}</div>
      </div>
    </div>
  )
}
