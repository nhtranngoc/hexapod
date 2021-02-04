import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    length: PropTypes.number,
    position: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
    length: 3,
    position: [0,0,0],
}

export const Coxa = ({length, position}, props) => {
    return (  
      <mesh
        {...props}
        position={position}>
        <sphereBufferGeometry args={[3,length,3]}/>
        <meshPhongMaterial flatShading color={'#F08080'} />
      </mesh>
    )
  }

Coxa.propTypes = propTypes;

Coxa.defaultProps = defaultProps;

export default Coxa;