import { SpinnerContainer } from "./styles";


export const Loading = () => {
  return (
    <SpinnerContainer
      animate={{
        opacity: [0, 1],
      }}
    >
      <h1>ShareIt!</h1>
    </SpinnerContainer>
  );
};


