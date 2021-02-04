import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import {  useResource } from 'react-three-fiber'

import Femur from '../Femur'
import Tibia from '../Tibia'
import Coxa from '../Coxa'

const propTypes = {
    position: PropTypes.arrayOf(PropTypes.number),
    rotationCoxa: PropTypes.arrayOf(PropTypes.number),
    rotationFemur: PropTypes.arrayOf(PropTypes.number),
    rotationTibia: PropTypes.arrayOf(PropTypes.number),
}

const defaultProps = {
    position: [0,0,0],
    rotationCoxa: [0,0,0],
    rotationFemur: [0,0,0],
    rotationTibia: [0,0,0],
}

export const Leg = ({position, rotationCoxa, rotationFemur, rotationTibia}, props) => {
    // This reference will give us direct access to the mesh
    const ref = useRef()

    const femurLength = 10;
    const coxaLength = 3;
    const tibiaLength = 15;

    return ( 
        <object3D position={position} rotation={rotationCoxa}>
            <Coxa length={coxaLength} />
            <object3D ref={ref} position={[0,coxaLength,0]} rotation={rotationFemur} >
                <Femur length={femurLength} position={[0,femurLength/2,0]} />
                <object3D position={[0,femurLength + coxaLength,0]} rotation={rotationTibia}>
                    <Tibia length={tibiaLength} position={[0,tibiaLength/2,0]}/>
                </object3D>
            </object3D>
        </object3D>
    )
  }

Leg.propTypes = propTypes;

Leg.defaultProps = defaultProps;

export default Leg;