import React from 'react'
import './navbar.css'
import { AiOutlineTwitter, AiFillMediumCircle } from 'react-icons/ai'
import { BiPaperPlane } from 'react-icons/bi'
import { SiDiscord } from 'react-icons/si'
import { Link } from 'react-router-dom'



export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img alt='' src='/assets/glitches-logo.png' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav p-0 me-auto">
            <li className="nav-item">
              <Link className="nav-link text-uppercase active" aria-current="page" to="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase active" to="#">Getting Started</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase active" to="#">Collectors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase active" to="#">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase active" to="#">Enter app</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="https://twitter.com/TheLostGlitches" className="nav-link text-uppercase">
                  <AiOutlineTwitter size={25} color='#F5EFE7' />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="https://twitter.com/TheLostGlitches" className="nav-link text-uppercase">
                  <BiPaperPlane size={25} color='#F5EFE7' />
                </Link>
              </li>
              <li className="nav-item">
                <Link to="https://twitter.com/TheLostGlitches" className="nav-link text-uppercase">
                  <AiFillMediumCircle size={25} color='#F5EFE7' />
                </Link>
              </li>

              <li className="nav-item">
                <button className='btn btn-dark pt-2 pb-2 ms-2'><span className='me-3'><SiDiscord size={15} /></span>Join us</button>
              </li>
            </ul>

          </span>
        </div>
      </div>
    </nav >
  )
}
