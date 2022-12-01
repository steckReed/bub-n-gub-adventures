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
    'img-1.jpg',
    'img-2.jpg',
    'img-3.jpg',
    'img-4.jpg',
    'img-5.jpg',
    'img-6.jpg',
    'img-7.jpg',
    'img-8.jpg',
    'img-9.jpg',
    'img-10.jpg',
    'img-11.jpg',
    'img-12.jpg',
    'img-13.jpg',
    'img-14.jpg',
    'img-15.jpg',
  ]
  const imagesArrMiddle = [
    'img-16.jpg',
    'img-17.jpg',
    'img-18.jpg',
    'img-19.jpg',
    'img-20.jpg',
    'img-21.jpg',
    'img-22.jpg',
    'img-23.jpg',
    'img-24.jpg',
    'img-25.jpg',
    'img-26.jpg',
    'img-27.jpg',
    'img-28.jpg',
    'img-29.jpg',
    'img-30.jpg',
  ]
  const imagesArrBottom = [
    'img-31.jpg',
    'img-32.jpg',
    'img-33.jpg',
    'img-34.jpg',
    'img-35.jpg',
    'img-36.jpg',
    'img-37.jpg',
    'img-38.jpg',
    'img-39.jpg',
    'img-40.jpg',
    'img-41.jpg',
    'img-42.jpg',
    'img-43.jpg',
    'img-44.jpg',
    'img-45.jpg',
    'img-46.jpg',
    'img-47.jpg'
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

