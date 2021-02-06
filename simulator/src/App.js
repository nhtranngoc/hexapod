import React, { Fragment, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import DatGui, { DatNumber } from 'react-dat-gui'
import 'react-dat-gui/dist/index.css'

import Robot from './components/Robot'
import Camera from './components/Camera'
import CameraControls from './components/CameraControls'

import './App.css'

function App () {
  const [state, setState] = useState({
    coxaY: 0,
    femurX: -90,
    tibiaY: 0
  })

  const handleUpdate = (newData) => {
    setState({ ...newData })
  }

  const heightOffset = 5
  const bodyLength = 20

  // For now all legs are connected to one control
  const toRotations = () => {
    return {
      left: {
        front: [state.coxaY, state.femurX, state.tibiaY],
        mid: [state.coxaY, state.femurX, state.tibiaY],
        back: [state.coxaY, state.femurX, state.tibiaY]
      },
      right: {
        front: [state.coxaY, state.femurX, state.tibiaY],
        mid: [state.coxaY, state.femurX, state.tibiaY],
        back: [state.coxaY, state.femurX, state.tibiaY]
      }
    }
  }

  return (
<Fragment>
      <DatGui data={state} onUpdate={handleUpdate}>
        <DatNumber path='coxaY' label='Coxa Y' min={-90} max={90} step={1} />
        <DatNumber path='femurX' label='Femur X' min={-180} max={0} step={1} />
        <DatNumber path='tibiaY' label='Tibia Y' min={-180} max={0} step={1} />
      </DatGui>
      <Canvas>
        <axesHelper args={[50, 50, 50]}/>
        <gridHelper args={[100, 10]} />
        <Camera position={[100, 100, 100]} zoom={10} />
        <CameraControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Robot position={[0, heightOffset, 0]} length={bodyLength} rotations={toRotations()}/>
      </Canvas>
    </Fragment>
  )
}
export default App
