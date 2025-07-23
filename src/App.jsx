import './App.css'
import { Canvas } from '@react-three/fiber'
import Experiencs from './components/Experiencs'

function App() {


  return (
  <Canvas
  camera={{fov:64,position:[2.3,1.5,2.3]}}>
    <Experiencs />
  </Canvas>
  )
}

export default App
