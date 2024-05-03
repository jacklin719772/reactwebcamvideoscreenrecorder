import CameraSelect from 'components/CameraSelect';
import MainRecordButton from 'components/MainRecordButton';
import MicrophoneSelect from 'components/MicrophoneSelect';

import styles from './Footer.module.css';
import AboutMeButton from 'components/AboutMeButton';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <AboutMeButton />
      <MainRecordButton />
      <div className={styles.devices}>
        <MicrophoneSelect />
        <CameraSelect />
      </div>
    </footer>
  );
};

export default Footer;
