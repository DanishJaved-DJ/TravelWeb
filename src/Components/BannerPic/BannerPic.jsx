import React from "react";

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
   <div className="dark:bg-black/80">
     <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
   </div>
  );
};

export default BannerPic;
