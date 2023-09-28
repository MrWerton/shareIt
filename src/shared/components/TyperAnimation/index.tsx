import { useAnimation } from 'framer-motion';
import { useEffect, useState } from "react";
import { TextAnimation } from "./styles";



interface TyperAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  fontSize?: string
  isTitle?: boolean
  color?: string

}

export const TypeAnimation = ({ text, speed = 20, delay = 1400,color, fontSize, isTitle }: TyperAnimationProps) => {
  const [currentText, setCurrentText] = useState('');
  const [finishAnimation, setFinishAnimation] = useState(false); 
  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const textLength = text.length;
      let currentIndex = 0;
      controls.start({ opacity: 1 });

      const interval = setInterval(() => {
        if (currentIndex <= textLength) {
          const currentWord = text.slice(0, currentIndex);
          setCurrentText(`${currentWord}`);
          currentIndex += 1;
        } else {
         
          clearInterval(interval);
         setTimeout(() => {
            setFinishAnimation(true);
         }, 500);
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [controls, delay, speed, text]);

  return (
      <TextAnimation color={color} fontSize={fontSize} isTitle={isTitle} initial={{ opacity: 0 }} animate={controls} transition={{ duration: 0.5 }}>
        {currentText}{!finishAnimation ? "_" : " "}
      </TextAnimation>
  );
}
