import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { BLACK, SKY_BLUE, LIME } from '../../styles/theme';

const StripOuter = styled(Box)({
  backgroundColor: SKY_BLUE,
  marginBottom: 0,
  overflow: 'hidden',
  position: 'relative',
  padding: '10px 0',
  userSelect: 'none',
  '& .track': {
    display: 'flex',
    gap: '0',
    whiteSpace: 'nowrap',
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
});

const SkillItem = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0'
});

const SkillText = styled(Typography)({
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.85rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: '#FAFAFA',
  padding: '0 20px',
  whiteSpace: 'nowrap'
});

const Separator = styled(Box)({
  width: '6px',
  height: '6px',
  backgroundColor: LIME,
  borderRadius: '50%',
  flexShrink: 0,
  marginTop: '1px'
});

export const SkillsStrip = () => {
  const { t } = useTranslation();
  const skills = t('skillsStrip.items', { returnObjects: true }) as string[];

  return (
    <StripOuter>
      <Box className="track">
        {skills.map((skill, i) => (
          <SkillItem key={i}>
            <SkillText>{skill}</SkillText>
            <Separator />
          </SkillItem>
        ))}
      </Box>
    </StripOuter>
  );
};