import { clsx } from "clsx";

export const Badge = ({
  variant = "neutral",
  size = "md",
  children,
  className,
}) => {
  const baseClasses =
    "inline-flex items-center font-medium rounded-full border";

  const variantClasses = {
    primary: "bg-primary-50 text-primary-700 border-primary-200",
    success: "bg-success-50 text-success-700 border-success-200",
    warning: "bg-warning-50 text-warning-700 border-warning-200",
    error: "bg-error-50 text-error-700 border-error-200",
    neutral: "bg-dark-50 text-dark-700 border-dark-200",
  };

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-sm",
  };

  return (
    <span
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
};
