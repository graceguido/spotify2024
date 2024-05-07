import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import ShowcaseContent from "./content";
import ShowcaseImages from "./images";

import styles from "./Showcase.module.scss";

const Showcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className={styles.showcase}>
      <AnimatePresence>
        <ShowcaseImages items={items} activeIndex={activeIndex} />
        <ShowcaseContent
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </AnimatePresence>
    </div>
  );
};
export default Showcase;
