import { createTheme } from '@mui/material/styles';

// Paleta principal
export const ORANGE = '#D6A6DB';
export const PINK = '#D6A6DB';
export const SKY_BLUE = '#5B60AC';
export const YELLOW = '#E7D9C8';
export const LIME = '#E7D9C8';
export const BLACK = '#353331';
export const CREAM = '#E7D9C8';
export const WHITE = '#FAFAFA';

// Variables semánticas para el nuevo estilo visual
export const PAPER = CREAM;
export const INK = BLACK;
export const BLUE = SKY_BLUE;
export const LILAC = PINK;

export const SOFT_LILAC = '#E5C8E8';
export const MUTED_LILAC = 'rgba(214, 166, 219, 0.34)';
export const MUTED_BLUE = 'rgba(91, 96, 172, 0.18)';
export const MUTED_INK = 'rgba(53, 51, 49, 0.68)';
export const BORDER_INK = 'rgba(53, 51, 49, 0.52)';
export const PAPER_TRANSLUCENT = 'rgba(231, 217, 200, 0.72)';

// Legacy compatibility
export const MAGENTA = PINK;
export const RED = PINK;
export const CYAN = SKY_BLUE;
export const MINT = LIME;
export const PURPLE = SKY_BLUE;

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PINK,
      dark: '#B788BC',
      light: '#E3C2E6',
      contrastText: BLACK
    },
    secondary: {
      main: SKY_BLUE,
      dark: '#494D8A',
      light: '#7A7FC0',
      contrastText: WHITE
    },
    warning: {
      main: ORANGE,
      contrastText: BLACK
    },
    background: {
      default: CREAM,
      paper: CREAM
    },
    text: {
      primary: BLACK,
      secondary: '#575452'
    },
    divider: BORDER_INK
  },

  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',

    h1: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      fontSize: 'clamp(5rem, 12vw, 13rem)',
      fontWeight: 500,
      lineHeight: 0.78,
      letterSpacing: '-0.075em'
    },

    h2: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      fontSize: 'clamp(4rem, 9vw, 10rem)',
      fontWeight: 500,
      lineHeight: 0.82,
      letterSpacing: '-0.065em'
    },

    h3: {
      fontFamily: '"Cormorant Garamond", "Playfair Display", serif',
      fontSize: 'clamp(3rem, 6vw, 6.5rem)',
      fontWeight: 500,
      lineHeight: 0.88,
      letterSpacing: '-0.055em'
    },

    h4: {
      fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: 1.35,
      letterSpacing: '0.08em'
    },

    h5: {
      fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
      fontSize: '0.95rem',
      fontWeight: 500,
      lineHeight: 1.45,
      letterSpacing: '0.09em'
    },

    h6: {
      fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
      fontSize: '0.76rem',
      fontWeight: 500,
      lineHeight: 1.45,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    },

    body1: {
      fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: '0.005em'
    },

    body2: {
      fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
      fontSize: '0.82rem',
      lineHeight: 1.65,
      letterSpacing: '0.04em'
    },

    button: {
      fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
      fontSize: '0.72rem',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase'
    },

    caption: {
      fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
      fontSize: '0.68rem',
      letterSpacing: '0.12em',
      lineHeight: 1.45
    }
  },

  spacing: 8,

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },

  shape: {
    borderRadius: 0
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: CREAM,
          color: BLACK,
          textRendering: 'geometricPrecision',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        },

        '::selection': {
          backgroundColor: SKY_BLUE,
          color: WHITE
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '11px 26px',
          border: `1px solid ${BLACK}`,
          boxShadow: 'none',
          color: BLACK,
          backgroundColor: 'transparent',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',

          '&:hover': {
            transform: 'translateY(-1px)',
            backgroundColor: SKY_BLUE,
            color: WHITE,
            borderColor: SKY_BLUE,
            boxShadow: 'none'
          }
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',

            '& fieldset': {
              borderWidth: 1,
              borderColor: BLACK
            },

            '&:hover fieldset': {
              borderColor: SKY_BLUE
            },

            '&.Mui-focused fieldset': {
              borderColor: SKY_BLUE,
              borderWidth: 1
            }
          },

          '& .MuiInputLabel-root': {
            fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
            fontSize: '0.75rem',
            letterSpacing: '0.08em'
          }
        }
      }
    },

    MuiContainer: {
      styleOverrides: {
        root: {
          position: 'relative'
        }
      }
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: `1px solid ${BLACK}`,
          backgroundColor: 'transparent',
          color: BLACK,
          fontFamily: '"IBM Plex Mono", "Space Mono", monospace',
          fontSize: '0.68rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }
      }
    }
  }
});