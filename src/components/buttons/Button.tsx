import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"

type ButtonVariant = "default" | "gold"

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
   isLoading?: boolean
   variant?: ButtonVariant
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

   const variants: Record<ButtonVariant, string> = {
      default: "bg-primary text-gray-600 disabled:bg-gray-200 dark:text-gray-200 dark:disabled:bg-gray-700",
      gold: ""
   }

   return (
      <button
         {...props}
         disabled={disabled}
         className={clsx(
            "rounded px-4 py-2 font-bold border border-gray-300 shadow-sm dark:border-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-contrast scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 transition duration-100",
            variants[variant]
         )}
      >
         {children}
      </button>
   )
}