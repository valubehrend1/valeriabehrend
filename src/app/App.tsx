import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../styles/theme';
import { PageShell } from '../components/layout/PageShell';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/sections/Footer';
import { SkillsStrip } from '../components/ui/SkillsStrip';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PageShell>
        <HeroSection />
        <SkillsStrip />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </PageShell>
    </ThemeProvider>
  );
}