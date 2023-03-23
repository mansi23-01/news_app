import { useRouter } from "next/router";
import styles from '../styles/Toolbar.module.css';

export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div  onClick={() => router.push('/feed')}>Sports</div>
            <div  onClick={() => router.push('/Business')}>Business</div>
            <div  onClick={() => window.location.href = 'https://twitter.com/MansiSr15450321'}>Twitter</div>

        </div>
    );
};