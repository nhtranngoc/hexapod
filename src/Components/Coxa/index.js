import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    length: PropTypes.number,
    position: PropTypes.arrayOf(PropTypes.number),
    rotation: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
    length: 3,
    position: [0,0,0],
    rotation: [0,0,0]
}

export const Coxa = ({length, position, rotation}, props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    return (  
      <mesh
        {...props}
        ref={mesh}
        position={position}
        rotation={rotation}>
        <sphereBufferGeometry args={[3,length,3]} />
        <meshPhongMaterial flatShading color={'#F08080'} />
      </mesh>
    )
  }

Coxa.propTypes = propTypes;

Coxa.defaultProps = defaultProps;

export default Coxa;