import './App.css';
import React, { useState, Fragment } from 'react'
import { Canvas } from 'react-three-fiber'
import DatGui, { DatButton } from 'react-dat-gui'
import Leg from './Components/Leg';
import Camera from './Components/Camera';
import CameraControls from './Components/CameraControls';

function App() {
  const [enlarge, setEnlarge] = useState(false)

  return (
    <Fragment>
      <DatGui>
        <DatButton label="Enlarge" onClick={() => {setEnlarge(!enlarge)}}/>
      </DatGui>
      <Canvas>
        <Camera position={[100,100,100]} zoom={10} />
        <CameraControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Leg position={[0, 0, 0]} active={enlarge}/>
      </Canvas>
    </Fragment>
  );
}

export default App;
