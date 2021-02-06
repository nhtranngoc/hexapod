import React from 'react'
import PropTypes from 'prop-types'

import Leg from '../Leg'
import Body from '../Body'
import degToRad from '../../helpers/degToRad'

const propTypes = {
  rotations: PropTypes.object,
  length: PropTypes.number,
  position: PropTypes.arrayOf(PropTypes.number)
}

const defaultProps = {
  rotations: {
    left: {
      front: [0, -90, 0],
      mid: [0, -90, 0],
      back: [0, -90, 0]
    },
    right: {
      front: [0, -90, 0],
      mid: [0, -90, 0],
      back: [0, -90, 0]
    }
  },
  length: 3,
  position: [0, 0, 0]
}

export const Robot = ({ length, position, rotations }, props) => {
  return (
      <object3D
        {...props}
        position={position}>
        <Body />
        <object3D position={[0, 1.5, -length / 2]}>
            <Leg
            position={[10, 0, 0]}
            rotationCoxa={degToRad(rotations.left.front[0])}
            rotationFemur={degToRad(rotations.left.front[1])}
            rotationTibia={degToRad(rotations.left.front[2])}
            />
            <Leg
            position={[0, 0, 0]}
            rotationCoxa={degToRad(rotations.left.mid[0])}
            rotationFemur={degToRad(rotations.left.mid[1])}
            rotationTibia={degToRad(rotations.left.mid[2])}
            />
            <Leg
            position={[-10, 0, 0]}
            rotationCoxa={degToRad(rotations.left.back[0])}
            rotationFemur={degToRad(rotations.left.back[1])}
            rotationTibia={degToRad(rotations.left.back[2])}
            />
        </object3D>
        <object3D position={[0, 1.5, length / 2]}>
            <Leg
            position={[10, 0, 0]}
            mirrored
            rotationCoxa={degToRad(rotations.right.front[0])}
            rotationFemur={degToRad(rotations.right.front[1])}
            rotationTibia={degToRad(rotations.right.front[2])}
            />
            <Leg
            position={[0, 0, 0]}
            mirrored
            rotationCoxa={degToRad(rotations.right.mid[0])}
            rotationFemur={degToRad(rotations.right.mid[1])}
            rotationTibia={degToRad(rotations.right.mid[2])}
            />
            <Leg
            position={[-10, 0, 0]}
            mirrored
            rotationCoxa={degToRad(rotations.right.back[0])}
            rotationFemur={degToRad(rotations.right.back[1])}
            rotationTibia={degToRad(rotations.right.back[2])}
            />
        </object3D>
      </object3D>
  )
}

Robot.propTypes = propTypes

Robot.defaultProps = defaultProps

export default Robot
