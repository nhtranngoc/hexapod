import React, { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  length: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number),
  rotation: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
  length: 20,
  position: [0,0,0],
  rotation: [0,0,0]
}

export const Tibia = ({length, position, rotation}, props) => {
    return (  
      <mesh {...props} position={position} >
        <cylinderGeometry args={[.5,2,length]} rotation={rotation}/>
        <meshPhongMaterial flatShading color={'#87CEFA'} />
      </mesh>
    )
  }

Tibia.propTypes = propTypes;

Tibia.defaultProps = defaultProps;

export default Tibia;