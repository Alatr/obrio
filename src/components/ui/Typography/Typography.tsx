import React from "react";
import styles from "./typography.module.css";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  component?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = "body1",
  component: Component = "div",
  children,
  className = "",
  ...props
}) => {
  const variantClasses = {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4: styles.h4,
    h5: styles.h5,
    h6: styles.h6,
    body1: styles.body1,
    body2: styles.body2,
  };

  return (
    <Component
      className={`${styles.typography} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
