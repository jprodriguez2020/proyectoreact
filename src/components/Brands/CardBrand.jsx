import React from 'react'
import PropTypes from 'prop-types'


function cardbrand({imageLogo, title}) {
  return (
    /*    <div className="container flex flex-col p-1 text-center card">*/
    <div className="container flex flex-col p-3 text-sm text-center">
      <div>
        <img src={imageLogo} alt="" className="container flex flex-col border-solid rounded-xl font-dynapuff text-themeMainBrown sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-8"/> 
      </div>
      <div>
        <h4>{title}</h4>
      </div>
      <hr className="w-1/5 mx-auto"/>
    </div>
  )
}

cardbrand.propTypes = {
  title: PropTypes.string.isRequired,
  imageLogo: PropTypes.string,
}

export default cardbrand