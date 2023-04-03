import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

// const headingOptions = {
//   pos: 'absolute',
//   left: '50%',
//   top: '50%',
//   transform: 'translate(-50%,-50%)',
//   textTransform: 'uppercase',
//   p: '4',
//   fontSize: '4rem',
// };

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          borderBottom={'2px solid'}
          w="fit-content"
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
          //   border={'2px solid red'}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nemo
            odit nulla, eum doloremque explicabo temporibus dignissimos, quas
            distinctio, voluptas consectetur nihil pariatur et beatae
            architecto? Eum id magni in amet modi asperiores officia dolorum
            nihil corrupti labore sint officiis non est necessitatibus at
            debitis itaque quisquam, sunt cupiditate aliquid placeat enim
            quibusdam. Neque alias blanditiis ab id corporis. Perferendis est, a
            quo quis rem sapiente similique quod impedit perspiciatis repellat
            ipsam distinctio dolorem repudiandae nostrum quasi iusto quidem
            reprehenderit possimus culpa cupiditate veritatis praesentium
            quisquam sint eligendi. Qui inventore doloremque quaerat accusamus
            tenetur voluptates quam consectetur impedit unde fuga.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color="white" className="legend">
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.900'} color="black" className="legend">
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color="black" className="legend">
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color="black" className="legend">
        Night Life School
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
