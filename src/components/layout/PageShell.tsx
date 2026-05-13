import { styled } from '@mui/material/styles';
import { motion } from 'motion/react';
import { Box, Container, IconButton, Drawer } from '@mui/material';
import { Close, KeyboardArrowUp, Menu } from '@mui/icons-material';
import { ReactNode, useEffect, useState } from 'react';
import { BLACK, PINK, YELLOW, SKY_BLUE, PURPLE } from '../../styles/theme';

const PageContainer = styled(Box)({
  minHeight: '100vh',
  width: '100%',
  overflowX: 'hidden'
});

/* Sticky minimal nav */
const Nav = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,
  backgroundColor: BLACK,
  borderBottom: `1px solid ${PINK}`,
  transition: 'background-color 0.3s ease, border-color 0.3s ease',
  height: '64px',
  display: 'flex',
  alignItems: 'center'
});

const NavInner = styled(Container)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
});

const NavLogo = styled(Box)({
  fontFamily: '"Space Mono", monospace',
  fontSize: '1.9rem',
  color: '#FAFAFA',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  '& span.dot': {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    backgroundColor: PINK,
    borderRadius: '50%'
  }
});

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: { display: 'none' }
}));

const NavLink = styled('a')({
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.92rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  '&:hover': { color: YELLOW }
});

const NavContactLink = styled('a')({
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.92rem',
  fontWeight: 700,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: '#fff',
  textDecoration: 'none',
  backgroundColor: PINK,
  padding: '8px 18px',
  border: `1px solid ${BLACK}`,
  borderRadius: '8px',
  transition: 'background-color 0.2s ease',
  '&:hover': { backgroundColor: PURPLE }
});

/* Mobile hamburger */
const HamburgerBtn = styled(IconButton)(({ theme }) => ({
  color: '#FAFAFA',
  display: 'none',
  padding: '6px',
  borderRadius: '8px',
  [theme.breakpoints.down('sm')]: { display: 'flex' }
}));

/* Mobile Drawer */
const MobileMenuDrawer = styled(Box)({
  width: '100vw',
  height: '100vh',
  backgroundColor: BLACK,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden'
});

const MobileMenuStripe = styled(Box)({
  height: '4px',
  background: `linear-gradient(90deg, ${PINK} 0%, ${PINK} 33.3%, ${YELLOW} 33.3%, ${YELLOW} 66.6%, ${SKY_BLUE} 66.6%, ${SKY_BLUE} 100%)`
});

const MobileMenuHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 24px',
  height: '56px'
});

const MobileLogo = styled(Box)({
  fontFamily: '"Space Mono", monospace',
  fontSize: '1.4rem',
  color: '#FAFAFA',
  letterSpacing: '0.08em',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  '& span.dot': {
    display: 'inline-block',
    width: '8px',
    height: '8px',
    backgroundColor: PINK,
    borderRadius: '50%'
  }
});

const MobileNavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(6, 3),
  gap: theme.spacing(1),
  flex: 1
}));

const MobileNavLink = styled('a')(({ theme }) => ({
  fontFamily: '"Space Mono", monospace',
  fontSize: '3.5rem',
  lineHeight: 1,
  color: 'rgba(255,255,255,0.15)',
  textDecoration: 'none',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  padding: `${theme.spacing(1.5)} 0`,
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  transition: 'color 0.2s ease',
  display: 'block',
  '&:hover': {
    color: '#FAFAFA'
  }
}));

const MobileNavIndex = styled('span')({
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.65rem',
  color: PINK,
  letterSpacing: '0.1em',
  marginRight: '16px',
  verticalAlign: 'middle'
});

const MobileMenuFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  borderTop: '1px solid rgba(255,255,255,0.08)'
}));

const MobileContactInfo = styled(Box)({
  fontFamily: '"Space Mono", monospace',
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.4)',
  letterSpacing: '0.08em'
});

const MobileDecorRect = styled(Box)({
  position: 'absolute',
  bottom: '20%',
  right: '-40px',
  width: '120px',
  height: '120px',
  border: '1px solid rgba(252,88,175,0.2)',
  borderRadius: '16px',
  transform: 'rotate(15deg)',
  pointerEvents: 'none'
});

const MobileDecorCircle = styled(Box)({
  position: 'absolute',
  bottom: '-60px',
  left: '-60px',
  width: '140px',
  height: '140px',
  borderRadius: '50%',
  backgroundColor: 'rgba(122,161,228,0.14)',
  pointerEvents: 'none'
});

const BackToTopBtn = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== '$visible'
})<{ $visible: boolean }>(({ $visible, theme }) => ({
  position: 'fixed',
  right: theme.spacing(2.2),
  bottom: theme.spacing(5),
  zIndex: 120,
  width: 42,
  height: 58,
  borderRadius: 0,
  border: `1px solid ${PINK}`,
  backgroundColor: 'rgba(17, 17, 17, 0.86)',
  color: '#FAFAFA',
  opacity: $visible ? 1 : 0,
  transform: $visible ? 'translateX(0)' : 'translateX(14px)',
  pointerEvents: $visible ? 'auto' : 'none',
  transition: 'opacity 0.24s ease, transform 0.24s ease, background-color 0.2s ease',

  '&:hover': {
    backgroundColor: PINK,
    color: BLACK
  },

  [theme.breakpoints.down('sm')]: {
    right: theme.spacing(1.2),
    bottom: theme.spacing(3.2),
    width: 38,
    height: 52
  }
}));

interface PageShellProps {
  children: ReactNode;
}

export const PageShell = ({ children }: PageShellProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 260);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const navItems = [
    { id: 'about', label: 'About', index: '01' },
    { id: 'services', label: 'Services', index: '02' },
    { id: 'projects', label: 'Projects', index: '03' },
    { id: 'contact', label: 'Contact', index: '04' }
  ];

  return (
    <PageContainer className="page-shell">
      <Nav>
        <NavInner maxWidth="xl">
          <NavLogo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="dot" />
            VB
          </NavLogo>
          <NavLinks>
            {navItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
              >
                {item.label}
              </NavLink>
            ))}
            <NavContactLink
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              Contact
            </NavContactLink>
          </NavLinks>
          <HamburgerBtn
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu />
          </HamburgerBtn>
        </NavInner>
      </Nav>

      {/* Mobile Full-Screen Menu */}
      <Drawer
        anchor="top"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          style: { backgroundColor: 'transparent', boxShadow: 'none' }
        }}
        SlideProps={{ timeout: 280 }}
      >
        <MobileMenuDrawer>
          <MobileMenuStripe />
          <MobileMenuHeader>
            <MobileLogo>
              <span className="dot" />
              VB
            </MobileLogo>
            <IconButton
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
              sx={{ color: '#FAFAFA', borderRadius: '8px' }}
            >
              <Close />
            </IconButton>
          </MobileMenuHeader>

          <MobileNavLinks>
            {navItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <MobileNavLink
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                >
                  <MobileNavIndex>{item.index}</MobileNavIndex>
                  {item.label}
                </MobileNavLink>
              </motion.div>
            ))}
          </MobileNavLinks>

          <MobileMenuFooter>
            <MobileContactInfo>behrendvaleria@gmail.com</MobileContactInfo>
            <MobileContactInfo sx={{ mt: '4px' }}>Buenos Aires — Germany</MobileContactInfo>
          </MobileMenuFooter>

          <MobileDecorRect />
          <MobileDecorCircle />
        </MobileMenuDrawer>
      </Drawer>

      <BackToTopBtn
        $visible={showBackToTop}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <KeyboardArrowUp fontSize="small" />
      </BackToTopBtn>

      {children}
    </PageContainer>
  );
};