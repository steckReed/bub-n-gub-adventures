import Image from 'next/image';
import * as Imgs from '@Images/_index'

export default function ImageContainer({ reqImg }){
  return(
  <>
    <Image
      src={reqImg} // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={80} // Desired size with correct aspect ratio
      alt="Your Name"
      className='shadow4'
      style={{
        borderRadius: "12px"
      }}
    />
  </>
  )
}