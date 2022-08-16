import React from 'react'
import PropTypes from 'prop-types'


function cardbrand({imageLogo, title}) {
  return (
    <div className="flex flex-col card text-center p-1">
      <div>
        <img src={imageLogo} alt="" className="container mx-auto p-5"/> 
      </div>
        
        <div>
            <h4>{title}</h4>
        </div>
    </div>
  )
}

cardbrand.propTypes = {
  title: PropTypes.string.isRequired,
  imageLogo: PropTypes.string,
}

export default cardbrand