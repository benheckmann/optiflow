import {Carousel, Embla} from "@mantine/carousel";
import {Container, Progress} from "@mantine/core";
import React, {useCallback, useEffect, useState} from "react";

const CustomerReferencesCarousel = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [embla, setEmbla] = useState<Embla | null>(null);

    const handleScroll = useCallback(() => {
        if (!embla) return;
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgress(progress * 100);
    }, [embla, setScrollProgress]);

    useEffect(() => {
        if (embla) {
            embla.on('scroll', handleScroll);
            handleScroll();
        }
    }, [embla]);

  return (
      <Container>
          <Carousel
              slideSize="70%" height={200} slideGap="xl" controlsOffset="xl" dragFree
          >
              <Carousel.Slide><Container className="bg-gray-300 h-full">1</Container></Carousel.Slide>
              <Carousel.Slide><Container className="bg-gray-500 h-full">1</Container></Carousel.Slide>
              <Carousel.Slide ><Container className="bg-gray-300 h-full">1</Container></Carousel.Slide>
              <Carousel.Slide ><Container className="bg-gray-500 h-full">1</Container></Carousel.Slide>
              {/* ...other slides */}
          </Carousel>
          <Progress
              value={scrollProgress}
              styles={{bar: {transitionDuration: '0ms'}, root: {maxWidth: 1300}}}
              size="sm"
              mt="xl"
              mx="auto"
          />
      </Container>
  )
}
export default CustomerReferencesCarousel;