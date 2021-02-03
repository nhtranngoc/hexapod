import React, { useRef, useState } from 'react'
import Femur from '../Femur'
import Tibia from '../Tibia'
import Coxa from '../Coxa'

export const Leg = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
    return (  
      <group>
        <Coxa />
        <group>
            <Femur />
            <group>
                <Tibia />
            </group>
        </group>
      </group>
    )
  }

export default Leg;