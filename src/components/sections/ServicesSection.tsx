import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'motion/react';
import { services } from '../../data/services';
import { ServiceItem } from '../../types';
import {
  BLACK,
  CREAM,
  WHITE,
  SKY_BLUE,
  PINK,
  INK,
  PAPER,
  MUTED_BLUE,
  MUTED_LILAC,
  MUTED_INK,
  BORDER_INK,
  PAPER_TRANSLUCENT
} from '../../styles/theme';

const DARK_GREY = '#2A2927';
const DARK_GREY_ALT = '#353331';
const DARK_LINE = 'rgba(231, 217, 200, 0.16)';
const DARK_TEXT = 'rgba(250, 250, 250, 0.78)';
const DARK_MUTED = 'rgba(250, 250, 250, 0.56)';

const serviceSchemes = [
  {
    bg: PAPER_TRANSLUCENT,
    accent: SKY_BLUE,
    accentSoft: MUTED_BLUE,
    text: BLACK
  },
  {
    bg: 'rgba(214, 166, 219, 0.78)',
    accent: CREAM,
    accentSoft: MUTED_LILAC,
    text: BLACK
  },
  {
    bg: 'rgba(231, 217, 200, 0.88)',
    accent: SKY_BLUE,
    accentSoft: 'rgba(91, 96, 172, 0.14)',
    text: BLACK
  }
];

const ServicesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(16, 0),
  backgroundColor: DARK_GREY,
  color: WHITE,
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      `radial-gradient(circle at 82% 16%, rgba(91, 96, 172, 0.28), transparent 30%),
       radial-gradient(circle at 12% 88%, rgba(214, 166, 219, 0.18), transparent 28%),
       linear-gradient(180deg, ${DARK_GREY}, ${DARK_GREY_ALT})`,
    zIndex: 0
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.14,
    mixBlendMode: 'screen',
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(231,217,200,0.08) 0px, rgba(231,217,200,0.08) 1px, transparent 1px, transparent 4px)',
    zIndex: 1
  },

  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10, 0)
  }
}));

const ServicesContent = styled(Container)(({ theme }) => ({
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
    fontSize: 'clamp(4.3rem, 22vw, 7rem)',
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
  top: '3%',
  right: '-4%',
  zIndex: 0,
  pointerEvents: 'none',
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(10rem, 22vw, 25rem)',
  lineHeight: 0.8,
  letterSpacing: '-0.09em',
  color: 'rgba(231, 217, 200, 0.035)',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('md')]: {
    top: '2%',
    right: '-30%',
    fontSize: 'clamp(8rem, 42vw, 16rem)'
  }
}));

const BlueprintLines = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  opacity: 0.48,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '13%',
    left: '4%',
    width: 230,
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
    width: 380,
    height: 380,
    border: `1px solid ${DARK_LINE}`,
    borderRadius: '50%',
    transform: 'rotate(-18deg)'
  }
});

const DotField = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '7%',
  top: '24%',
  width: 112,
  height: 112,
  opacity: 0.3,
  backgroundImage: `radial-gradient(${PINK} 1.4px, transparent 1.4px)`,
  backgroundSize: '13px 13px',
  zIndex: 0,

  [theme.breakpoints.down('md')]: {
    right: '-24px',
    top: '18%'
  }
}));

const ServicesGrid = styled(Grid)(({ theme }) => ({
  alignItems: 'stretch',

  [theme.breakpoints.up('lg')]: {
    '& > .MuiGrid-root:nth-of-type(2)': {
      marginTop: theme.spacing(7)
    },

    '& > .MuiGrid-root:nth-of-type(3)': {
      marginTop: theme.spacing(14)
    }
  }
}));

const ServiceCard = styled(Box, {
  shouldForwardProp: (prop) =>
    !['bgColor', 'textColor', 'accentColor', 'accentSoft'].includes(
      prop as string
    )
})<{
  bgColor: string;
  textColor: string;
  accentColor: string;
  accentSoft: string;
}>(({ bgColor, textColor, accentColor, accentSoft, theme }) => ({
  minHeight: 460,
  height: '100%',
  padding: theme.spacing(4.5),
  backgroundColor: bgColor,
  color: textColor,
  position: 'relative',
  overflow: 'hidden',
  border: `1px solid rgba(231, 217, 200, 0.42)`,
  borderRadius: 0,
  boxShadow: 'none',
  cursor: 'default',
  transition:
    'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.35s ease, border-color 0.35s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.18,
    backgroundImage:
      `linear-gradient(${accentSoft} 1px, transparent 1px),
       linear-gradient(90deg, ${accentSoft} 1px, transparent 1px)`,
    backgroundSize: '38px 38px',
    zIndex: 1
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    right: -74,
    bottom: -74,
    border: `1px solid ${accentColor}`,
    borderRadius: '50%',
    opacity: 0.32,
    zIndex: 1,
    pointerEvents: 'none'
  },

  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: CREAM,

    '& .service-index': {
      color: 'rgba(53, 51, 49, 0.18)'
    },

    '& .service-accent-block': {
      transform: 'translate(8px, -8px)'
    }
  },

  [theme.breakpoints.down('md')]: {
    minHeight: 'auto',
    padding: theme.spacing(3.5)
  }
}));

const CardNumber = styled(Typography)({
  position: 'absolute',
  top: '-8px',
  right: '12px',
  zIndex: 1,
  pointerEvents: 'none',
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(7rem, 13vw, 11rem)',
  lineHeight: 0.8,
  letterSpacing: '-0.08em',
  color: 'rgba(53, 51, 49, 0.1)',
  transition: 'color 0.35s ease'
});

const AccentBlock = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'accentColor'
})<{ accentColor: string }>(({ accentColor }) => ({
  position: 'absolute',
  top: 28,
  right: 28,
  width: 82,
  height: 82,
  backgroundColor: accentColor,
  opacity: 0.24,
  zIndex: 1,
  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
}));

const CardInner = styled(Box)({
  position: 'relative',
  zIndex: 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
});

const ServiceLabel = styled(Typography)(({ theme }) => ({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.68rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: MUTED_INK,
  marginBottom: theme.spacing(5),

  '&::after': {
    content: '""',
    display: 'block',
    width: 36,
    height: 1,
    backgroundColor: INK,
    marginTop: theme.spacing(1.4)
  }
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(2.4rem, 3.9vw, 4.6rem)',
  fontWeight: 500,
  lineHeight: 0.9,
  letterSpacing: '-0.065em',
  color: INK,
  maxWidth: 'calc(100% - 160px)',
  marginBottom: theme.spacing(3),

  [theme.breakpoints.down('md')]: {
    maxWidth: 'calc(100% - 116px)'
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(2.2rem, 11vw, 3.6rem)',
    maxWidth: '100%'
  }
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 470,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  lineHeight: 1.75,
  letterSpacing: '0.035em',
  color: MUTED_INK,
  marginBottom: theme.spacing(4)
}));

const TechPills = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginTop: 'auto'
}));

const TechPill = styled(Box)({
  padding: '5px 12px',
  border: `1px solid ${BORDER_INK}`,
  color: INK,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.64rem',
  letterSpacing: '0.09em',
  textTransform: 'uppercase',
  backgroundColor: 'rgba(231, 217, 200, 0.32)'
});

const WireframeMini = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(4.5),
  bottom: theme.spacing(4.5),
  width: 96,
  height: 58,
  border: `1px solid rgba(91, 96, 172, 0.22)`,
  zIndex: 1,
  pointerEvents: 'none',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 12,
    left: 10,
    right: 10,
    height: 1,
    backgroundColor: 'rgba(91, 96, 172, 0.18)',
    boxShadow:
      '0 12px 0 rgba(91, 96, 172, 0.14), 0 24px 0 rgba(91, 96, 172, 0.12)'
  },

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

const ServiceCardComponent = ({ service, index }: ServiceCardProps) => {
  const scheme = serviceSchemes[index % serviceSchemes.length];

  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.75,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{ height: '100%' }}
      >
        <ServiceCard
          bgColor={scheme.bg}
          textColor={scheme.text}
          accentColor={scheme.accent}
          accentSoft={scheme.accentSoft}
        >
          <CardNumber className="service-index">
            {String(index + 1).padStart(2, '0')}
          </CardNumber>

          <AccentBlock
            className="service-accent-block"
            accentColor={scheme.accent}
          />

          <WireframeMini />

          <CardInner>
            <ServiceLabel>
              Service {String(index + 1).padStart(2, '0')}
            </ServiceLabel>

            <ServiceTitle>{service.title}</ServiceTitle>

            <ServiceDescription>{service.description}</ServiceDescription>

            <TechPills>
              {(service.technologies ?? []).map((tech, i) => (
                <TechPill key={i}>{tech}</TechPill>
              ))}
            </TechPills>
          </CardInner>
        </ServiceCard>
      </motion.div>
    </Grid>
  );
};

export const ServicesSection = () => {
  return (
    <ServicesContainer as="section" id="services">
      <BackgroundWord>Services</BackgroundWord>
      <BlueprintLines />
      <DotField />

      <ServicesContent maxWidth="xl">
        <EditorialHeader>
          <Box>
            <HeaderLabel>§ 02 — What I Do</HeaderLabel>
            <HeaderTitle>Services</HeaderTitle>
          </Box>

          <HeaderNote>
            Strategic design, scalable interfaces and technical direction for
            digital products with a strong visual point of view.
          </HeaderNote>
        </EditorialHeader>

        <ServicesGrid container spacing={{ xs: 3, md: 4 }}>
          {services.map((service, index) => (
            <ServiceCardComponent
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </ServicesGrid>
      </ServicesContent>
    </ServicesContainer>
  );
};