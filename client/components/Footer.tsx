import React, { useState, useEffect } from 'react';
import { Box, Flex, IconButton, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box backgroundColor="gray.800" color="white" padding="2rem">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontSize="lg">Follow us:</Text>
          <Flex marginTop="0.5rem">
            <IconButton
              colorScheme="whiteAlpha"
              aria-label="Facebook"
              icon={<FaFacebook />}
              marginRight="0.5rem"
            />
            <IconButton
              colorScheme="whiteAlpha"
              aria-label="Twitter"
              icon={<FaTwitter />}
              marginRight="0.5rem"
            />
            <IconButton
              colorScheme="whiteAlpha"
              aria-label="Instagram"
              icon={<FaInstagram />}
              marginRight="0.5rem"
            />
            <IconButton
              colorScheme="whiteAlpha"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              marginRight="0.5rem"
            />
          </Flex>
        </Box>
        <Box>
          <Text fontSize="lg">Subscribe to our newsletter:</Text>
          {/* Include your newsletter signup form here */}
        </Box>
      </Flex>
      <Box marginTop="2rem" textAlign="center">
        <Text>© 2023 Your Website. All rights reserved.</Text>
        <Link href="/terms" marginLeft="0.5rem" color="whiteAlpha.700">
          Terms of Service
        </Link>
        <Link href="/privacy" marginLeft="0.5rem" color="whiteAlpha.700">
          Privacy Policy
        </Link>
      </Box>
      {showScroll && (
        <IconButton
          icon={<FaArrowUp />}
          size="lg"
          position="fixed"
          bottom="2rem"
          right="2rem"
          backgroundColor="teal.500"
          color="white"
          borderRadius="full"
          boxSize="3rem"
          onClick={handleScrollToTop}
        />
      )}
    </Box>
  );
};

export default Footer;
