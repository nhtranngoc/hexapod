import React, { useRef, useEffect } from 'react'
import { useThree, useFrame } from 'react-three-fiber'

export const Camera = (props) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const { setDefaultCamera } = useThree()

    useEffect(() => setDefaultCamera(mesh.current))

    useFrame(() => mesh.current.updateMatrixWorld())
  
    return (  
      <orthographicCamera makeDefault ref={mesh} {...props} />
    )
  }

export default Camera;