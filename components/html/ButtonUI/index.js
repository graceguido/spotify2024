import styles from "./ButtonUI.module.scss";
import Icon from "../Icon";

const ButtonUI = ({ clickHandler, icon, label }) => {
  return (
    <button className={styles.btnui} onClick={clickHandler}>
      {label}
      <Icon icon={icon} />
    </button>
  );
};
export default ButtonUI;
