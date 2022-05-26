import React from "react"
import solar from "../assets/images/solar.png"
import Image from "next/image"

export default function Header() {
  return (
    <>
      <header id="event-subscription">
        <div className="topo">
          <div className="logo">
            <Image src={solar} alt="Solar with Garrett" width={100} height={100} />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#advantages">Advantages</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#key_footer">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <div id="disclaimer">
            <h2>Solar with Garrett</h2>
            <p className="about-event">Never Lose Power with Battery Backup and Solar</p>
          </div>
          <div id="subscription-form">
            <iframe
              width="500"
              height="280"
              src="https://www.youtube.com/embed/CLUTV4VNtK8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </header>
    </>
  )
}
