import React from "react";
import FunBox02 from "../../Components/FunFactElements/FunBox02";

const FunFactAbout = () => {
  const FunDataAbout = [
    {
      id: "1",
      img: "images/funfact/p5.png",
      number: "6",
      name: "Under Construction",
    },

    {
      id: "3",
      img: "images/funfact/p7.png",
      number: "10",
      name: "Projects Handover",
    },
  ];

  return (
    <div id="funfacts" className="funfacts2 section">
      <div className="funfacts3_bg_img">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="funfacts3_bg">
                {FunDataAbout.map((data) => (
                  <FunBox02 key={data.id} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactAbout;
