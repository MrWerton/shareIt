import { ButtonContainer } from './styles';
interface ButtonProps{
    title: string,
    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined,
    isLoading?: boolean
}
export const Button = ({onClick, title,isLoading, type = 'button'}: ButtonProps) => {
  return (
    <ButtonContainer disabled={isLoading} type={type} onClick={onClick}>
        {isLoading?"...": title}
    </ButtonContainer>
  )
}
