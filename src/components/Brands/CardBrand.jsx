import React from 'react'
import PropTypes from 'prop-types'
import './CardBrands.css'


function cardbrand({imageLogo, title}) {
  return (
    <div className="card text-center bg-dark">
      <div className="imagenOverflow">
        <img src={imageLogo} alt="" className="container mx-auto flex justify-between p-12"/> 
      </div>
        
        <div className="card-body text-light">
            <h4 className="card-title">{title}</h4>
        </div>
    </div>
  )
}

cardbrand.propTypes = {
  title: PropTypes.string.isRequired,
  imageLogo: PropTypes.string,
}

export default cardbrand