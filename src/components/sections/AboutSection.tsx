import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {
  BLACK,
  CREAM,
  WHITE,
  SKY_BLUE,
  PINK,
  PAPER,
  INK,
  BLUE,
  LILAC,
  MUTED_LILAC,
  MUTED_BLUE,
  MUTED_INK,
  BORDER_INK,
  PAPER_TRANSLUCENT
} from '../../styles/theme';
import aboutMeImage from '../../assets/about-me-fondo.png';
import aboutMeMobileImage from '../../assets/about-me-fondo-mobile.png';
import valeriaImage from '../../assets/valeria.png';

const DARK_TEXT = 'rgba(231, 217, 200, 0.78)';
const DARK_MUTED = 'rgba(231, 217, 200, 0.58)';
const DARK_LINE = 'rgba(231, 217, 200, 0.22)';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(13, 0, 16),
  backgroundImage: `url(${aboutMeImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  overflow: 'hidden',
  color: CREAM,

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      `radial-gradient(circle at 78% 18%, rgba(91,96,172,0.18), transparent 34%),
       radial-gradient(circle at 8% 82%, rgba(214,166,219,0.14), transparent 28%)`,
    zIndex: 0
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.12,
    mixBlendMode: 'screen',
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(231,217,200,0.08) 0px, rgba(231,217,200,0.08) 1px, transparent 1px, transparent 4px)',
    zIndex: 1
  },

  [theme.breakpoints.down('md')]: {
    backgroundImage: `url(${aboutMeMobileImage})`,
    backgroundPosition: 'center top',
    padding: theme.spacing(8, 0, 10)
  }
}));

const AboutContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,

  [theme.breakpoints.up('lg')]: {
    maxWidth: '1400px'
  }
}));

const EditorialHeader = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'end',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(8),

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(5)
  }
}));

const HeaderLabel = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  letterSpacing: '0.12em',
  color: DARK_MUTED,
  marginBottom: '14px'
});

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(5.2rem, 12vw, 13rem)',
  fontWeight: 500,
  lineHeight: 0.78,
  letterSpacing: '-0.075em',
  color: CREAM,

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(4.4rem, 22vw, 7rem)',
    lineHeight: 0.84
  }
}));

const HeaderNote = styled(Typography)(({ theme }) => ({
  maxWidth: 360,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  lineHeight: 1.6,
  letterSpacing: '0.06em',
  color: DARK_TEXT,
  paddingBottom: theme.spacing(1.2),

  '&::before': {
    content: '""',
    display: 'block',
    width: 44,
    height: 1,
    backgroundColor: CREAM,
    marginBottom: 14
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: 560
  }
}));

const BackgroundWord = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '2%',
  right: '-5%',
  zIndex: 0,
  pointerEvents: 'none',
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(10rem, 22vw, 25rem)',
  lineHeight: 0.8,
  letterSpacing: '-0.09em',
  color: 'rgba(231, 217, 200, 0.035)',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('md')]: {
    top: '1%',
    right: '-36%',
    fontSize: 'clamp(8rem, 42vw, 16rem)'
  }
}));

const BlueprintLines = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  opacity: 0.44,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '16%',
    left: '5%',
    width: 220,
    height: 130,
    borderTop: `1px solid ${DARK_LINE}`,
    borderLeft: `1px solid ${DARK_LINE}`,
    backgroundImage:
      `linear-gradient(${DARK_LINE} 1px, transparent 1px),
       linear-gradient(90deg, ${DARK_LINE} 1px, transparent 1px)`,
    backgroundSize: '24px 24px'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: '8%',
    bottom: '12%',
    width: 360,
    height: 360,
    border: `1px solid ${DARK_LINE}`,
    borderRadius: '50%',
    transform: 'rotate(-18deg)'
  }
});

const DotField = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '7%',
  top: '28%',
  width: 112,
  height: 112,
  opacity: 0.28,
  backgroundImage: `radial-gradient(${PINK} 1.4px, transparent 1.4px)`,
  backgroundSize: '13px 13px',
  zIndex: 0,

  [theme.breakpoints.down('md')]: {
    right: '-24px',
    top: '18%'
  }
}));

const ImageColumn = styled(Box)(({ theme }) => ({
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(5)
  }
}));

const ImageFrame = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '92%',
  marginLeft: 'auto',
  marginRight: 'auto',
  height: '520px',

  [theme.breakpoints.down('md')]: {
    height: '420px',
    width: '88%'
  },

  [theme.breakpoints.down('sm')]: {
    height: '340px',
    width: '96%'
  }
}));

const ImageOffset = styled(Box)({
  position: 'absolute',
  top: '18px',
  left: '18px',
  right: '-18px',
  bottom: '-18px',
  border: `1px solid rgba(231, 217, 200, 0.45)`,
  zIndex: 0,
  pointerEvents: 'none'
});

const ImagePlaceholder = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundColor: CREAM,
  border: `1px solid rgba(231, 217, 200, 0.54)`,
  overflow: 'hidden'
});

const ProfilePhoto = styled('img')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center top',
  filter: 'grayscale(1) contrast(0.96) brightness(1.05)',
  mixBlendMode: 'luminosity',
  zIndex: 1
});

const PhotoTint = styled(Box)({
  position: 'absolute',
  inset: 0,
  background:
    `linear-gradient(135deg, rgba(91,96,172,0.48), transparent 48%),
     linear-gradient(180deg, transparent 42%, rgba(53,51,49,0.78) 100%)`,
  mixBlendMode: 'multiply',
  zIndex: 2,
  pointerEvents: 'none'
});

const PhotoGrid = styled(Box)({
  position: 'absolute',
  inset: 0,
  opacity: 0.16,
  backgroundImage:
    `linear-gradient(rgba(231,217,200,0.35) 1px, transparent 1px),
     linear-gradient(90deg, rgba(231,217,200,0.35) 1px, transparent 1px)`,
  backgroundSize: '36px 36px',
  zIndex: 3,
  pointerEvents: 'none'
});

const PhotoAccent = styled(Box)({
  position: 'absolute',
  top: 24,
  right: 24,
  width: 92,
  height: 92,
  backgroundColor: PINK,
  opacity: 0.34,
  zIndex: 4
});

const ImageBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: CREAM,
  color: BLACK,
  padding: theme.spacing(1.6, 2.4),
  border: `1px solid ${BLACK}`,
  zIndex: 10,
  transform: 'translateY(50%)'
}));

const BadgeText = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.68rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: BLACK,
  lineHeight: 1.45
});

const StatsStrip = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  marginTop: theme.spacing(6),
  border: `1px solid rgba(231, 217, 200, 0.38)`,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginTop: theme.spacing(5)
  }
}));

const StatBlock = styled(Box, {
  shouldForwardProp: (prop) => !['bgColor', 'textColor'].includes(prop as string)
})<{ bgColor?: string; textColor?: string }>(
  ({ bgColor = 'rgba(231,217,200,0.08)', textColor = CREAM, theme }) => ({
    minHeight: 104,
    padding: theme.spacing(2),
    backgroundColor: bgColor,
    color: textColor,
    borderRight: `1px solid rgba(231, 217, 200, 0.28)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '&:last-child': {
      borderRight: 'none'
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: 92,
      borderBottom: `1px solid rgba(231, 217, 200, 0.28)`,

      '&:nth-of-type(2)': {
        borderRight: 'none'
      },

      '&:nth-of-type(3), &:nth-of-type(4)': {
        borderBottom: 'none'
      }
    }
  })
);

const StatNumber = styled(Typography)({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(2.6rem, 4vw, 4.2rem)',
  fontWeight: 500,
  lineHeight: 0.8,
  letterSpacing: '-0.065em'
});

const StatLabel = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.62rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  marginTop: '12px',
  opacity: 0.82
});

const TextPanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(5),
  border: `1px solid rgba(231, 217, 200, 0.32)`,
  backgroundColor: 'rgba(53, 51, 49, 0.32)',
  backdropFilter: 'blur(1px)',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    opacity: 0.18,
    backgroundImage:
      `linear-gradient(rgba(231,217,200,0.18) 1px, transparent 1px),
       linear-gradient(90deg, rgba(231,217,200,0.18) 1px, transparent 1px)`,
    backgroundSize: '42px 42px',
    pointerEvents: 'none'
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3)
  }
}));

const TextContent = styled(Box)({
  position: 'relative',
  zIndex: 2
});

const LocationTag = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.68rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: CREAM,
  marginBottom: theme.spacing(3),

  '&::before': {
    content: '"●"',
    color: PINK,
    fontSize: '0.58rem'
  }
}));

const IntroLine = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(2.8rem, 5vw, 5.8rem)',
  fontWeight: 500,
  lineHeight: 0.9,
  letterSpacing: '-0.06em',
  color: CREAM,
  marginBottom: theme.spacing(4)
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  maxWidth: 760,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.82rem',
  lineHeight: 1.78,
  letterSpacing: '0.035em',
  color: DARK_TEXT,
  marginBottom: theme.spacing(2.8),

  '&:last-child': {
    marginBottom: 0
  }
}));

const PullQuote = styled(Box)(({ theme }) => ({
  position: 'relative',
  margin: theme.spacing(4.5, 0),
  padding: theme.spacing(3.2, 3.4),
  border: `1px solid rgba(231, 217, 200, 0.34)`,
  backgroundColor: 'rgba(91, 96, 172, 0.34)',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: -12,
    left: 24,
    width: 86,
    height: 24,
    backgroundColor: PINK,
    opacity: 0.72,
    zIndex: -1
  }
}));

const QuoteText = styled(Typography)({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(1.9rem, 3vw, 3.4rem)',
  fontWeight: 500,
  lineHeight: 0.98,
  letterSpacing: '-0.055em',
  color: CREAM
});

const SkillTags = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: theme.spacing(4)
}));

const SkillTag = styled(Box)({
  padding: '6px 12px',
  border: `1px solid rgba(231, 217, 200, 0.36)`,
  color: CREAM,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.64rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  backgroundColor: 'rgba(231, 217, 200, 0.06)'
});

export const AboutSection = () => {
  const { t } = useTranslation();
  const aboutSkills = t('about.skills', { returnObjects: true }) as string[];

  return (
    <AboutContainer as="section" id="about">
      <BackgroundWord>{t('about.backgroundWord')}</BackgroundWord>
      <BlueprintLines />
      <DotField />

      <AboutContent maxWidth="xl">
        <EditorialHeader>
          <Box>
            <HeaderLabel>{t('about.headerLabel')}</HeaderLabel>
            <HeaderTitle>{t('about.headerTitle')}</HeaderTitle>
          </Box>

          <HeaderNote>{t('about.headerNote')}</HeaderNote>
        </EditorialHeader>

        <Grid container spacing={{ xs: 6, md: 7 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -42 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <ImageColumn>
                <ImageFrame>
                  <ImageOffset />

                  <ImagePlaceholder>
                    <ProfilePhoto
                      src={valeriaImage}
                      alt="Valeria Behrend"
                    />
                    <PhotoTint />
                    <PhotoGrid />
                    <PhotoAccent />
                  </ImagePlaceholder>

                  <ImageBadge>
                    <BadgeText>{t('about.badgeLine1')}</BadgeText>
                    <BadgeText>{t('about.badgeLine2')}</BadgeText>
                  </ImageBadge>
                </ImageFrame>

                <StatsStrip>
                  <StatBlock>
                    <StatNumber>5+</StatNumber>
                    <StatLabel>{t('about.stats.yearsExp')}</StatLabel>
                  </StatBlock>

                  <StatBlock bgColor="rgba(91,96,172,0.32)">
                    <StatNumber>DE</StatNumber>
                    <StatLabel>{t('about.stats.germany')}</StatLabel>
                  </StatBlock>

                  <StatBlock bgColor="rgba(214,166,219,0.26)">
                    <StatNumber>AR</StatNumber>
                    <StatLabel>{t('about.stats.argentina')}</StatLabel>
                  </StatBlock>

                  <StatBlock>
                    <StatNumber>Full</StatNumber>
                    <StatLabel>{t('about.stats.stack')}</StatLabel>
                  </StatBlock>
                </StatsStrip>
              </ImageColumn>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 42 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <TextPanel>
                <TextContent>
                  <LocationTag>{t('about.locationTag')}</LocationTag>

                  <IntroLine>{t('about.introLine')}</IntroLine>

                  <Paragraph>{t('about.paragraph1')}</Paragraph>

                  <Paragraph>{t('about.paragraph2')}</Paragraph>

                  <PullQuote>
                    <QuoteText>{t('about.quote')}</QuoteText>
                  </PullQuote>

                  <Paragraph>{t('about.paragraph3')}</Paragraph>

                  <Paragraph>{t('about.paragraph4')}</Paragraph>

                  <Paragraph sx={{ color: CREAM }}>{t('about.paragraph5')}</Paragraph>

                  <SkillTags>
                    {aboutSkills.map((skill) => (
                      <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                  </SkillTags>
                </TextContent>
              </TextPanel>
            </motion.div>
          </Grid>
        </Grid>
      </AboutContent>
    </AboutContainer>
  );
};