// components/Loader.tsx
import styles from '../styles/Loader.module.css';
import Image from 'next/image';
import '../app/globals.css';


const Loader: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.logo2Wrapper}>
        <Image 
            src="/icons/iconLogo.svg"
            alt="Edudesk Logo"
            className="dark:invert"
            width={200}
            height={200}
            priority
        />
      </div>
      <div className={styles.text2LogoWrapper}>
            <Image 
                src="/icons/textLogo.svg"
                alt="Edudesk Logo"
                className={styles.textLogo}
                width={1070}
                height={600}
                priority
            />
      </div>
    </div>
  );
};

export default Loader;
