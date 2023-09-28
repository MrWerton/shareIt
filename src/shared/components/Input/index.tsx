import {
  forwardRef, ForwardRefRenderFunction
} from 'react'
import { InputContainer } from './styles'

interface InputProps{
  placeholder: string
}
export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({placeholder},
  ref
)  =>{return (
    <InputContainer >
      <input ref={ref} placeholder={placeholder}  />
      <span />
    </InputContainer>
  )
}

export const Input = forwardRef(InputBase)
