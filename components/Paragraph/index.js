import classnames from "classnames/bind";
import styles from "./Paragraph.module.scss";

const cx = classnames.bind(styles);

const Paragraph = ({
  caption,
  children,
  intro,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const paragraphClasses = cx({
    paragraph: true,
    intro: intro,
    caption: caption,
    [`margin-top--${marginTop}`]: marginTop,
    [`margin-right--${marginRight}`]: marginRight,
    [`margin-bottom--${marginBottom}`]: marginBottom,
    [`margin-left--${marginLeft}`]: marginLeft,
  });
  return <p className={paragraphClasses}>{children}</p>;
};
export default Paragraph;
