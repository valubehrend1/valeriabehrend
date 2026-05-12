import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { motion } from 'motion/react';
import heroImage from '../../assets/hero.png';
import heroMobileImage from '../../assets/hero-mobile.png';

const HeroContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden'
});

const HeroInner = styled(Box)({
  position: 'relative',
  zIndex: 1,
  width: '100%'
});

const HeroPicture = styled('picture')({
  display: 'block',
  width: '100%'
});

const Portrait = styled('img')({
  display: 'block',
  width: '100%',
  maxWidth: 'none',
  borderRadius: 0,
  objectFit: 'cover',
});

export const HeroSection = () => {
  return (
    <HeroContainer as="section" className="hero-section">
      <HeroInner>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroPicture>
            <source media="(max-width: 900px)" srcSet={heroMobileImage} />
            <Portrait src={heroImage} alt="Hero" />
          </HeroPicture>
        </motion.div>
      </HeroInner>
    </HeroContainer>
  );
};