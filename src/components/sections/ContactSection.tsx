import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem
} from '@mui/material';
import { Send } from '@mui/icons-material';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useContactForm } from '../../hooks/useContactForm';
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
import projectsBackground from '../../assets/projects-fondo.png';
import projectsBackgroundMobile from '../../assets/projects-fondo-mobile.png';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(16, 0),
  backgroundImage: `url(${projectsBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  overflow: 'hidden',
  color: BLACK,

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      `radial-gradient(circle at 82% 18%, ${MUTED_BLUE}, transparent 34%),
       radial-gradient(circle at 12% 86%, ${MUTED_LILAC}, transparent 28%),
       linear-gradient(180deg, rgba(231,217,200,0.16), rgba(231,217,200,0.03))`,
    zIndex: 0
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.1,
    mixBlendMode: 'multiply',
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(53,51,49,0.045) 0px, rgba(53,51,49,0.045) 1px, transparent 1px, transparent 4px)',
    zIndex: 1
  },

  [theme.breakpoints.down('md')]: {
    backgroundImage: `url(${projectsBackgroundMobile})`,
    backgroundPosition: 'center top',
    padding: theme.spacing(10, 0)
  }
}));

const ContactContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,

  [theme.breakpoints.up('lg')]: {
    maxWidth: '1400px'
  }
}));

const BackgroundWord = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '4%',
  right: '-3%',
  zIndex: 0,
  pointerEvents: 'none',
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(10rem, 23vw, 25rem)',
  lineHeight: 0.8,
  letterSpacing: '-0.09em',
  color: 'rgba(53, 51, 49, 0.05)',
  whiteSpace: 'nowrap',

  [theme.breakpoints.down('md')]: {
    top: '2%',
    right: '-42%',
    fontSize: 'clamp(8rem, 44vw, 16rem)'
  }
}));

const BlueprintLines = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  pointerEvents: 'none',
  opacity: 0.42,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '14%',
    left: '4%',
    width: 230,
    height: 130,
    borderTop: `1px solid rgba(91, 96, 172, 0.22)`,
    borderLeft: `1px solid rgba(91, 96, 172, 0.18)`,
    backgroundImage:
      `linear-gradient(rgba(91,96,172,0.12) 1px, transparent 1px),
       linear-gradient(90deg, rgba(91,96,172,0.12) 1px, transparent 1px)`,
    backgroundSize: '24px 24px'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    right: '7%',
    bottom: '8%',
    width: 380,
    height: 380,
    border: `1px solid rgba(91, 96, 172, 0.16)`,
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
  opacity: 0.38,
  backgroundImage: `radial-gradient(${PINK} 1.4px, transparent 1.4px)`,
  backgroundSize: '13px 13px',
  zIndex: 0,

  [theme.breakpoints.down('md')]: {
    right: '-24px',
    top: '18%'
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
  color: INK,
  marginBottom: '14px'
});

const HeaderTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(5.2rem, 12vw, 13rem)',
  fontWeight: 500,
  lineHeight: 0.78,
  letterSpacing: '-0.075em',
  color: INK,
  mixBlendMode: 'multiply',

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(4.2rem, 21vw, 7rem)',
    lineHeight: 0.84
  }
}));

const HeaderNote = styled(Typography)(({ theme }) => ({
  maxWidth: 380,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  lineHeight: 1.6,
  letterSpacing: '0.06em',
  color: INK,
  paddingBottom: theme.spacing(1.2),

  '&::before': {
    content: '""',
    display: 'block',
    width: 44,
    height: 1,
    backgroundColor: INK,
    marginBottom: 14
  },

  [theme.breakpoints.down('md')]: {
    maxWidth: 560
  }
}));

const TwoColumnLayout = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '0.92fr 1.08fr',
  gap: theme.spacing(7),
  alignItems: 'start',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(5)
  }
}));

const StatementSide = styled(Box)({
  position: 'relative'
});

const StatementPanel = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(5),
  border: `1px solid ${BORDER_INK}`,
  backgroundColor: PAPER_TRANSLUCENT,
  overflow: 'hidden',
  backdropFilter: 'blur(1px)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    opacity: 0.18,
    pointerEvents: 'none',
    backgroundImage:
      `linear-gradient(${MUTED_BLUE} 1px, transparent 1px),
       linear-gradient(90deg, ${MUTED_BLUE} 1px, transparent 1px)`,
    backgroundSize: '42px 42px'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: 220,
    height: 220,
    right: -80,
    bottom: -90,
    border: `1px solid rgba(91, 96, 172, 0.26)`,
    borderRadius: '50%',
    pointerEvents: 'none'
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3)
  }
}));

const StatementInner = styled(Box)({
  position: 'relative',
  zIndex: 2
});

const BigStatement = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(4rem, 8vw, 8.8rem)',
  fontWeight: 500,
  lineHeight: 0.78,
  letterSpacing: '-0.075em',
  color: INK,
  marginBottom: theme.spacing(4)
}));

const StatementAccent = styled('span')({
  color: SKY_BLUE,
  display: 'block'
});

const SupportingText = styled(Typography)(({ theme }) => ({
  maxWidth: 520,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.82rem',
  lineHeight: 1.78,
  letterSpacing: '0.035em',
  color: MUTED_INK,
  marginBottom: theme.spacing(4)
}));

const ContactBlock = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.4, 2.6),
  backgroundColor: 'rgba(53, 51, 49, 0.9)',
  border: `1px solid ${INK}`,
  marginBottom: theme.spacing(2.2)
}));

const ContactBlockLabel = styled(Typography)({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.64rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: CREAM,
  opacity: 0.72,
  marginBottom: '8px'
});

const ContactBlockValue = styled(Typography)(({ theme }) => ({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.82rem',
  lineHeight: 1.55,
  letterSpacing: '0.04em',
  color: CREAM,

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.72rem'
  }
}));

const LinkedInBlock = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.3),
  padding: theme.spacing(1.4, 2.6),
  backgroundColor: SKY_BLUE,
  border: `1px solid ${INK}`,
  color: WHITE,
  textDecoration: 'none',
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.72rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  transition:
    'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease',

  '&:hover': {
    transform: 'translateY(-2px)',
    backgroundColor: BLACK
  }
}));

const FormSide = styled(Box)({});

const FormContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'rgba(250, 250, 250, 0.72)',
  border: `1px solid ${BORDER_INK}`,
  boxShadow: 'none',
  padding: theme.spacing(5),
  overflow: 'hidden',
  backdropFilter: 'blur(2px)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    opacity: 0.22,
    pointerEvents: 'none',
    backgroundImage:
      `linear-gradient(${MUTED_BLUE} 1px, transparent 1px),
       linear-gradient(90deg, ${MUTED_BLUE} 1px, transparent 1px)`,
    backgroundSize: '44px 44px'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 30,
    right: 30,
    width: 92,
    height: 92,
    backgroundColor: PINK,
    opacity: 0.24,
    pointerEvents: 'none'
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3)
  }
}));

const FormInner = styled(Box)({
  position: 'relative',
  zIndex: 2
});

const FormTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(3.2rem, 5vw, 5.8rem)',
  fontWeight: 500,
  lineHeight: 0.85,
  letterSpacing: '-0.065em',
  color: INK,
  marginBottom: theme.spacing(4),

  '&::after': {
    content: '""',
    display: 'block',
    width: 72,
    height: 1,
    backgroundColor: INK,
    marginTop: theme.spacing(2)
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(231, 217, 200, 0.42)',
    fontSize: '0.86rem',
    fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
    letterSpacing: '0.035em',
    borderRadius: 0,
    color: INK,

    '& fieldset': {
      borderColor: BORDER_INK,
      borderWidth: 1
    },

    '&:hover fieldset': {
      borderColor: SKY_BLUE
    },

    '&.Mui-focused fieldset': {
      borderColor: SKY_BLUE,
      borderWidth: 1
    },

    '& textarea': {
      lineHeight: 1.7
    }
  },

  '& .MuiInputLabel-root': {
    fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
    fontSize: '0.68rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: MUTED_INK
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: SKY_BLUE
  },

  '& .MuiSelect-icon': {
    color: INK
  }
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  width: '100%',
  backgroundColor: BLACK,
  color: CREAM,
  border: `1px solid ${BLACK}`,
  borderRadius: 0,
  padding: theme.spacing(1.9),
  boxShadow: 'none',
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.76rem',
  letterSpacing: '0.12em',
  transition:
    'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease',

  '&:hover': {
    backgroundColor: SKY_BLUE,
    color: WHITE,
    transform: 'translateY(-2px)',
    boxShadow: 'none'
  },

  '&:disabled': {
    backgroundColor: 'rgba(53, 51, 49, 0.48)',
    color: CREAM,
    boxShadow: 'none'
  }
}));

const SuccessMessage = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2.4),
  backgroundColor: SKY_BLUE,
  color: WHITE,
  border: `1px solid ${BLACK}`,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  textAlign: 'center',
  letterSpacing: '0.06em',
  lineHeight: 1.55
}));

const ErrorMessage = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2.4),
  backgroundColor: 'rgba(53, 51, 49, 0.9)',
  color: CREAM,
  border: `1px solid ${INK}`,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  textAlign: 'center',
  letterSpacing: '0.06em',
  lineHeight: 1.55
}));

export const ContactSection = () => {
  const { t } = useTranslation();
  const projectTypes = t('contact.form.projectTypes', {
    returnObjects: true
  }) as string[];

  const { formData, isSubmitted, isSubmitting, errorMessage, handleChange, handleSubmit } =
    useContactForm();

  return (
    <ContactContainer component="section" id="contact">
      <BackgroundWord>{t('contact.backgroundWord')}</BackgroundWord>
      <BlueprintLines />
      <DotField />

      <ContactContent maxWidth="xl">
        <EditorialHeader>
          <Box>
            <HeaderLabel>{t('contact.headerLabel')}</HeaderLabel>
            <HeaderTitle>{t('contact.headerTitle')}</HeaderTitle>
          </Box>

          <HeaderNote>{t('contact.headerNote')}</HeaderNote>
        </EditorialHeader>

        <TwoColumnLayout>
          <StatementSide
            component={motion.div as any}
            initial={{ opacity: 0, x: -42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <StatementPanel>
              <StatementInner>
                <BigStatement>
                  {t('contact.statement.line1')}
                  <StatementAccent>{t('contact.statement.accent')}</StatementAccent>
                  {t('contact.statement.line3')}
                </BigStatement>

                <SupportingText>{t('contact.statement.supporting')}</SupportingText>

                <ContactBlock>
                  <ContactBlockLabel>{t('contact.labels.email')}</ContactBlockLabel>
                  <ContactBlockValue>
                    behrendvaleria@gmail.com
                  </ContactBlockValue>
                </ContactBlock>

                <Box sx={{ mt: 2 }}>
                  <LinkedInBlock
                    component="a"
                    href="https://www.linkedin.com/in/valeria-behrend-5673101b2/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>↗</span>
                    <span>{t('contact.labels.linkedInProfile')}</span>
                  </LinkedInBlock>
                </Box>
              </StatementInner>
            </StatementPanel>
          </StatementSide>

          <FormSide
            component={motion.div as any}
            initial={{ opacity: 0, x: 42 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <FormContainer>
              <FormInner>
                <FormTitle>{t('contact.form.title')}</FormTitle>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <StyledTextField
                        fullWidth
                        required
                        label={t('contact.form.name')}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <StyledTextField
                        fullWidth
                        required
                        label={t('contact.form.email')}
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <StyledTextField
                        fullWidth
                        required
                        select
                        label={t('contact.form.projectType')}
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                      >
                        {projectTypes.map((type) => (
                          <MenuItem key={type} value={type}>
                            {type}
                          </MenuItem>
                        ))}
                      </StyledTextField>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <StyledTextField
                        fullWidth
                        required
                        multiline
                        rows={5}
                        label={t('contact.form.message')}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Grid>
                  </Grid>

                  <SubmitButton
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    disabled={isSubmitted || isSubmitting}
                  >
                    {isSubmitted
                      ? t('contact.form.sent')
                      : isSubmitting
                        ? t('contact.form.sending')
                        : t('contact.form.send')}
                  </SubmitButton>

                  {isSubmitted && (
                    <SuccessMessage>
                      {t('contact.form.success')}
                    </SuccessMessage>
                  )}

                  {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                </form>
              </FormInner>
            </FormContainer>
          </FormSide>
        </TwoColumnLayout>
      </ContactContent>
    </ContactContainer>
  );
};