import React from 'react'
import { Box , Image , Heading, Container , Stack , Text} from '@chakra-ui/react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
    pos : "absolute",
    left : "50%",
    top : "50%" , 
    transform : "translate(-50%,-50%)",
    textTransform : "uppercase" , 
    p: '4',
    size: '2xl' , 
};

const Home = () => {
  return (
    <Box >
        <MyCarousel />

        <Container maxW={'container.xl'} minH={'100vh'} p="16">
            <Heading textTransform={"uppercase"} py="2" w={"fit-content"} borderBottom={"2px solid"} m="auto">
                Services
            </Heading>
            <Stack h="full" p={"full"} alignItems={'center'} direction={['column','row']}>
                <Image src={img5} h={["40","400"]}filter={'hue-rotate(-130deg'}/>

                <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate itaque porro explicabo officiis dignissimos! Corrupti ipsam quisquam nesciunt omnis quaerat fugiat temporibus placeat minima voluptate quasi obcaecati quis aliquam magnam eligendi impedit, nostrum consectetur veritatis nobis voluptas alias! Iure non minima, similique, aliquam saepe assumenda fugiat ullam ut suscipit eveniet recusandae error, tempore accusantium? Itaque error, porro fuga ipsum sint rerum eos reprehenderit est consequatur molestias. Adipisci et ipsum exercitationem. Optio quia error laudantium animi molestiae neque nemo natus quam, maxime quasi aut ullam dolore repellendus fuga eum nostrum ipsum, assumenda rem officiis totam vel officia. Cumque consectetur facere explicabo dicta repudiandae. Nostrum earum vel dolor deleniti rem natus explicabo!
                </Text>
            </Stack>
        </Container>

    </Box>
  )
}

const MyCarousel = ()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false} >
        <Box w="full" h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Future Is Gaming
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Gaming On Console
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOptions}>
                Night Life Is Cool
            </Heading>
        </Box>
    </Carousel>
);



export default Home;