import React from 'react'
import PropTypes from 'prop-types'

import Femur from '../Femur'
import Tibia from '../Tibia'
import Coxa from '../Coxa'

const propTypes = {
  mirrored: PropTypes.bool,
  position: PropTypes.arrayOf(PropTypes.number),
  rotationCoxa: PropTypes.number,
  rotationFemur: PropTypes.number,
  rotationTibia: PropTypes.number
}

const defaultProps = {
  mirrored: false,
  position: [0, 0, 0],
  rotationCoxa: 0,
  rotationFemur: 0,
  rotationTibia: 0
}

export const Leg = ({ mirrored, position, rotationCoxa, rotationFemur, rotationTibia }, props) => {
  const femurLength = 10
  const coxaLength = 3
  const tibiaLength = 20

  return (
        <object3D position={position} rotation={mirrored ? [0, rotationCoxa + Math.PI, 0] : [0, rotationCoxa, 0]}>
            <Coxa length={coxaLength} />
            <object3D position={[0, 0, -coxaLength / 2]} rotation={[rotationFemur, 0, 0]} >
                <Femur length={femurLength} position={[0, femurLength / 2, 0]} />
                <object3D position={[0, femurLength, 0]} rotation={[rotationTibia, 0, 0]}>
                    <Tibia length={tibiaLength} position={[0, tibiaLength / 2, 0]}/>
                </object3D>
            </object3D>
        </object3D>
  )
}

Leg.propTypes = propTypes

Leg.defaultProps = defaultProps

export default Leg
