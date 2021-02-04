import './App.css';
import React, { useState, Fragment } from 'react'
import { Canvas } from 'react-three-fiber'
import DatGui, { DatNumber } from 'react-dat-gui'
import Leg from './Components/Leg';
import Camera from './Components/Camera';
import CameraControls from './Components/CameraControls';
import 'react-dat-gui/dist/index.css';

class App extends React.Component {
  state={
    data: {
      coxaX: 0,
      coxaY: 0,
      coxaZ: 0,
      femurX: 0,
      femurY: 0,
      femurZ: 0,
      tibiaX: 0,
      tibiaY: 0,
      tibiaZ: 0,
    }
  }

  // Update current state with changes from controls
  handleUpdate = newData =>
    this.setState(prevState => ({
      data: { ...prevState.data, ...newData }
    }));

  render() {
    const { data } = this.state;

    return (
      <Fragment>
      <DatGui data={data} onUpdate={this.handleUpdate}>
        <DatNumber path='coxaX' label='Coxa X' min={-180} max={180} step={1} />
        <DatNumber path='coxaY' label='Coxa Y' min={-180} max={180} step={1} />
        <DatNumber path='coxaZ' label='Coxa Z' min={-180} max={180} step={1} />
        <DatNumber path='femurX' label='Femur X' min={-180} max={180} step={1} />
        <DatNumber path='femurY' label='Femur Y' min={-180} max={180} step={1} />
        <DatNumber path='femurZ' label='Femur Z' min={-180} max={180} step={1} />
        <DatNumber path='tibiaX' label='Tibia X' min={-180} max={180} step={1} />
        <DatNumber path='tibiaY' label='Tibia Y' min={-180} max={180} step={1} />
        <DatNumber path='tibiaZ' label='Tibia Z' min={-180} max={180} step={1} />
      </DatGui>
      <Canvas>
        <axesHelper args={[50,50,50]}/>
        <gridHelper args={[100, 10]} />
        <Camera position={[100,100,100]} zoom={10} />
        <CameraControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Leg 
          position={[0, 0, 0]} 
          rotationCoxa={[data.coxaX * Math.PI / 180, data.coxaY * Math.PI / 180, data.coxaZ * Math.PI / 180]} 
          rotationFemur={[data.femurX * Math.PI / 180, data.femurY * Math.PI / 180, data.femurZ * Math.PI / 180]} 
          rotationTibia={[data.tibiaX * Math.PI / 180, data.tibiaY * Math.PI / 180, data.tibiaZ * Math.PI / 180]}
        />
      </Canvas>
    </Fragment>
    )
  }
}

export default App;
