import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    rotation: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
    rotation: [0,0,0]
}

export const Coxa = ({rotation}, props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    return (  
      <mesh
        {...props}
        ref={mesh}
        rotation={rotation}>
        <boxGeometry args={[3,3,3]} />
        <meshPhongMaterial flatShading color={'#F08080'} />
      </mesh>
    )
  }

Coxa.propTypes = propTypes;

Coxa.defaultProps = defaultProps;

export default Coxa;