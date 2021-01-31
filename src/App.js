import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, Fragment } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import DatGui, { DatButton } from 'react-dat-gui'
import ReactDOM from 'react-dom'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (  
    <mesh
      {...props}
      ref={mesh}
      scale={props.active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxBufferGeometry args={[1, 1, 1]} />w
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  const [activeLeft, setActiveLeft] = useState(false)
  const [activeRight, setActiveRight] = useState(false)

  return (
    <Fragment>
      <DatGui>
        <DatButton label="Left box" onClick={() => {setActiveLeft(!activeLeft)}}/>
        <DatButton label="Right box" onClick={() => {setActiveRight(!activeRight)}}/>
      </DatGui>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} active={activeLeft}/>
        <Box position={[1.2, 0, 0]} active={activeRight}/>
      </Canvas>
    </Fragment>
  );
}

export default App;
