import { useEffect, useMemo, useState } from "react";
import { LogoJsonLd, NextSeo } from "next-seo";
import { PageSEO } from "@Modules/SEO";
import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderOptions } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ImageContainer from "../components/modules/imageContainer/imageContainer";
import fs from "fs";
import path from "path";
import sizeOf from "image-size";

type ImageData = {
  filename: string;
  displayWidth: number;
  naturalWidth: number;
  naturalHeight: number;
};

type HomeProps = {
  images: ImageData[];
};

const SLIDE_HEIGHT = 200;

function splitEvenly<T>(items: T[], buckets: number): T[][] {
  const result: T[][] = [];
  const baseSize = Math.floor(items.length / buckets);
  const remainder = items.length % buckets;
  let start = 0;

  for (let i = 0; i < buckets; i += 1) {
    const size = baseSize + (i < remainder ? 1 : 0);
    result.push(items.slice(start, start + size));
    start += size;
  }

  return result;
}

function shuffleArray<T>(items: T[]): T[] {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function repeatToMin<T>(items: T[], minLength: number): T[] {
  if (items.length === 0) return items;
  const result: T[] = [];
  while (result.length < minLength) {
    result.push(...items);
  }
  return result;
}

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), "public", "images");
  const files = fs.readdirSync(imagesDir);
  const imageFiles = files
    .filter((file) => file.toLowerCase().endsWith(".webp"))
    .sort();

  const images: ImageData[] = imageFiles.map((file) => {
    const filePath = path.join(imagesDir, file);
    const buffer = fs.readFileSync(filePath);
    const dimensions = sizeOf(new Uint8Array(buffer));
    const naturalWidth = dimensions.width || 250;
    const naturalHeight = dimensions.height || 200;
    const displayWidth = Math.round((naturalWidth / naturalHeight) * SLIDE_HEIGHT);
    return { filename: file, displayWidth, naturalWidth, naturalHeight };
  });

  const shuffledImages = shuffleArray(images);

  return {
    props: {
      images: shuffledImages,
    },
  };
}

export default function Home({ images }: HomeProps) {
  // SEO
    // Per-Page SEO
    const SEO = PageSEO({
      siteLogo: "site/logo",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/index`,
      title : "Adventure Slide",
      description:"Bub N' Gub Adventures"
    });
  // SEO

  
  const [viewportWidth, setViewportWidth] = useState(0);
  const [slidersReady, setSlidersReady] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      setViewportWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const [imagesArrTop, imagesArrMiddle, imagesArrBottom] = splitEvenly(images, 3);
  const slideWidth = 250;
  const slideSpacing = 10;
  const minLoopSlides = Math.max(
    20,
    Math.ceil(((viewportWidth || 1024) + slideWidth) * 2 / (slideWidth + slideSpacing))
  );
  const imagesArrTopLoop = repeatToMin(imagesArrTop, minLoopSlides);
  const imagesArrMiddleLoop = repeatToMin(imagesArrMiddle, minLoopSlides);
  const imagesArrBottomLoop = repeatToMin(imagesArrBottom, minLoopSlides);
  const maxRowLength = Math.max(
    imagesArrTopLoop.length,
    imagesArrMiddleLoop.length,
    imagesArrBottomLoop.length,
    1
  );
  const animation = useMemo(
    () => ({ duration: maxRowLength * 1700, easing: (t) => t }),
    [maxRowLength]
  );

  const makeAutoConfig = (direction: number): KeenSliderOptions => ({
    loop: true,
    renderMode: "precision",
    drag: true,
    slides: { perView: "auto" as const, spacing: 10 },
    created(s) {
      s.moveToIdx(direction, true, animation);
    },
    updated(s) {
      if (!s.animator?.active) {
        s.moveToIdx(s.track.details.abs + direction, true, animation);
      }
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + direction, true, animation);
    },
    dragStarted(s) {
      s.animator?.stop();
    },
    dragEnded(s) {
      s.moveToIdx(s.track.details.abs + direction, true, animation);
    },
  });

  const topConfig = useMemo(() => makeAutoConfig(5), [animation]);
  const middleConfig = useMemo(() => makeAutoConfig(-5), [animation]);
  const bottomConfig = useMemo(() => makeAutoConfig(5), [animation]);

  const [sliderTop, sliderTopInstance] = useKeenSlider(topConfig);
  const [sliderMiddle, sliderMiddleInstance] = useKeenSlider(middleConfig);
  const [sliderBottom, sliderBottomInstance] = useKeenSlider(bottomConfig);

  useEffect(() => {
    sliderTopInstance.current?.update();
    sliderMiddleInstance.current?.update();
    sliderBottomInstance.current?.update();
  }, [
    imagesArrTopLoop.length,
    imagesArrMiddleLoop.length,
    imagesArrBottomLoop.length,
    viewportWidth,
    sliderTopInstance,
    sliderMiddleInstance,
    sliderBottomInstance,
  ]);

  useEffect(() => {
    if (viewportWidth === 0) return;
    const id = requestAnimationFrame(() => {
      setSlidersReady(true);
    });
    return () => cancelAnimationFrame(id);
  }, [viewportWidth]);

  const sliderKey = `keen-${minLoopSlides}`;

  return (
    <>
      <LogoJsonLd {...SEO.LogoJsonLd} />
      <NextSeo {...SEO.DefaultSeo} />
      
      <div className='grid-container-custom'>
        
        <section className='grid' style={{ overflow:"hidden", opacity: slidersReady ? 1 : 0, transition: "opacity 0.3s ease" }}>
          <h1 
          className='text color-custom-inverse' 
            style={{ textAlign:"center", padding:"0px 40px", fontSize: 'clamp(22px, 3.5vw, 75px)' }}
          >
            The Amazing Adventures of Bub N' Gub
          </h1>

          <div className='flex-wrap'
              style={{ overflow: "hidden" }}>

            <div key={`top-${sliderKey}`} ref={sliderTop} className="keen-slider" 
                  style={{ overflow: "visible" }}>

              {imagesArrTopLoop.map((element, i) => {
                return (
                  <ImageContainer key={`top-${element.filename}-${i}`} imageData={element} i={i + 1} />
                )
              })}

            </div>

          </div>

          <div className='flex-wrap'
            style={{ overflow: "hidden" }}>

            <div key={`middle-${sliderKey}`} ref={sliderMiddle} className="keen-slider"
              style={{ overflow: "visible" }}>

              {imagesArrMiddleLoop.map((element, i) => {
                return (
                  <ImageContainer key={`middle-${element.filename}-${i}`} imageData={element} i={i + 1} />
                )
              })}

            </div>

          </div>

          <div className='flex-wrap'
            style={{ overflow: "hidden" }}>

            <div key={`bottom-${sliderKey}`} ref={sliderBottom} className="keen-slider"
              style={{ overflow: "visible" }}>

              {imagesArrBottomLoop.map((element, i) => {
                return (
                  <ImageContainer key={`bottom-${element.filename}-${i}`} imageData={element} i={i + 1} />
                )
              })}

            </div>

          </div>
        </section>
      </div>

    </>
  );
}

