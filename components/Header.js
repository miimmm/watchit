import Link from 'next/link';
import Container from '@/components/Container';
import logoImg from '@/public/logo.svg';
import styles from './Header.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link href="/">
        <Image src={logoImg} width={150} height={26} alt="WATCHIT" />
        </Link>
        <Link className={styles.setting} href="/setting">설정</Link>
      </Container>
    </header>
  );
}
