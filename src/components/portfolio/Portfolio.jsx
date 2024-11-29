import React, { useEffect, useCallback } from 'react';
import './portfolio.scss';

import sedanA from '../../Images/ExterA.jpeg'
import sedanB from '../../Images/ExterB.jpeg'
import truckA from '../../Images/ExterE.jpg'
import truckB from '../../Images/ExterD.jpg'
import trunk from '../../Images/trunk.png'

import interiorA from '../../Images/InterC.jpeg'
import interiorB from '../../Images/BD.jpeg'
import interiorC from '../../Images/InterB.jpeg'
import lights from '../../Images/headlightsA.jpeg'



function Portfolio() {
  const w3AddClass = useCallback((element, name) => {
    const arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
        element.className += " " + arr2[i];
      }
    }
  }, []);

  const w3RemoveClass = useCallback((element, name) => {
    let arr1 = element.className.split(" ");
    const arr2 = name.split(" ");
    for (let i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }, []);

  const filterSelection = useCallback((c) => {
    const x = document.getElementsByClassName("column");
    if (c === "all") c = "";
    for (let i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }, [w3RemoveClass, w3AddClass]);

  useEffect(() => {
    filterSelection("all"); // Show all columns by default

    // Add active class to the current button (highlight it)
    const btnContainer = document.getElementById("myBtnContainer");
    const btns = btnContainer.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        const current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }, [filterSelection]);

  return (
    <div>
      <i className="fab fa-instagram text-xl flex items-center mt-2 sm:mt-0" aria-hidden="true">
        <a
          href="https://www.instagram.com/cleanwashdetailing619?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline ml-2 roboto-bold"
        >
          Instagram: BearWolf Detailing
        </a>
      </i>
      <div id="myBtnContainer">
        <button className="btn active" onClick={() => filterSelection('all')}>Show all</button>
        <button className="btn" onClick={() => filterSelection('exterior')}>Exterior</button>
        <button className="btn" onClick={() => filterSelection('interior')}>Interior</button>
      </div>

      <div className="row">
        <div className="column exterior show">
          <div className="content">
            <img src={sedanA} alt="Honda Accord" style={{ width: "100%" }} />
            <h4>Sedan</h4>
            <p>Price: $100</p>
          </div>
        </div>
        <div className="column exterior show">
          <div className="content">
            <img src={sedanB} alt="Accord Sedan" style={{ width: "100%" }} />
            <h4>Honda Accord</h4>
            <p>DM for any questions</p>
          </div>
        </div>
        <div className="column exterior show">
          <div className="content">
            <img src={truckA} alt="Toyota Truck" style={{ width: "100%" }} />
            <h4>Truck</h4>
            <p>$120</p>
          </div>
        </div>
        <div className="column exterior">
          <div className="content">
            <img src={truckB} alt="Toyota TRD" style={{ width: "100%" }} />
            <h4>Truck</h4>
            <p>Make it fresh again</p>
          </div>
        </div>
        <div className="column exterior show">
          <div className="content">
            <img src={lights} alt="headlights" style={{ width: "100%" }} />
            <h4>Headlight</h4>
            <p>Price $50</p>
          </div>
        </div>
        <div className="column interior">
          <div className="content">
            <img src={interiorA} alt="Dashboard" style={{ width: "100%" }} />
            <h4>Interior</h4>
            <p>Polish like new again</p>
          </div>
        </div>
        <div className="column interior">
          <div className="content">
            <img src={interiorB} alt="Driver side" style={{ width: "100%" }} />
            <h4>Clean with protection</h4>
            <p>Dm for any request</p>
          </div>
        </div>
        <div className="column interior">
          <div className="content">
            <img src={interiorC} alt="Door panel" style={{ width: "100%" }} />
            <h4>Door panel</h4>
            <p>Spotless full detail</p>
          </div>
        </div>
        <div className="column interior">
          <div className="content">
            <img src={trunk} alt="Door panel" style={{ width: "100%" }} />
            <h4>Trunk</h4>
            <p>Clean 100%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;