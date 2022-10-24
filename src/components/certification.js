import React from "react";
import { Listitems } from "./listitems";
import { ItemCertif } from "./item-certif";
const ListCertif = (list) => {
  return list.map((item, index) => {
    return (
      <ItemCertif
        key={index}
        title={item.title}
        subtitle={item.subtitle}
        description={item.description}
        images={item.images}
        github={item.github}
        live={item.live}
      />
    );
  });
};
const Certif = () => {
  return (
    <div className="section-certif">
      <h4 className="section-certif-title">Certifications</h4>
      <div className="sub-section-certif  ">
        {ListCertif(Listitems.itemCertificat)}
      </div>
    </div>
  );
};

export { Certif };
