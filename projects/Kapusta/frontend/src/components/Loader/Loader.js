import { Triangle } from 'react-loader-spinner';
import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <Triangle
      visible={true}
      color="#ff751d"
      height={80}
      width={80}
      wrapperClass={styles.LoaderMain}
    />
  );
}
