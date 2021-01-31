import React, { useRef, useState, Fragment } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { CylinderBufferGeometry } from 'three'

export const Tibia = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
  
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
  
    return (  
      <mesh
        {...props}
        ref={mesh}
        scale={props.active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <cylinderGeometry args={[1,3,20]} />
        <meshPhongMaterial flatShading color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

export default Tibia;