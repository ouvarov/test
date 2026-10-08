import React from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button
      className={styles.container}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};