import React from 'react';
import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    IconButton,
    Tag
} from '@chakra-ui/react';
import { FiExternalLink } from "react-icons/fi";


const milestones = [
    {
        id: 1,
        date: 'Jun/24- ongoing',
        title: 'KBCLOUDTECH PRIVATE LIMITED',
        subtitle:"Software Developer Intern",
        description: `Currently interning as a developer, creating 4+ websites and mobile applications using ReactJS, NextJS, and
Flutter, with Firebase as the primary database solution for real-time data management and messaging.
\n \nCollaborated on debugging and resolving issues in existing applications, ensuring optimal performance and seamless
functionality`,
        link:""
    },
    {
        id: 2,
        date: 'Dec/24',
        title: 'Prometeo',
        subtitle:"IITJ Fest Head",
        description: `Developed website for Prometeo, the technical fest of IIT Jodhpur, using React.js and Django, enabling 1200+
students to register and participate in events seamlessly also managed all aspects of deployment and performance.`,
        link:"https://www.prometeo.in"
    },
    // {
    //     id: 3,
    //     date: 'Jan/23',
    //     title: 'Prometeo',
    //     subtitle:"IITJ Fest AH",
    //     description:
    //         `Designed and developed a dynamic and interactive website interface for the Prometeo fest .`,
    //     link:"https://www.prometeo.in"
    // },
    // {
    //     id: 4,
    //     date: 'July 30, 2022',
    //     title: 'Post Grad Ongoing',
    //     description:
    //         'fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est.'
    // }
];

const Education = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    return (
        <Container maxWidth="7xl" maxHeight={'3xl'} overflowX={'auto'} p={{ base: 2, sm: 10 }}
            mt={3}
            css={{
                '&::-webkit-scrollbar': {
                    marginTop: '8px',
                    width: '8px',
                    height: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    marginTop: '8px',
                    width: '2px',
                    height: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                    marginTop: '8px',
                    background: '#121212',
                    borderRadius: '12px',
                },
            }}
        >

            {milestones.map((milestone) => (
                <Flex key={milestone.id} mb="10px">
                    {/* Desktop view(left card) */}
                    {isDesktop && milestone.id % 2 === 0 && (
                        <>
                            <EmptyCard />
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Mobile view */}
                    {isMobile && (
                        <>
                            <LineWithDot />
                            <Card {...milestone} />
                        </>
                    )}

                    {/* Desktop view(right card) */}
                    {isDesktop && milestone.id % 2 !== 0 && (
                        <>
                            <Card {...milestone} />

                            <LineWithDot />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};



const Card = ({ id, title, description, date,link,subtitle }) => {
    // For even id show card on left side
    // For odd id show card on right side
    const isEvenId = id % 2 === 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
        borderWidthValue = '15px 15px 15px 0';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.300', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>
                <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
                    {date}
                </Text>

                <VStack spacing={2} mb={3} textAlign="left" justifyItems={"center"}>
                    <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    <Tag marginLeft={2} variant={'subtle'}>{subtitle}</Tag>
                    </chakra.h1>
                    <Text fontSize="sm">{description}</Text>
                    {/* <Text fontSize="sm">{su}</Text> */}

                </VStack>
                { link.length > 0 &&
                <IconButton as="a"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '0px solid', borderColor: 'primary.700' }}><FiExternalLink size={15} /></IconButton>
                }
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.400', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg={useColorModeValue('primary.800', 'gray.200')}
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Education;