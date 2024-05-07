import styles from "./Showcase.module.scss";
import Image from "next/image";

const ShowcaseImages = ({ activeIndex, items }) => {
  return (
    <p>
      <div className={styles.showcase__images}>
        <ul
          className={styles.showcase__images__list}
          style={{
            width: `${items.length * 100}%`,
            transform: `translateX(-${(activeIndex / items.length) * 100}%)`,
          }}
        >
          {items.map((item, index) => {
            return (
              <li className={styles.showcase__images__list__item} key={index}>
                <Image
                  src={item.images[0].url}
                  alt={item.name}
                  width={item.images[0].width}
                  height={item.images[0].height}
                  className={styles.showcase__images__list__item__image}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </p>
  );
};
export default ShowcaseImages;
