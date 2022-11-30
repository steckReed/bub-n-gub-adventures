import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Modules/SEO";
import Image from 'next/image';
import * as Imgs from '@Images/_index'
import { motion } from 'framer-motion';

export default function Home() {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo: "site/logo",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/index`,
      title : "Pic Adventures",
      description:"Bub N' Gub Adventures"
    });
  // SEO

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />
      
      <div className='grid-container-primary'>
        
        <section className='grid'>
          <h1 className='text color-white' style={{ textAlign:"center" }}>The Amazing Adventures of Bub N' Gub</h1>

          <motion.div
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            
            <div style={{ width: '100vw' }}>
              <Image
                src={Imgs.Img4} // Route of the image file
                // height={'auto'} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </div>

          </motion.div>
        </section>
      </div>

    </>
  );
}
