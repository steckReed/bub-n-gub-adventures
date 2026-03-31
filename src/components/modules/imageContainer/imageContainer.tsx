import ImageWithFallback from '../../ImageWithFallback/ImageWithFallback';

type ImageData = {
  filename: string;
  displayWidth: number;
  naturalWidth: number;
  naturalHeight: number;
};

export default function ImageContainer({ imageData, i }: { imageData: ImageData; i: number }) {
  const { filename, displayWidth, naturalWidth, naturalHeight } = imageData;

  return (
    <div className={`shadow4 keen-slider__slide number-slide${i}`}
        style={{
          backgroundColor: '#233143',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          lineHeight: '0',
          margin: 'auto 0px',
          width: displayWidth,
          minWidth: displayWidth,
        }}>

      <ImageWithFallback
        src={`/images/${filename}`}
        fallbackSrc={`/images/${filename}`}
        height={naturalHeight}
        width={naturalWidth}
        alt='Your Name'
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  );
}
