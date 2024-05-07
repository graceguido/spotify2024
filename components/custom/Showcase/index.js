import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import ShowcaseContent from "./content";
import ShowcaseImages from "./images";

import styles from "./Showcase.module.scss";

const Showcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    //console.log("use effect for showcase");
    if (items.length > 0) {
      try {
        fetch(`/api/albums?id=${items[activeIndex].id}`)
          .then((res) => res.json())
          .then((data) => {
            setAlbums(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [activeIndex]);

  console.log({ albums });

  return (
    <div className={styles.showcase}>
      <AnimatePresence>
        <ShowcaseImages items={items} activeIndex={activeIndex} />
        <ShowcaseContent
          items={items}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          latestRelease={albums.length > 0 ? albums[0] : null}
        />
      </AnimatePresence>
    </div>
  );
};
export default Showcase;
