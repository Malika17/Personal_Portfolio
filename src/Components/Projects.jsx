import React, { useEffect } from "react";
import "./portfolio.css";
import img1 from "./Images/image.png";
import img2 from "./Images/p1_2.png";
import img3 from "./Images/p1_3.png";
import img4 from "./Images/p1_4.png";
import img5 from "./Images/p1_5.png";
import p1_cover from "./Images/cover.jpg";
import ochi from "./ochu_new.png";
import ochi_1 from "./ochi_1.png";
import ochi_2 from "./ochi_2.png";
import ochi_3 from "./ochi_3.png";
import ochi_4 from "./ochi_4.png";
import cyber_img from "./cyber_img_dum.png";
import c_1 from "./cyber_img_1.png";
import c_2 from "./cyber_img_2.png";
import c_3 from "./cyber_img_3.png";
import c_4 from "./cyber_img_4.png";
import p4_img1 from "./Images/p4_1.png";
import p4_img2 from "./Images/p4_2.png";
import p4_img3 from "./Images/p4_4.png";
import p4_img4 from "./Images/p4_4.png";
import p4_cover from "./Images/meta.png";

const Projects = () => {
  useEffect(() => {
    function cardShow() {
      document.querySelectorAll(".cnt").forEach(function (cnt) {
        var showingImg;
        cnt.addEventListener("mousemove", function (dets) {
          document.querySelector(".cursor").children[
            dets.target.dataset.index
          ].style.opacity = 1;
          showingImg = dets.target;
          document.querySelector(".cursor").children[
            dets.target.dataset.index
          ].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
          showingImg.style.filter = "grayscale(1)";
          document.querySelector(".work").style.backgroundColor =
            "#" + dets.target.dataset.color;
        });
        cnt.addEventListener("mouseleave", function (dets) {
          document.querySelector(".cursor").children[
            showingImg.dataset.index
          ].style.opacity = 0;
          showingImg.style.filter = "grayscale(0)";
          document.querySelector(".work").style.backgroundColor = "white";
        });
      });
    }
    cardShow();
  });
  return (
    <div className="work" id="Project_view">
      <div className="work_Row">
        <h1 className="project_head">PROJECTS</h1>
      </div>
      <div className="Images_1">
        <div className="cnt container1">
          <a
            href="https://scintillating-kashata-84dc08.netlify.app/"
            target="_blank"
          >
            <img
              data-index="0"
              //
              src={p1_cover}
              data-scroll
              data-scroll-speed="-0.4"
              data-color="2890f2"
            ></img>
          </a>
        </div>
        <div className="cnt container2">
          <a href="https://ochidesignmalika.netlify.app/" target="_blank">
            <img
              data-index="1"
              //
              data-scroll
              src={ochi}
              data-scroll-speed="0"
              data-color="cdea68"
            ></img>
          </a>
        </div>
      </div>
      <div className="Images_2">
        <div className="cnt container1">
          <a href="https://cyberfictionnew.netlify.app/" target="_blank">
            <img
              data-index="2"
              //
              src={cyber_img}
              data-scroll
              data-scroll-speed="-0.1"
              data-color="000000"
            ></img>
          </a>
        </div>
        <div className="cnt container2">
          <a href="https://metaversenext.netlify.app/" target="_blank">
            <img
              data-index="3"
              //
              data-scroll
              src={p4_cover}
              data-scroll-speed="0"
              data-color="2d0e54"
            ></img>
          </a>
        </div>
      </div>
      <div className="cursor">
        <div>
          <div className="crow">
            <div className="ccircle"></div>
            <div className="ccapsule">Take a look</div>
          </div>
          <div className="elem">
            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
          </div>
        </div>
        <div>
          <div className="crow">
            <div className="ccircle"></div>
            <div className="ccapsule">Take a look</div>
          </div>
          <div className="elem">
            <img src={ochi_1}></img>
            <img src={ochi_2}></img>
            <img src={ochi_3}></img>
            <img src={ochi_4}></img>
          </div>
        </div>
        <div>
          <div className="crow">
            <div className="ccircle"></div>
            <div className="ccapsule">Take a look</div>
          </div>
          <div className="elem">
            <img src={c_1}></img>
            <img src={c_2}></img>
            <img src={c_3}></img>
            <img src={c_4}></img>
          </div>
        </div>
        <div>
          <div className="crow">
            <div className="ccircle"></div>
            <div className="ccapsule">Take a look</div>
          </div>
          <div className="elem">
            <img src={p4_img1}></img>
            <img src={p4_img2}></img>
            <img src={p4_img1}></img>
            <img src={p4_img4}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
