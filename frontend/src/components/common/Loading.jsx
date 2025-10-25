import { SplitText } from 'gsap/all'
import {gsap} from 'gsap'
import { useEffect, useLayoutEffect } from 'react'


export default function Loading() {
  useLayoutEffect(()=>{
    const logoSplit = new SplitText('.loading-logo',{type:'chars,words'})
    gsap.from(logoSplit.chars,{
      yPercent : 100,
      duration: 1.8,
      ease:'expo.out',
      stagger: 0.05
    })

  },[])
 
  return (
    <section className='flex items-center justify-center h-screen bg-black'> 
        <p className='loading-logo !text-[20rem] font-semibold text-white font-logo'>CANCAN</p>
    </section>
  )
}
