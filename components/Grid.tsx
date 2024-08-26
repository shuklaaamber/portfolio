import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({
            title,
            description,
            id,
            className,
            img,
            spareImg,
            imgClassName,
            titleClassName,
          }) => (
            <BentoGridItem
              id={id}
              title={title}
              description={description}
              key={id}
              className={className}
              img={img}
              imgClassname={imgClassName}
              titleClassname={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
