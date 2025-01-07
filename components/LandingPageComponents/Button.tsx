import { FC } from 'react';
import styles from '../../styles/LandingPageButton.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonTrialProps {
  variant: 'light' | 'dark';
  text: string;
  url?: string | undefined;
  onClick?: Function | undefined;
}

const ButtonTrial: FC<ButtonTrialProps> = ({ variant, text, url, onClick }) => {
  const arrowSrc = variant === 'light' ? "arrow-right-light.svg" : "arrow-right-dark.svg";

  if (url){
    return (
    
      <Link href={url} className={`${styles.button} ${variant === 'light' ? styles.light : styles.dark}`}>
        <button className={`${styles.btn} ${variant === 'light' ? styles.btnLight : styles.btnDark}`}>
          {text}
        </button>
        <Image
          src={`/icons/${arrowSrc}`}
          alt="Arrow Icon"
          className={styles.arrowIcon}
          width={25}
          height={10}
        />
      </Link>
    );
  }else if (onClick) {
    return <div onClick={()=>onClick()} className={`${styles.button} ${variant === 'light' ? styles.light : styles.dark}`}>
    <button className={`${styles.btn} ${variant === 'light' ? styles.btnLight : styles.btnDark}`}>
      {text}
    </button>
    <Image
      src={`/icons/${arrowSrc}`}
      alt="Arrow Icon"
      className={styles.arrowIcon}
      width={25}
      height={10}
    />
  </div>
  }
}

export default ButtonTrial;
