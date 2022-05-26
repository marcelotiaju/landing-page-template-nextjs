import React from "react"
// import { Container, Row, Col } from "react-bootstrap"
// import Service from "./Service"

export default function Services() {
  return (
    <section className="key-benefits" id="advantages">
      <h2>Discover The Advantages Of Solar</h2>
      <div className="benefits">
        <div className="benefit">
          <p className="title">Tax Incentives</p>
          <div id="benefit-1" className="benefit-img"></div>
          <p>Enjoy thousands of dollars in federal tax incentives. Talk to a Sunrise Power expert to find out more.</p>
        </div>
        <div className="benefit">
          <p className="title">0% Down</p>
          <div id="benefit-2" className="benefit-img"></div>
          <p>And pay less than what you are paying for eletricity.</p>
        </div>
        <div className="benefit">
          <p className="title">Environmental</p>
          <div id="benefit-3" className="benefit-img"></div>
          <p>
            Dramatically reduce your carbon foot print by reducing greenhouse gas and other dangerous pollutants such as
            CO2, sulfur oxides and particulate matter.
          </p>
        </div>
      </div>
    </section>
  )
}
