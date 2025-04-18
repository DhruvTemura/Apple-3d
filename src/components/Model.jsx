import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ModelView from './ModelView';
import { useState } from 'react'
import { yellowImg } from '../utils';
import * as THREE from 'three';
import { useRef } from 'react';
import { View } from '@react-three/drei';
import { models } from '../constants';
import { sizes } from '../constants';

const Model = () => {

  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['8F8A81','#FFE7B9', '#6F6C64'],
    img: yellowImg,
  })

  //camera control
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());
  
  //rotation
  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)


  useGSAP(() => {
    gsap.to('#heading', {y:0, opacity: 1, duration: 2})
  }, []);

  return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <h1 id='heading' className='section-heading'>Take a closer look</h1>

            <div className='flex flex-col items-center mt-5'>
                <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
                    <ModelView index={1} groupRef={small} gsapType='view1' controlRef={cameraControlSmall} setRotationState={setSmallRotation} item={model} size={size} />
                    <ModelView index={2} groupRef={large} gsapType='view2' controlRef={cameraControlLarge} setRotationState={setLargeRotation} item={model} size={size} />

                    <canvas className='w-full h-full' style={{position: 'fixed', top:0, bottom: 0, left:0, right: 0,overflow:'hidden'}} eventSource={document.getElementById('root')}>
                        <View.Port></View.Port>
                    </canvas>
                </div>
                <div className='mx-auto w-100'>
                    <p className='text-sm font-light text-center mb-5'>{model.title}</p>
                    <div className='flex items-center justify-center'>
                        <ul className='color-container'>
                            {models.map((item,i) => (
                                <li key={i} className='w-6 h-6 rounded-full mx-2 cursor-pointer'style={{backgroundColor: item.color[0]}} onClick={() => setModel(item)}></li>
                            ))}
                        </ul>

                        <button className='size-btn-container'>
                            {sizes.map(({label, value}) =>(
                                <span key={label} className='size-btn' style={{backgroundColor: size=== value ? 'white' : 'transparent', color: size=== value ? 'black' : 'white'}} onClick={() => setSize(value)}>
                                    {label}
                                </span>
                            ))}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model 