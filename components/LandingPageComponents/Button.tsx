import { FC } from 'react';
import styles from '../../styles/LandingPageButton.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonTrialProps {
  variant: 'light' | 'dark';
  text: string;
  url: string;
}

const ButtonTrial: FC<ButtonTrialProps> = ({ variant, text, url }) => {
  const arrowSrc = variant === 'light' ? "arrow-right-light.svg" : "arrow-right-dark.svg";

  return (
    <div className={`${styles.button} ${variant === 'light' ? styles.light : styles.dark}`}>
      <button className={`${styles.btn} ${variant === 'light' ? styles.btnLight : styles.btnDark}`}>
        <Link href={url}>{text}</Link>
      </button>
      <Image
        src={`/icons/${arrowSrc}`}
        alt="Arrow Icon"
        className={styles.arrowIcon}
        width={25}
        height={10}
      />
    </div>
  );
};

export default ButtonTrial;
