import { TypeAnimation } from "../TyperAnimation";
import { SpinnerContainer } from "./styles";


export const Loading = () => {
  return (
    <SpinnerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
     <TypeAnimation delay={0} text="Loading..." color="#eee" fontSize="2rem"/>
    </SpinnerContainer>
  );
};

