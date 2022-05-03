import { useRouter } from 'next/router';

import styles from '@/styles/Home.module.css';

export default function Login() {
  const router = useRouter();
  const handleLogin = (event) => {
    event.preventDefault();
    fetch(`/api/users/login`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          router.push(`/`);
        }
      });
  };
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="username" name={`email`} />
        <input type="password" placeholder="password" name={`password`} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
