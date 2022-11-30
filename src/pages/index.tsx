import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Modules/SEO";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
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

  
  const imagesArrTop =[
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
  ]
  const imagesArrMiddle = [
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
  ]
  const imagesArrBottom = [
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

  const animation = { duration: (imagesArrMiddle.length * 2700), easing: (t) => t }

  const [sliderTop] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: "auto", spacing: 10 },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })
  const [sliderMiddle] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: "auto", spacing: 10 },
    created(s) {
      s.moveToIdx(-5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs - 5, true, animation)
    },
  })
  const [sliderBottom] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: { perView: "auto", spacing: 10 },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />
      
      <div className='grid-container-custom'>
        
        <section className='grid'>
          <h1 className='text color-custom-inverse' 
              style={{ textAlign:"center", padding:"0px 40px" }}>The Amazing Adventures of Bub N' Gub</h1>

          <div className='flex-wrap'
              style={{ overflow: "hidden" }}>

            <div ref={sliderTop} className="keen-slider" 
                  style={{ overflow: "visible" }}>

              {imagesArrTop.map((element, i) => {
                return (
                  <ImageContainer reqImg={element} i={i+1} />
                )
              })}

            </div>

          </div>

          <div className='flex-wrap'
            style={{ overflow: "hidden" }}>

            <div ref={sliderMiddle} className="keen-slider"
              style={{ overflow: "visible" }}>

              {imagesArrMiddle.map((element, i) => {
                return (
                  <ImageContainer reqImg={element} i={i + 1} />
                )
              })}

            </div>

          </div>

          <div className='flex-wrap'
            style={{ overflow: "hidden" }}>

            <div ref={sliderBottom} className="keen-slider"
              style={{ overflow: "visible" }}>

              {imagesArrBottom.map((element, i) => {
                return (
                  <ImageContainer reqImg={element} i={i + 1} />
                )
              })}

            </div>

          </div>
        </section>
      </div>

    </>
  );
}

