import { useRef, useState } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    // setCurrentIndex((prevIndex) => prevIndex + 1);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  const handleVideoLoad = () => setLoadedVideos((prev) => prev + 1);

  return (
    <>
      <section className="relative h-dvh w-screen overflow-x-hidden hero">
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        >
          <div>
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
              <div
                onClick={handleMiniVideoClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  src={getVideoSrc(upcomingVideoIndex)}
                  ref={nextVideoRef}
                  loop
                  muted
                  id="currect-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                ></video>
              </div>
            </div>
            <video
              src={getVideoSrc(currentIndex)}
              ref={nextVideoRef}
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              onLoadedData={handleVideoLoad}
            ></video>
            <video
              src={getVideoSrc(
                currentIndex === totalVideos - 1 ? 1 : currentIndex
              )}
              //   autoPlay
              loop
              muted
              className="absolute left-0 top-0 size-full object-cover object-center"
              onLoadedData={handleVideoLoad}
            ></video>
          </div>
          <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
            G<b>a</b>ming
          </h1>
          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">
                redefi<b>n</b>d
              </h1>
              <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                Enter the Metagame Layer <br /> Unleash the Play Economy
              </p>
              <Button
                id="watch-trailer"
                title="Watch Trailer"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-yellow-300 flex-center gap-1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
