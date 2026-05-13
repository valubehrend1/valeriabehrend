import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { ProjectItem } from '../../types';
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

const categoryColors: Record<string, { bg: string; text: string }> = {
  'AI Chatbot Platform': { bg: SKY_BLUE, text: WHITE },
  'AI Research Assistant': { bg: CREAM, text: BLACK },
  'Carbon Saving Challenge App': { bg: PINK, text: BLACK },
  'Enterprise Webcast Platform': { bg: BLACK, text: WHITE },
  'Curation & Research Platform': { bg: SKY_BLUE, text: WHITE },
  'Plataforma de Chatbots con IA': { bg: SKY_BLUE, text: WHITE },
  'Asistente de Investigacion con IA': { bg: CREAM, text: BLACK },
  'App de Desafios para Ahorro de Carbono': { bg: PINK, text: BLACK },
  'Plataforma Enterprise de Webcast': { bg: BLACK, text: WHITE },
  'Plataforma de Curaduria e Investigacion': { bg: SKY_BLUE, text: WHITE }
};

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(16, 0),
  backgroundImage: `url(${projectsBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      `linear-gradient(180deg, rgba(231,217,200,0.12), rgba(231,217,200,0.02)), radial-gradient(circle at 72% 18%, ${MUTED_BLUE}, transparent 34%)`,
    zIndex: 0
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.04,
    mixBlendMode: 'multiply',
    backgroundImage:
      'repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 4px)',
    zIndex: 1
  },

  [theme.breakpoints.down('sm')]: {
    backgroundImage: `url(${projectsBackgroundMobile})`,
    backgroundPosition: 'center top',
    padding: theme.spacing(10, 0)
  }
}));

const ProjectsContent = styled(Container)(({ theme }) => ({
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
  textTransform: 'none',
  mixBlendMode: 'multiply',

  [theme.breakpoints.down('sm')]: {
    fontSize: 'clamp(4.4rem, 22vw, 7rem)',
    lineHeight: 0.84
  }
}));

const HeaderNote = styled(Typography)(({ theme }) => ({
  maxWidth: 340,
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

const ProjectCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$featured'
})<{ $featured?: boolean }>(({ theme, $featured }) => ({
  height: '100%',
  minHeight: $featured ? 430 : 520,
  display: 'grid',
  gridTemplateColumns: $featured ? '1.05fr 0.95fr' : '1fr',
  backgroundColor: PAPER_TRANSLUCENT,
  border: `1px solid ${BORDER_INK}`,
  borderRadius: 0,
  position: 'relative',
  overflow: 'hidden',
  boxShadow: 'none',
  cursor: 'pointer',
  backdropFilter: 'blur(1px)',
  transition:
    'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.35s ease, border-color 0.35s ease',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    opacity: 0.2,
    backgroundImage:
      `linear-gradient(${MUTED_BLUE} 1px, transparent 1px), linear-gradient(90deg, ${MUTED_BLUE} 1px, transparent 1px)`,
    backgroundSize: '44px 44px',
    zIndex: 1
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: $featured ? '260px' : '180px',
    height: $featured ? '260px' : '180px',
    right: $featured ? '-80px' : '-70px',
    bottom: $featured ? '-90px' : '-70px',
    border: `1px solid rgba(91, 96, 172, 0.28)`,
    borderRadius: '50%',
    zIndex: 1,
    pointerEvents: 'none'
  },

  '&:hover': {
    transform: 'translateY(-4px)',
    backgroundColor: 'rgba(231, 217, 200, 0.92)',
    borderColor: INK,

    '& .project-img': {
      transform: 'scale(1.045)'
    },

    '& .project-image-overlay': {
      opacity: 0.72
    }
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    minHeight: 'auto'
  }
}));

const ProjectImageArea = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$featured'
})<{ $featured?: boolean }>(({ theme, $featured }) => ({
  position: 'relative',
  minHeight: $featured ? 430 : 260,
  overflow: 'hidden',
  borderRight: $featured ? `1px solid ${BORDER_INK}` : 'none',
  borderBottom: !$featured ? `1px solid ${BORDER_INK}` : 'none',
  backgroundColor: MUTED_LILAC,

  [theme.breakpoints.down('md')]: {
    minHeight: 280,
    borderRight: 'none',
    borderBottom: `1px solid ${BORDER_INK}`
  },

  [theme.breakpoints.down('sm')]: {
    minHeight: 230
  }
}));

const ProjectImg = styled('img', {
  shouldForwardProp: (prop) => prop !== '$position'
})<{ $position?: string }>(({ $position }) => ({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: $position || 'center',
  filter: 'grayscale(1) contrast(0.92) brightness(1.04)',
  mixBlendMode: 'multiply',
  opacity: 0.82,
  zIndex: 2,
  transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
}));

const ImageTint = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'catBg'
})<{ catBg: string }>(({ catBg }) => ({
  position: 'absolute',
  inset: 0,
  background:
    `linear-gradient(135deg, ${catBg} 0%, transparent 45%), linear-gradient(180deg, rgba(231,217,200,0.15), rgba(53,51,49,0.1))`,
  opacity: 0.42,
  mixBlendMode: 'multiply',
  zIndex: 3
}));

const ImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  opacity: 0,
  transition: 'opacity 0.35s ease',
  backgroundColor: BLUE,
  mixBlendMode: 'multiply',
  zIndex: 4
});

const CodeWindow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(3),
  width: 'min(72%, 360px)',
  backgroundColor: 'rgba(53, 51, 49, 0.84)',
  color: PAPER,
  zIndex: 6,
  padding: theme.spacing(2.2, 2.4),
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.7rem',
  lineHeight: 1.65,
  letterSpacing: '0.04em',

  '&::before': {
    content: '"●  ●  ●"',
    display: 'block',
    color: 'rgba(231,217,200,0.72)',
    letterSpacing: '0.45em',
    marginBottom: theme.spacing(1.2)
  },

  [theme.breakpoints.down('sm')]: {
    width: 'calc(100% - 40px)',
    left: 20,
    bottom: 20,
    fontSize: '0.62rem'
  }
}));

const ProjectNumber = styled(Typography)({
  position: 'absolute',
  right: 18,
  top: 14,
  zIndex: 7,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.75rem',
  letterSpacing: '0.14em',
  color: MUTED_INK
});

const ProjectBody = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(4.5),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 260,

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3)
  }
}));

const CategoryLabel = styled(Box, {
  shouldForwardProp: (prop) => !['catBg', 'catText'].includes(prop as string)
})<{ catBg: string; catText: string }>(({ catBg, catText }) => ({
  alignSelf: 'flex-start',
  backgroundColor: catBg,
  color: catText,
  padding: '5px 12px',
  border: `1px solid ${INK}`,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.62rem',
  letterSpacing: '0.11em',
  textTransform: 'uppercase',
  marginBottom: 24
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
  fontSize: 'clamp(3.4rem, 6.2vw, 7.5rem)',
  fontWeight: 500,
  lineHeight: 0.82,
  letterSpacing: '-0.065em',
  color: INK,
  marginBottom: theme.spacing(2.4),

  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(3.2rem, 13vw, 5.6rem)'
  }
}));

const ProjectRole = styled(Typography)(({ theme }) => ({
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.72rem',
  letterSpacing: '0.14em',
  lineHeight: 1.5,
  color: INK,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(2.5)
}));

const ProjectDesc = styled(Typography)(({ theme }) => ({
  maxWidth: 560,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.78rem',
  lineHeight: 1.75,
  letterSpacing: '0.035em',
  color: MUTED_INK,
  marginBottom: theme.spacing(3.5)
}));

const TechRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(3.5)
}));

const TechBadge = styled(Box)({
  padding: '5px 12px',
  border: `1px solid ${BORDER_INK}`,
  fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
  fontSize: '0.64rem',
  letterSpacing: '0.09em',
  textTransform: 'uppercase',
  color: INK,
  backgroundColor: 'rgba(231,217,200,0.28)'
});

const WireframeMark = styled(Box)({
  position: 'absolute',
  right: 28,
  bottom: 26,
  width: 96,
  height: 64,
  border: '1px solid rgba(231,217,200,0.64)',
  zIndex: 6,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 13,
    left: 12,
    right: 12,
    height: 1,
    backgroundColor: 'rgba(231,217,200,0.58)',
    boxShadow:
      '0 12px 0 rgba(231,217,200,0.45), 0 24px 0 rgba(231,217,200,0.35)'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: -18,
    right: -18,
    width: 38,
    height: 38,
    border: '1px solid rgba(231,217,200,0.45)'
  }
});

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCardComponent = ({ project, index }: ProjectCardProps) => {
  const { t } = useTranslation();
  const cat = project.category || 'Web Development';
  const scheme = categoryColors[cat] || { bg: SKY_BLUE, text: WHITE };
  const featured = index === 0;

  return (
    <Grid size={{ xs: 12, md: featured ? 12 : 6 }}>
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.75,
          delay: (index % 2) * 0.12,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{ height: '100%' }}
      >
        <ProjectCard $featured={featured}>
          <ProjectImageArea $featured={featured}>
            <ProjectNumber>{String(index + 1).padStart(2, '0')}</ProjectNumber>

            <ProjectImg
              className="project-img"
              src={project.imageUrl}
              alt={project.title}
              $position={project.imagePosition}
            />

            <ImageTint catBg={scheme.bg} />
            <ImageOverlay className="project-image-overlay" />

            <CodeWindow>
              <Box component="span" sx={{ opacity: 0.8 }}>
                const project = &#123;
                <br />
                &nbsp;&nbsp;{t('projects.codeWindow.roleKey')}: &apos;{project.role}&apos;,
                <br />
                &nbsp;&nbsp;{t('projects.codeWindow.impactKey')}: &apos;{t('projects.codeWindow.impactValue')}&apos;
                <br />
                &#125;
              </Box>
            </CodeWindow>

            <WireframeMark />
          </ProjectImageArea>

          <ProjectBody>
            <Box>
              {project.category && (
                <CategoryLabel catBg={scheme.bg} catText={scheme.text}>
                  {project.category}
                </CategoryLabel>
              )}

              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectRole>{project.role}</ProjectRole>
              <ProjectDesc>{project.description}</ProjectDesc>

              <TechRow>
                {project.technologies.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechRow>
            </Box>
          </ProjectBody>
        </ProjectCard>
      </motion.div>
    </Grid>
  );
};

export const ProjectsSection = () => {
  const { t } = useTranslation();
  const localizedProjects = t('projects.items', {
    returnObjects: true
  }) as Array<Pick<ProjectItem, 'id' | 'title' | 'description' | 'role' | 'technologies' | 'category'>>;

  const mergedProjects = projects.map((project) => {
    const localized = localizedProjects.find((item) => item.id === project.id);
    return localized
      ? {
          ...project,
          title: localized.title,
          description: localized.description,
          role: localized.role,
          technologies: localized.technologies,
          category: localized.category
        }
      : project;
  });

  return (
    <ProjectsContainer as="section" id="projects">
      <ProjectsContent maxWidth="xl">
        <EditorialHeader>
          <Box>
            <HeaderLabel>{t('projects.headerLabel')}</HeaderLabel>
            <HeaderTitle>{t('projects.headerTitle')}</HeaderTitle>
          </Box>

          <HeaderNote>{t('projects.headerNote')}</HeaderNote>
        </EditorialHeader>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {mergedProjects.map((project, index) => (
            <ProjectCardComponent
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </Grid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};