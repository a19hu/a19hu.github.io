import { Box, ButtonGroup, Container, Flex, Heading, HStack, IconButton, Image, Tag, Text, VStack,Button,Link} from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import Education from './Education'
 

export default function Banner() {
    return (
        <Container maxW={'7xl'} alignItems='center' my={5}>
            <Flex width={'100%'} maxW={['full', 'full', '7xl']} justifyContent='center' alignItems={'center'} flexDir={['column', 'column', 'row', 'row']}>
                <Flex width={['md', 'md', '2xl']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='2xl' minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Box>
                        <Flex alignItems={'center'} justifyContent='center'>
                            <Image borderColor={'gray.100'} src='https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png' width='32' />
                        </Flex>

                        <Heading textAlign={'center'}>Ashutosh kumar</Heading>

                        <Text fontSize={'sm'} textAlign='center'>
                        Hi, I'm Ashutosh Kumar, an engineering student at IIT Jodhpur. I experiment with various tech
                         stacks and have developed proficiency in several. My expertise is in web development, where I excel in
                          both front-end and back-end development and also devops.
                          {/* Driven by a passion for learning and innovation,  */}
                          {/* I'm eager to bring my skills to new and challenging projects. */}
                        {/* <Tag variant={'solid'}>internship</Tag> and <br /> <Tag mt={1} variant={'solid'}> Job Opportunities</Tag><br /> (Degree Completion in 2023). */}
                        </Text>

                        <VStack my={4}>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>Full Stack Developer</Tag>
                            <Tag px={5} variant={'subtle'} colorScheme='primary'>App Developer</Tag>
                            
                        </VStack>
                        <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                        {/* Icons  */}
                        <VStack spacing={6} alignItems='start'>
                            <HStack>
                                <Box me={2}>
                                    <IconButton  as="a" href="mailto:b22cs015@iitj.ac.in"
                        target="_blank" shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaEnvelope /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Email</Text>
                                    <Text fontWeight={'600'}>b22cs015@iitj.ac.in</Text>
                                </VStack>
                            </HStack>


                            {/* <HStack>
                                <Box me={2} >
                                    <IconButton shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaPhone /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Phone</Text>
                                    <Text fontWeight={'600'}>princepatelcodes</Text>
                                </VStack>
                            </HStack> */}


                            <HStack>
                                <Box me={2}>
                                    <IconButton as="a" href="https://github.com/a19hu"
                            target="_blank" shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaGithub /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Github</Text>
                                    <Text fontWeight={'600'}>a19hu</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton as="a" href="https://www.linkedin.com/in/ashutosh-kumar-5aa3b3259/"
                        target="_blank" shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaLinkedin /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Linkedin</Text>
                                    <Text fontWeight={'600'}>ashutosh-kumar-5aa3b3259</Text>
                                </VStack>
                            </HStack>

                            <HStack>
                                <Box me={2}>
                                    <IconButton as="a" href="https://x.com/ASHUTOSHKU86831?t=hT0hZyKj5BvRuJtyeCKY4Q&s=09"
                        target="_blank" shadow={'md'} variant={'ghost'} border='1px solid' borderColor={'gray.300'}><FaTwitter /></IconButton>
                                </Box>
                                <VStack alignItems={'start'} spacing={0.1}>
                                    <Text fontSize={'sm'}>Twitter</Text>
                                    <Text fontWeight={'600'}>ASHUTOSHKU86831</Text>
                                </VStack>
                            </HStack>

                        </VStack>
                    </Box>
                    <Box orientation='horizontal' bgColor='gray.300' my={4} height={0.2} />
                    <Link
                        href="https://drive.google.com/file/d/1HXNk4AslJ5RMit6o5Y-WdSapyS1s4XkQ/view?usp=sharing" 
                        isExternal
                        >
                        <Button
                            display={{ base: "flex", md: "inline-flex" }}
                            w="100%"
                            fontSize="sm"
                            fontWeight={600}
                            color="white"
                            bg="primary.700"
                            _hover={{ bg: "primary.900" }}
                        >
                            View Resume
                        </Button>
                        </Link>
                    <ButtonGroup justifyContent={'center'} alignItems={'center'} variant='ghost' spacing={1.9}>
                        <IconButton as="a"
                            href="https://github.com/a19hu"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub" 
                            _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaGithub size={24} /></IconButton>
                        <IconButton 
                        as="a"
                        href="https://www.instagram.com/kumarashutosh._?igsh=bDJuNHQ5d2RscGZv"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaInstagram size={24} /></IconButton>
                        <IconButton 
                        as="a"
                        href="https://www.linkedin.com/in/ashutosh-kumar-5aa3b3259/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        _hover={{ color: 'primary.700', bgColor: 'primary.50', border: '1px solid', borderColor: 'primary.700' }}><FaLinkedin size={24} /></IconButton>
                    </ButtonGroup>
                </Flex>
                <Box ms={['0', '0', '8']} flexDir={'column'} justifyContent='space-between' bgColor={'white'} color='black' maxHeight='4xl' scrollBehavior={'smooth'} minHeight={'4xl'} borderRadius='3xl' p='10' mb={10}>
                    <Heading>
                    Experience
                    </Heading>
                    <Education />
                </Box>
            </Flex>
        </Container>
    )
}
