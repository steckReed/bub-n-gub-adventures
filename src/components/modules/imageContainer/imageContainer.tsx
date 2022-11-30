import Image from 'next/image';
import { useState } from 'react';

export default function ImageContainer({ reqImg }){

  const [paddingTop, setPaddingTop] = useState('0');
  
  return(
  <>
    <div 
        className='shadow4'
        style={{ 
          position: 'relative',
          borderRadius: '12px',
          overflow:'hidden',
          lineHeight: '0',
          margin: 'auto 0px',
          // flexBasis: '100%',
          // flex: 1,
        }} >

      <Image
        src={reqImg} // Route of the image file
        height={250}
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