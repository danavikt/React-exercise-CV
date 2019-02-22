import React from "react";
import "./index.scss";

function Main() {
  return (
    <main>
      <section className="Section">
        <div className="Section--left">
          <h3>Education</h3>
        </div>
        <div className="Section--right">
          <h3>Doggos university</h3>
          <p>
            <span>Major: </span>Barking
          </p>
          <p>
            <span>Minor: </span>Chasing Cats
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>Skills</h3>
        </div>
        <div className="Section--right">
          <div>
            <h3>Barking Skills</h3>
            <p>160kHz sound tone</p>
            <p>Non-stop barking for 24 hours</p>
          </div>
          <div>
            <h3>Cats Chasing Skills</h3>
            <p>Can chase more than one at the time</p>
            <p>Barking included</p>
          </div>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>Experience</h3>
        </div>
        <div className="Section--right">
          <div>
            <div className="Section--right-job-title">
              <h3>Good at:</h3>
              <span>Very good Doggo, 2018-present</span>
            </div>
            <ul>
              <li>Sleeping</li>
              <li>Eating</li>
              <li>Playing</li>
              <li>Sniffing things</li>
              <li>Walking Outdoors</li>
            </ul>
          </div>
          <div>
            <div className="Section--right-job-title">
              <h3>Good at:</h3>
              <span>Very good Doggo, 2018-present</span>
            </div>
            <ul>
              <li>Sleeping</li>
              <li>Eating</li>
              <li>Playing</li>
              <li>Sniffing things</li>
              <li>Walking Outdoors</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>Hobbies</h3>
        </div>
        <div className="Section--right">
          <p>
            Ice cream fruitcake dessert cheesecake. Chocolate sweet roll donut
            cupcake. Sugar plum pastry ice cream.
          </p>
        </div>
      </section>
      <section className="Section">
        <div className="Section--left">
          <h3>References</h3>
        </div>
        <div className="Section--right">
          <p>Available on request.</p>
        </div>
      </section>
    </main>
  );
}

export default Main;
