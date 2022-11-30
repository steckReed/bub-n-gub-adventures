import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Modules/SEO";
import Image from 'next/image';
import * as Imgs from '@Images/_index'
import { motion } from 'framer-motion';
import ImageContainer from '../components/modules/imageContainer/imageContainer';

export default function Home() {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo: "site/logo",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/index`,
      title : "Adventure Slide",
      description:"Bub N' Gub Adventures"
    });
  // SEO

  const imagesArr =[
    '@Images/img-1.jpg',
    '@Images/img-2.jpg',
    '@Images/img-3.jpg',
    '@Images/img-4.jpg',
    '@Images/img-5.jpg',
    '@Images/img-6.jpg',
    '@Images/img-7.jpg',
    '@Images/img-8.jpg',
    '@Images/img-9.jpg',
    '@Images/img-10.jpg',
    '@Images/img-11.jpg',
    '@Images/img-12.jpg',
    '@Images/img-13.jpg',
    '@Images/img-14.jpg',
    '@Images/img-15.jpg',
    '@Images/img-16.jpg',
    '@Images/img-17.jpg',
    '@Images/img-18.jpg',
    '@Images/img-19.jpg',
    '@Images/img-20.jpg',
    '@Images/img-21.jpg',
    '@Images/img-22.jpg',
    '@Images/img-23.jpg',
    '@Images/img-24.jpg',
    '@Images/img-25.jpg',
    '@Images/img-26.jpg',
    '@Images/img-27.jpg',
    '@Images/img-28.jpg',
    '@Images/img-29.jpg',
    '@Images/img-30.jpg',
    '@Images/img-31.jpg',
    '@Images/img-32.jpg',
    '@Images/img-33.jpg',
    '@Images/img-34.jpg',
    '@Images/img-35.jpg',
    '@Images/img-36.jpg',
    '@Images/img-37.jpg',
    '@Images/img-38.jpg',
    '@Images/img-39.jpg',
    '@Images/img-40.jpg',
    '@Images/img-41.jpg',
    '@Images/img-42.jpg',
    '@Images/img-43.jpg',
    '@Images/img-44.jpg',
    '@Images/img-45.jpg',
    '@Images/img-46.jpg',
    '@Images/img-47.jpg'
  ]

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />
      
      <div className='grid-container'>
        
        <section className='grid'>
          <h1 className='text color-dark-primary' style={{ textAlign:"center" }}>The Amazing Adventures of Bub N' Gub</h1>

          <motion.div
            // animate={{ x: "100%" }}
            // transition={{ repeat: Infinity, duration: 15 }}
          >
            
            <div className="flex" style={{ width: '100vw' }}>
              <Image
                className='shadow4'
                style={{ 
                  borderRadius:"12px"
                 }}
                src={Imgs.Img1} // Route of the image file
                // height={'auto'} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              {/* <ImageContainer reqImg={imagesArr[5]}/> */}
            </div>


          </motion.div>
        </section>
      </div>

    </>
  );
}
