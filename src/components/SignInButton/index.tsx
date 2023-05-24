import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss';

export function SignInButton() {
  const session = useSession();

  return session.data ? (
    <button type='button' className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color='#04D361' /> {session.data?.user.name} <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button type='button' className={styles.signInButton} onClick={() => signIn()}>
      <FaGithub color='#EBA417' /> Sing in with GitHub
    </button>
  );
}
