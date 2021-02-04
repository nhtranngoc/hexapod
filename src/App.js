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
      coxaY: 0,
      femurX: -90,
      tibiaY: 0,
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
        <DatNumber path='coxaY' label='Coxa Y' min={-90} max={90} step={1} />
        <DatNumber path='femurX' label='Femur X' min={-180} max={0} step={1} />
        <DatNumber path='tibiaY' label='Tibia Y' min={-180} max={0} step={1} />
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
          rotationCoxa={data.coxaY * Math.PI / 180} 
          rotationFemur={data.femurX * Math.PI / 180} 
          rotationTibia={data.tibiaY * Math.PI / 180}
        />
      </Canvas>
    </Fragment>
    )
  }
}

export default App;
