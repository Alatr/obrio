import React from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  loading = false,
  icon,
  children,
  ...props
}) => {
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
    danger: styles.danger,
  };

  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };

  return (
    <button
      className={`${styles.button} ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {loading ? "Loading..." : icon}
      {children}
    </button>
  );
};

export default Button;
