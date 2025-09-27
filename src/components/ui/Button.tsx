import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    let buttonClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 ';
    
    // Variant styles
    if (variant === 'primary') {
      buttonClasses += 'bg-blue-600 text-white hover:bg-blue-700 ';
    } else if (variant === 'outline') {
      buttonClasses += 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 ';
    } else {
      buttonClasses += 'bg-gray-100 text-gray-900 hover:bg-gray-200 ';
    }
    
    // Size styles
    if (size === 'lg') {
      buttonClasses += 'h-12 px-6 text-base ';
    } else if (size === 'sm') {
      buttonClasses += 'h-8 px-3 text-sm ';
    } else {
      buttonClasses += 'h-10 px-4 ';
    }
    
    buttonClasses += className;

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
