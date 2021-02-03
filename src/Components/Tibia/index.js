import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    rotation: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
    rotation: [0,0,0]
}

export const Tibia = ({rotation}, props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    return (  
      <mesh
        {...props}
        ref={mesh}
        rotation={rotation}>
        <cylinderGeometry args={[1,3,20]} />
        <meshPhongMaterial flatShading color={'#87CEFA'} />
      </mesh>
    )
  }

Tibia.propTypes = propTypes;

Tibia.defaultProps = defaultProps;

export default Tibia;