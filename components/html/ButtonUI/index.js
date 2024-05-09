import styles from "./ButtonUI.module.scss";
import Icon from "../Icon";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const ButtonUI = ({ clickHandler, icon, label }) => {
  const ButtonUIClasses = cx({
    btnui: true,
    close: icon === "faXmark",
  });
  return (
    <button className={ButtonUIClasses} onClick={clickHandler}>
      {label}
      <Icon icon={icon} />
    </button>
  );
};
export default ButtonUI;
