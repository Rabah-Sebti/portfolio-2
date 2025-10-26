import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import { useAutoplay } from "./EmblaCarouselAutoplay";
// import { useAutoplayProgress } from "./EmblaCarouselAutoplayProgress";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import "./css/embla.css";
import Image from "next/image";
// import { useAutoplay } from "./EmblaCarouselAutoplay";

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  title: string;
  setActiveImage: (img: string) => void;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, title, setActiveImage } = props;
  // const progressNode = useRef<HTMLDivElement | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000, stopOnInteraction: false }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // const { onAutoplayButtonClick } = useAutoplay(emblaApi);

  // const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((image, index) => (
            <div className="embla__slide" key={index}>
              {/* <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div> */}
              <div
                className="relative  w-full h-[300px] cursor-pointer"
                onClick={() => setActiveImage(image)}
              >
                <Image
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className=" flex justify-end"> */}
      <div className="flex flex-row justify-end gap-2 mt-4">
        <PrevButton
          // onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          // onClick={() => onAutoplayButtonClick(onNextButtonClick)}
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>

      {/* <div
          className={`embla__progress`.concat(
            showAutoplayProgress ? "" : " embla__progress--hidden"
          )}
        >
          <div className="embla__progress__bar" ref={progressNode} />
        </div> */}

      {/* <button className="embla__play" onClick={toggleAutoplay} type="button">
          {autoplayIsPlaying ? "Stop" : "Start"}
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default EmblaCarousel;
