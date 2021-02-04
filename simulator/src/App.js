import './App.css'
import React, { Fragment, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import DatGui, { DatNumber } from 'react-dat-gui'
import Leg from './Components/Leg'
import Camera from './Components/Camera'
import CameraControls from './Components/CameraControls'
import 'react-dat-gui/dist/index.css'

function App () {
  const [state, setState] = useState({
    coxaY: 0,
    femurX: -90,
    tibiaY: 0
  })

  const handleUpdate = (newData) => {
    setState({ ...newData })
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
        <Leg
          position={[0, 0, 0]}
          rotationCoxa={state.coxaY * Math.PI / 180}
          rotationFemur={state.femurX * Math.PI / 180}
          rotationTibia={state.tibiaY * Math.PI / 180}
        />
      </Canvas>
    </Fragment>
  )
}
export default App
