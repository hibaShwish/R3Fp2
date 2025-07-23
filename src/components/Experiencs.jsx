import { OrbitControls, ScrollControls } from '@react-three/drei'
import { WawaOffice } from './WawaOffice'
import { Overlay } from './Overlay'



const Experiencs = () => {
  return (
    <>
    <ambientLight intensity={1}/>
<OrbitControls enableZoom={false}/>
   {/* <mesh>
    <boxGeometry />
    <meshNormalMaterial />
   </mesh> the commponent under is render a mesh  */}   
<ScrollControls pages={3} > {/* Adjust pages as needed */}
 <Overlay />
  <WawaOffice />
</ScrollControls>

   </>
  )
}

export default Experiencs