import React from "react";
import Audio from "../Audio/Audio";
import Regular from "../Regular/Regular";
import QCM from "../QCM/QCM";
import Image from "../Image/Image";

export const pickAslide = slides => {
  return slides.map((slide, index) => {
    if (slide.type === "question") {
      return (
        <div key={index}>
          <Regular question={slide.contents} />
        </div>
      );
    }
    if (slide.type === "audio") {
      return (
        <div key={index}>
          <Audio audio={slide.contents} />
        </div>
      );
    }
    if (slide.type === "image") {
      return (
        <div key={index}>
          <Image image={slide.contents} />
        </div>
      );
    }
    if (slide.type === "qcm") {
      return (
        <div key={index}>
          <QCM question={slide.contents} choices={slide.choices} />
        </div>
      );
    }

    return <div />;
  });
};
