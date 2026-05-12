import { styled } from '@mui/material/styles';
import { Box, SxProps, Theme } from '@mui/material';
import { BLACK, CREAM, LIME, ORANGE, PINK, PURPLE, SKY_BLUE, WHITE, YELLOW } from '../../styles/theme';

export interface ShapeProps {
  variant?: 'square' | 'rectangle' | 'circle' | 'diagonal' | 'triangle';
  color?: 'red' | 'magenta' | 'pink' | 'black' | 'blue' | 'cyan' | 'sky-blue' | 'yellow' | 'mint' | 'lime' | 'orange' | 'purple' | 'gray' | 'white';
  size?: number;
  rotation?: number;
  className?: string;
  sx?: SxProps<Theme>;
}

const StyledShape = styled(Box, {
  shouldForwardProp: (prop) =>
    !['variant', 'color', 'size', 'rotation'].includes(prop as string)
})<ShapeProps>(({ theme, variant = 'square', color = 'pink', size = 100, rotation = 0 }) => {
  const colorMap: Record<string, string> = {
    red: PINK,
    magenta: PINK,
    pink: PINK,
    black: BLACK,
    blue: SKY_BLUE,
    cyan: SKY_BLUE,
    'sky-blue': SKY_BLUE,
    yellow: YELLOW,
    mint: LIME,
    lime: LIME,
    orange: ORANGE,
    purple: PURPLE,
    gray: '#9E9E9E',
    white: WHITE
  };

  const dimensionMap: Record<string, object> = {
    square: { width: size, height: size, borderRadius: '12px' },
    rectangle: { width: size * 2.4, height: size, borderRadius: '12px' },
    circle: { width: size, height: size, borderRadius: '50%' },
    diagonal: { width: size, height: size, clipPath: 'polygon(0 0, 100% 0, 100% 100%)', borderRadius: '8px' },
    triangle: { width: 0, height: 0, backgroundColor: 'transparent', borderLeft: `${size / 2}px solid transparent`, borderRight: `${size / 2}px solid transparent`, borderBottom: `${size}px solid ${colorMap[color]}` }
  };

  const triangleOverrides = variant === 'triangle' ? {
    backgroundColor: 'transparent !important'
  } : {};

  return {
    backgroundColor: variant !== 'triangle' ? colorMap[color] : 'transparent',
    ...dimensionMap[variant],
    ...triangleOverrides,
    transform: `rotate(${rotation}deg)`,
    position: 'absolute',
    pointerEvents: 'none'
  };
});

export const ConstructivistShape = (props: ShapeProps) => {
  const { className, ...rest } = props;
  return <StyledShape {...rest} className={className || 'constructivist-shape'} />;
};

// Ben-Day dots pattern for Pop Art feel
export const BenDayDots = styled(Box, {
  shouldForwardProp: (prop) => !['dotColor', 'dotSize'].includes(prop as string)
})<{ dotColor?: string; dotSize?: number }>(({ dotColor = YELLOW, dotSize = 16 }) => ({
  position: 'absolute',
  pointerEvents: 'none',
  backgroundImage: `radial-gradient(circle, ${dotColor} 35%, transparent 35%)`,
  backgroundSize: `${dotSize}px ${dotSize}px`
}));

// Halftone pattern (smaller dots for image areas)
export const HalftonePattern = styled(Box, {
  shouldForwardProp: (prop) => !['dotColor', 'bgColor', 'dotSize'].includes(prop as string)
})<{ dotColor?: string; bgColor?: string; dotSize?: number }>(
  ({ dotColor = BLACK, bgColor = CREAM, dotSize = 10 }) => ({
    position: 'absolute',
    pointerEvents: 'none',
    backgroundColor: bgColor,
    backgroundImage: `radial-gradient(circle, ${dotColor} 28%, transparent 28%)`,
    backgroundSize: `${dotSize}px ${dotSize}px`
  })
);