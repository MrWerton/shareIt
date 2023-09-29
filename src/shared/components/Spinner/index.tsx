import { SpinnerContainer } from './styles'

export const Spinner = () => {
  return (
    <SpinnerContainer  
    animate={{ scale: [1,2] }}
    transition={{  duration: 0.5, repeat: 20, repeatType: 'loop'}}/>
  )
}
