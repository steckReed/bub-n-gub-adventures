import Image from 'next/image';
import { useState } from 'react';

export default function ImageContainer({ reqImg, i }){

  const [paddingTop, setPaddingTop] = useState('0');
  
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

      <Image
        src={reqImg} // Route of the image file
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