import { useState } from 'react';
import ImageWithFallback from '../../ImageWithFallback/ImageWithFallback';

export default function ImageContainer({ reqImg, i }){  
  return(
  <>
    <div className={`shadow4 keen-slider__slide number-slide${i}`}
        style={{ 
          position: 'relative',
          borderRadius: '12px',
          overflow:'hidden',
          lineHeight: '0',
          margin: 'auto 0px', 
          width:"max-content",
        }} >

      <ImageWithFallback
        src={`https://steckreed.github.io/bub-n-gub-adventures/images/${reqImg}`}
        fallbackSrc={`https://bub-n-gub-adventures.vercel.app/images/${reqImg}`}
        height={200}
        width={250}
        alt='Your Name'
        style={{
          width: '100%',
        }}
      />
    </div>
  </>
  )
}