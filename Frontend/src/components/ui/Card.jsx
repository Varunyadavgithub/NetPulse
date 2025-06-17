import { clsx } from "clsx";

export const Card = ({ children, className, hover = false }) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl border border-dark-200 shadow-sm",
        hover &&
          "hover:shadow-lg hover:border-dark-300 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={clsx("px-6 py-4 border-b border-dark-200", className)}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return <div className={clsx("px-6 py-4", className)}>{children}</div>;
};
