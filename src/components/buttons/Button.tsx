import { ComponentPropsWithoutRef, FC } from "react"

enum ButtonVariant {
   "default",
   "filled"
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
   isLoading: boolean
   variant?: keyof typeof ButtonVariant
}

export const Button:FC<ButtonProps> = ({
   children,
   className,
   disabled: buttonDisabled,
   isLoading,
   variant = "default",
   ...props
}) => {
   const disabled = isLoading || buttonDisabled

   return (
      <button
         {...props}
         disabled={disabled}
      >
         Button
      </button>
   )
}