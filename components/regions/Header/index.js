import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      Spotify logo
      <br />
      Top 10 artists
    </header>
  );
};
export default Header;
