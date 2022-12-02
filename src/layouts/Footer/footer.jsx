import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="content-info">
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3 col-sm-12 text-center">
            <ul>
              <li className="active nav-item">
                <Link className="nav-link" to="https://playlostglitches.com/" aria-current="page">Home</Link>
              </li>
              <li className="nav-item menu-item menu-getting-started"><Link className="nav-link" to="https://playlostglitches.com/getting-started/">Getting started</Link></li>
              <li className="nav-item menu-item menu-collectors"><Link className="nav-link" to="https://playlostglitches.com/collectors/">Collectors</Link></li>
              <li className="nav-item menu-item menu-news"><Link className="nav-link" to="https://playlostglitches.com/category/blog-news/">News</Link></li>
              <li className="nav-item menu-item menu-enter-app"><Link className="nav-link" to="https://app.playlostglitches.com">Enter app</Link></li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-12">
                <h4 className='text-uppercase'>JOIN THE DEEP SKY NOW!</h4>
                <form className='mt-7'>
                  <div className="d-flex justify-content-center text-center">
                    <input type="email" name="EMAIL" className="form-control w-50 rounded-pill me-4" placeholder="EMAIL" />
                    <button className='btn btn-danger rounded-pill w-25'>Subscribe</button>
                  </div>
                </form>
              </div>

              <div className="row">
                <div className="col-12">
                  <img alt='' src="https://playlostglitches.com/wp-content/uploads/2022/09/ecom-maker-1.gif" /> </div></div>
              <div className="partnerships row">
                <h4 className="col-12">PARTNERSHIPS &amp; INTEGRATIONS</h4>

                <div className="col-3"><img alt='' className="mx-auto d-block" src="https://playlostglitches.com/wp-content/uploads/2022/09/rckntvlogo2.jpg" /> </div>
                <div className="col-3"><img alt='' className="mx-auto d-block" src="https://playlostglitches.com/wp-content/uploads/2022/08/LINK-Token-Icon-Blue-e1659425813954.png" /> </div>
                <div className="col-3"><img alt='' className="mx-auto d-block" src="https://playlostglitches.com/wp-content/uploads/2021/11/crypto.png" /> </div>
                <div className="col-3"><img alt='' className="mx-auto d-block" src="https://playlostglitches.com/wp-content/uploads/2021/11/monsters.png" /> </div>
                <div className="col-3"><img alt='' className="mx-auto d-block" src="https://playlostglitches.com/wp-content/uploads/2022/05/tofu-e1652177626422.jpg" /> </div>
              </div>

              <div className="col-12 copyright text-light"> copyright 2022 all rights reserved </div>
              <div className="col-12 centerimg"><img alt='' className="mx-auto d-block" src="https://playlostglitches.com/wp-content/uploads/2022/08/U_Logo_MadeWith_RichBlack_Knockout_RGB.png" /> </div>

            </div>
          </div>

          <div className="col-md-3 col-sm-12 text-center">
            <ul id="menu-footer-right" className="menu">
              <li className="nav-item menu-item menu-join-our-server"><Link className="nav-link" to="https://discord.com/invite/thelostglitches">Join our server</Link></li>
              <li className="nav-item menu-item menu-privacy-policy"><Link className="nav-link" to="https://playlostglitches.com/privacy-policy/">Privacy Policy</Link></li>
              <li className="nav-item menu-item menu-comic"><Link className="nav-link" to="https://playlostglitches.com/comic/">Comic</Link></li>
              <li className="nav-item menu-item menu-team"><Link className="nav-link" to="https://playlostglitches.com/team/">Team</Link></li>
              <li className="nav-item menu-item menu-project-deck"><Link className="nav-link" to="https://playlostglitches.com/the-lost-glitches-project-deck/">Project Deck</Link></li>
            </ul>   </div>

        </div>
      </div>
    </footer>
  )
}
