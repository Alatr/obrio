import React from "react";
import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps & { className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

interface CardHeaderProps {
  children: React.ReactNode;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};

interface CardTitleProps {
  children: React.ReactNode;
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <h2 className={styles.cardTitle}>{children}</h2>;
};

interface CardDescriptionProps {
  children: React.ReactNode;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <div className={styles.cardDescription}>{children}</div>;
};

interface CardContentProps {
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className={styles.cardContent}>{children}</div>;
};

interface CardFooterProps {
  children: React.ReactNode;
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className={styles.cardFooter}>{children}</div>;
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
