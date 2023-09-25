import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useLayoutEffect } from "react";
import {
  Text,
  OrbitControls,
  ContactShadows,
  PresentationControls,
  Environment,
  useGLTF,
  Float,
  Html,
} from "@react-three/drei";

export default function App() {
  const computer = useGLTF("/AstroWithThreeJs/macbook.gltf");

  return (
    <Canvas>
      <Environment preset="forest" />

      <color
        attach="background"
        args={["#241a1a"]}
      />
      <PresentationControls
        global
        rotation={[0.13, 0.5, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.4, 0.2]}
        config={{ mass: 2, tension: 200 }}
        snap={{ mass: 4, tension: 200 }}
      >
        <Float rotationIntensity={0.4}>
          <primitive
            object={computer.scene}
            position-y={-1.2}
            position-x={-1.2}
          >
            <rectAreaLight
              color={"#fff"}
              intensity={65}
              width={2.5}
              height={1.65}
              position={[0, 0.55, -1.15]}
              rotation={[0.1, Math.PI, 0]}
            />
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0.17, 1.75, -1.4]}
              rotation={[-0.256, 0, 0]}
            >
              <iframe src="http://localhost:4321/AstroWithThreeJs" />
            </Html>
          </primitive>
          <Text
            color={"#daa520"}
            font="http://localhost:4321/AstroWithThreeJs/zcool.woff"
            fontSize={1}
            position={[1, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={1}
            textAlign="center"
          >
            Youjun's page
          </Text>
        </Float>
      </PresentationControls>
      {/* <ContactShadows
        position={-1.5}
        scale={5}
        opacity={0.4}
      /> */}
      {/* <OrbitControls /> */}
    </Canvas>
  );
}

<style></style>;
