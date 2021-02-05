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

export const Body = ({ position, length }, props) => {
  return (
      <mesh
        {...props}
        position={position}>
        <boxGeometry args={[30, 3, 20]} />
        <meshPhongMaterial flatShading color={'#778899'} />
      </mesh>
  )
}

Body.propTypes = propTypes

Body.defaultProps = defaultProps

export default Body
