import React, { Fragment } from 'react'
import { useMediaQuery } from 'react-responsive'

import "./FeaturesAndSpec.css"

function FeaturesAndSpec() {

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 }); 

  return (
    <Fragment>
     <div className='featureAndSpec-container' >
        <div className="header">
          <p>Feature and Specification</p>
        </div>
        <div className="body">
          <div className="card">
            <p>Net Quantity</p>
            <p>1</p>
          </div>
          <div className="card">
            <p>Rim Offset [mm]</p>
            <p>22</p>
          </div>
          <div className="card">
            <p>Rim Size [in]</p>
            <p>14</p>
          </div>
          <div className="card">
            <p>Bore Size[mm]</p>
            <p>60.7</p>
          </div>
          <div className="card">
            <p>Country of Origin</p>
            <p>India</p>
          </div>
          <div className="card">
            <p>Pitch Centre Diameter [mm]</p>
            <p>100</p>
          </div>
          <div className="card">
            <p>Manufacturer</p>
            <p>Minda Industries Limited</p>
          </div>
          <div className="card">
            <p>Address og Manufacturer</p>
            <p>Minda Industries Limited, B-64/1, Wazirpur Industrial Area, Delhi, India - 110052</p>
          </div>
          <div className="card">
            <p>Number of Holes</p>
            <p>4</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default FeaturesAndSpec