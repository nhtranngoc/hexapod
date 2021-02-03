import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    rotation: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
    rotation: [0,0,0]
}

export const Femur = ({rotation}, props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    return (  
      <mesh
        {...props}
        ref={mesh}
        rotation={rotation}>
        <boxGeometry args={[3,3,15]} />
        <meshPhongMaterial flatShading color={'#20B2AA'} />
      </mesh>
    )
  }

Femur.propTypes = propTypes;

Femur.defaultProps = defaultProps;

export default Femur;