import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import glass from "../textures/glass.jpeg";
import {useRef, useState, useMemo} from 'react'



const Shape = (props) => {
    const mesh = useRef();

    const [active, setActive] = useState(false);
  
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    });
  
    const texture = useMemo(() => new THREE.TextureLoader().load(glass), []);
    
    return (
        <mesh
        {...props}
        ref={mesh}
        scale="3.5"
        onClick={(e) => setActive(!active)}
          >
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" transparent side={THREE.DoubleSide}>
            <primitive attach="map"/>
          </meshStandardMaterial>
        </mesh>
      );
}



export default Shape