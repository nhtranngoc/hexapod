import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    length: PropTypes.number,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
    length: 15,
    position: [0,0,0],
    rotation: [0,0,0]
}

export const Femur = ({position, rotation, length}, props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    return (  
      <mesh
        {...props}
        ref={mesh}
        rotation={rotation}
        position={position}>
        <boxGeometry args={[3,length,3]} />
        <meshPhongMaterial flatShading color={'#20B2AA'} />
      </mesh>
    )
  }

Femur.propTypes = propTypes;

Femur.defaultProps = defaultProps;

export default Femur;