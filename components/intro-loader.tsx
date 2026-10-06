'use client';
import {useEffect,useState} from 'react';
export function IntroLoader(){
 const [visible,setVisible]=useState(true);
 useEffect(()=>{
  const bodyOverflow=document.body.style.overflow;
  const content=document.getElementById('studio-content');
  document.body.style.overflow='hidden';
  if(content)content.inert=true;
  const timer=window.setTimeout(()=>{
   setVisible(false);
   document.body.style.overflow=bodyOverflow;
   if(content)content.inert=false;
   window.dispatchEvent(new Event('resize'));
  },3000);
  return ()=>{window.clearTimeout(timer);document.body.style.overflow=bodyOverflow;if(content)content.inert=false;};
 },[]);
 if(!visible)return null;
 return <div className="intro-loader" role="status" aria-live="polite" aria-label="Loading Nails By Rayma"><div className="loader-content"><div className="loader-mark" aria-hidden="true"><span>R.</span><svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="56"/></svg></div><span className="loader-brand">NAILS <em>by</em> RAYMA</span><span className="eyebrow">YOUR LITTLE MOMENT OF LUXURY</span><div className="loader-progress" aria-hidden="true"><span/></div></div></div>;
}
