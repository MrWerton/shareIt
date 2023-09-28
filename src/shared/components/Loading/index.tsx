import { Spinner, SpinnerContainer } from "./styles";


export const Loading = () => {
  return (
    <SpinnerContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Spinner />
    </SpinnerContainer>
  );
};

