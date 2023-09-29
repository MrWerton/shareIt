import { motion } from 'framer-motion';
import styled from 'styled-components';

interface AnimationTextProps{
    isTitle?: boolean,
    fontSize?: string,
    color?: string,
}

export const TextAnimation = styled(motion.p)<AnimationTextProps>`
  color: #eee;
  font-size: ${props=>props.fontSize ?? '1.5rem'};
  color: ${props=>props.color ?? '#222'};
  font-weight: ${props=>props.isTitle?"bold":"normal"};

  @media (max-width: 480px) {
    font-size: ${props=>props.isTitle? '1.5rem':  '1rem'};

    
  }
`;
