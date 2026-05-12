import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { BLACK, PINK, YELLOW } from '../../styles/theme';

const TitleContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(6)
  }
}));

const LabelTag = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'dark'
})<{ dark?: boolean }>(({ dark }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)',
  marginBottom: '12px',
  '&::before': {
    content: '""',
    display: 'inline-block',
    width: '24px',
    height: '3px',
    backgroundColor: PINK,
    borderRadius: '2px',
    flexShrink: 0
  }
}));

const TitleLine = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'dark'
})<{ dark?: boolean }>(({ dark }) => ({
  position: 'relative',
  zIndex: 2,
  color: dark ? '#FAFAFA' : BLACK,
  display: 'block'
}));

const YellowAccent = styled(Box)({
  display: 'block',
  width: '80px',
  height: '6px',
  backgroundColor: YELLOW,
  borderRadius: '3px',
  marginTop: '10px'
});

const RedAccentBar = styled(Box)({
  display: 'block',
  width: '60px',
  height: '6px',
  backgroundColor: PINK,
  borderRadius: '3px',
  marginTop: '10px'
});

interface SectionTitleProps {
  children: React.ReactNode;
  label?: string;
  dark?: boolean;
  className?: string;
  accent?: 'yellow' | 'red' | 'none';
}

export const SectionTitle = ({
  children,
  label,
  dark = false,
  className,
  accent = 'red'
}: SectionTitleProps) => {
  return (
    <TitleContainer className={className}>
      {label && <LabelTag dark={dark}>{label}</LabelTag>}
      <TitleLine variant="h2" dark={dark} className="section-title-text">
        {children}
      </TitleLine>
      {accent === 'yellow' && <YellowAccent />}
      {accent === 'red' && <RedAccentBar />}
    </TitleContainer>
  );
};
