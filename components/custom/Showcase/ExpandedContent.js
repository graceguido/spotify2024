import ButtonUI from "@/components/html/ButtonUI";
import Container from "@/components/layout/Container";
import Grid from "../../layout/Grid";
import Heading from ".././../html/Heading";

import styles from "./Showcase.module.scss";

const ShowcaseExpandedContent = ({
  activeIndex,
  albums,
  items,
  setIsExpanded,
}) => {
  return (
    <section className={styles.showcase__expanded__content}>
      <ButtonUI
        icon="faXmark"
        clickHandler={() => {
          setIsExpanded(false);
        }}
      />
      <div className={styles.showcase__expanded__content__top}>
        <h2 className={styles.showcase__artist__name}>
          {items[activeIndex].name}
        </h2>
        <ButtonUI
          label="View albums"
          icon="faAngleDown"
          clickHandler={() => {
            const slideTarget = document.getElementById("bottomContent");
            slideTarget.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
      <div
        className={styles.showcase__expanded__content__bottom}
        id="bottomContent"
      >
        <Container>
          <Heading level={2} marginBottom={2} marginTop={4}>
            Albums
          </Heading>
          <Grid items={albums} />
        </Container>
      </div>
    </section>
  );
};
export default ShowcaseExpandedContent;
