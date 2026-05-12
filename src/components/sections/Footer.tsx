import { styled } from '@mui/material/styles';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
import {
  BLACK,
  CREAM,
  WHITE,
  SKY_BLUE,
  PINK,
  INK,
  MUTED_BLUE,
  MUTED_LILAC
} from '../../styles/theme';

const DARK_GREY = '#2A2927';
const DARK_GREY_ALT = '#353331';
const DARK_LINE = 'rgba(231, 217, 200, 0.16)';
const DARK_TEXT = 'rgba(231, 217, 200, 0.72)';
const DARK_MUTED = 'rgba(231, 217, 200, 0.46)';

const FooterContainer = styled(Box)({
  backgroundColor: DARK_GREY,
  position: 'relative',
  overflow: 'hidden',
  color: CREAM,

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      `radial-gradient(circle at 82% 16%, rgba(91, 96, 172, 0.24), transparent 30%),
       radial-gradient(circle at 12% 88%, rgba(214, 166, 219, 0.16), transparent 28%),
       linear-gradient(180deg, ${DARK_GREY}, ${DARK_GREY_ALT})`,
    zIndex: 0
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.13,
    mixBlendMode: 'screen',
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(231,217,200,0.08) 0px, rgba(231,217,200,0.08) 1px, transparent 1px, transparent 4px)',
    zIndex: 1
  }
});

const TopStripe = styled(Box)({
  position: 'relative',
  zIndex: 3,
  height: '1px',
  backgroundColor: 'rgba(231, 217, 200, 0.32)'
});

const FooterMain = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(6),
  position: 'relative',
  zIndex: 2,

  [theme.breakpoints.up('lg')]: {
    maxWidth: '1400px'
  },

  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(5)
  }
}));

const BackgroundWord = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '8%',
  right: '-7%',
  zIndex: 0,
  pointerEvents: 'none',
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(10rem, 24vw, 27rem)',
  lineHeight: 0.8,
  letterSpacing: '-0.09em',
  color: 'rgba(231, 217, 200, 0.035)',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('md')]: {
    top: '4%',
    right: '-42%',
    fontSize: 'clamp(8rem, 44vw, 16rem)'
  }
}));

const BlueprintLines = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  opacity: 0.46,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '18%',
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
    bottom: '18%',
    width: 360,
    height: 360,
    border: `1px solid ${DARK_LINE}`,
    borderRadius: '50%',
    transform: 'rotate(-18deg)'
  }
});

const DotField = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '8%',
  top: '22%',
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

const NameBlock = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingBottom: theme.spacing(5),
  borderBottom: `1px solid rgba(231, 217, 200, 0.22)`,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 10,
    right: 0,
    width: 96,
    height: 96,
    backgroundColor: PINK,
    opacity: 0.22,
    pointerEvents: 'none'
  },

  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(4),

    '&::before': {
      width: 64,
      height: 64
    }
  }
}));

const FooterLabel = styled(Typography)(({ theme }) => ({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.72rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: DARK_MUTED,
  marginBottom: theme.spacing(2)
}));

const GiantName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(5rem, 14vw, 15rem)',
  fontWeight: 500,
  lineHeight: 0.76,
  letterSpacing: '-0.08em',
  color: CREAM,
  maxWidth: '1180px',

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(4rem, 22vw, 7rem)',
    lineHeight: 0.82
  }
}));

const GiantNameOutline = styled(GiantName)({
  color: 'transparent',
  WebkitTextStroke: `1px rgba(231, 217, 200, 0.64)`
});

const InfoRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  alignItems: 'end',
  gap: theme.spacing(5),
  marginTop: theme.spacing(5),

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    alignItems: 'start',
    gap: theme.spacing(4)
  }
}));

const FooterMeta = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: theme.spacing(3),
  maxWidth: 760,

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2)
  }
}));

const MetaBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.4),
  border: `1px solid rgba(231, 217, 200, 0.18)`,
  backgroundColor: 'rgba(231, 217, 200, 0.045)',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    opacity: 0.16,
    pointerEvents: 'none',
    backgroundImage:
      `linear-gradient(rgba(231,217,200,0.12) 1px, transparent 1px),
       linear-gradient(90deg, rgba(231,217,200,0.12) 1px, transparent 1px)`,
    backgroundSize: '28px 28px'
  }
}));

const MetaInner = styled(Box)({
  position: 'relative',
  zIndex: 2
});

const MetaLabel = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.62rem',
  letterSpacing: '0.13em',
  textTransform: 'uppercase',
  color: DARK_MUTED,
  marginBottom: '8px'
});

const MetaText = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  lineHeight: 1.6,
  letterSpacing: '0.045em',
  color: DARK_TEXT
});

const SocialRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  flexWrap: 'wrap',

  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start'
  }
}));

const EmailLink = styled(Typography)(({ theme }) => ({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  letterSpacing: '0.045em',

  '& a': {
    color: DARK_TEXT,
    textDecoration: 'none',
    transition: 'color 0.25s ease',

    '&:hover': {
      color: CREAM
    }
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem'
  }
}));

const StyledIconButton = styled(IconButton)({
  border: `1px solid rgba(231, 217, 200, 0.32)`,
  borderRadius: 0,
  padding: '11px',
  color: DARK_TEXT,
  backgroundColor: 'rgba(231, 217, 200, 0.04)',
  transition:
    'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease',

  '&:hover': {
    backgroundColor: SKY_BLUE,
    borderColor: SKY_BLUE,
    color: WHITE,
    transform: 'translateY(-2px)'
  }
});

const BottomRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: theme.spacing(5),
  paddingTop: theme.spacing(3),
  borderTop: `1px solid rgba(231, 217, 200, 0.14)`,
  flexWrap: 'wrap',
  gap: theme.spacing(2)
}));

const Copyright = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.64rem',
  color: 'rgba(231, 217, 200, 0.38)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase'
});

const MadeWith = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.64rem',
  color: 'rgba(231, 217, 200, 0.3)',
  letterSpacing: '0.08em'
});

const AccentLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 0,
  bottom: 0,
  width: '100%',
  height: 1,
  background:
    `linear-gradient(90deg, ${PINK} 0%, ${PINK} 24%, transparent 24%, transparent 30%, ${SKY_BLUE} 30%, ${SKY_BLUE} 58%, transparent 58%, transparent 64%, ${CREAM} 64%, ${CREAM} 100%)`,
  opacity: 0.72,
  zIndex: 3
}));

export const Footer = () => {
  return (
    <FooterContainer as="footer">
      <TopStripe />
      <BlueprintLines />
      <DotField />

      <FooterMain maxWidth="xl">
        <NameBlock>
          <FooterLabel>Portfolio — 2026</FooterLabel>
          <GiantName>Valeria</GiantName>
          <GiantNameOutline>Behrend</GiantNameOutline>
        </NameBlock>

        <InfoRow>
          <FooterMeta>
            <MetaBlock>
              <MetaInner>
                <MetaLabel>Practice</MetaLabel>
                <MetaText>
                  Software Engineering × Art Direction × Strategy
                </MetaText>
              </MetaInner>
            </MetaBlock>

            <MetaBlock>
              <MetaInner>
                <MetaLabel>Location</MetaLabel>
                <MetaText>
                  Buenos Aires — Germany — Worldwide
                </MetaText>
              </MetaInner>
            </MetaBlock>
          </FooterMeta>

          <SocialRow>
            <EmailLink>
              <a href="mailto:behrendvaleria@gmail.com">
                behrendvaleria@gmail.com
              </a>
            </EmailLink>

            <a
              href="https://www.linkedin.com/in/valeria-behrend-5673101b2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <StyledIconButton>
                <LinkedIn />
              </StyledIconButton>
            </a>
          </SocialRow>
        </InfoRow>

        <BottomRow>
          <Copyright>
            © {new Date().getFullYear()} Valeria Behrend. All rights reserved.
          </Copyright>

          <MadeWith>
            Senior Web Developer & Art Director
          </MadeWith>
        </BottomRow>
      </FooterMain>

      <AccentLine />
    </FooterContainer>
  );
};