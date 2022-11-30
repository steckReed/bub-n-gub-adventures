import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Modules/SEO";
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
    '/images/img-1.jpg',
    '/images/img-2.jpg',
    '/images/img-3.jpg',
    '/images/img-4.jpg',
    '/images/img-5.jpg',
    '/images/img-6.jpg',
    '/images/img-7.jpg',
    '/images/img-8.jpg',
    '/images/img-9.jpg',
    '/images/img-10.jpg',
    '/images/img-11.jpg',
    '/images/img-12.jpg',
    '/images/img-13.jpg',
    '/images/img-14.jpg',
    '/images/img-15.jpg',
    '/images/img-16.jpg',
    '/images/img-17.jpg',
    '/images/img-18.jpg',
    '/images/img-19.jpg',
    '/images/img-20.jpg',
    '/images/img-21.jpg',
    '/images/img-22.jpg',
    '/images/img-23.jpg',
    '/images/img-24.jpg',
    '/images/img-25.jpg',
    '/images/img-26.jpg',
    '/images/img-27.jpg',
    '/images/img-28.jpg',
    '/images/img-29.jpg',
    '/images/img-30.jpg',
    '/images/img-31.jpg',
    '/images/img-32.jpg',
    '/images/img-33.jpg',
    '/images/img-34.jpg',
    '/images/img-35.jpg',
    '/images/img-36.jpg',
    '/images/img-37.jpg',
    '/images/img-38.jpg',
    '/images/img-39.jpg',
    '/images/img-40.jpg',
    '/images/img-41.jpg',
    '/images/img-42.jpg',
    '/images/img-43.jpg',
    '/images/img-44.jpg',
    '/images/img-45.jpg',
    '/images/img-46.jpg',
    '/images/img-47.jpg'
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
            
            <div className="flex-wrap" style={{ width: '100vw' }}>
              <>
                {imagesArr.map(element => {
                  return (
                    <ImageContainer reqImg={element} />
                  )
                })}
              </>
            </div>


          </motion.div>
        </section>
      </div>

    </>
  );
}
