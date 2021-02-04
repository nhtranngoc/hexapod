import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  length: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number)
}

const defaultProps = {
  length: 15,
  position: [0, 0, 0]
}

export const Femur = ({ position, length }, props) => {
  return (
      <mesh
        {...props}
        position={position}>
        <boxGeometry args={[3, length, 3]} />
        <meshPhongMaterial flatShading color={'#20B2AA'} />
      </mesh>
  )
}

Femur.propTypes = propTypes

Femur.defaultProps = defaultProps

export default Femur
