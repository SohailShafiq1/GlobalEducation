import React from "react";
import styles from "./bottom.module.css";
import home from "../../assets/home.png";
import location from "../../assets/mini-location.png";
import money from "../../assets/money.png";
import puzzle from "../../assets/puzzle.png";
import document from "../../assets/docs.png";

const s = styles;
const Bottom = () => {
  return (
    <div className={s["container"]}>
      <div className={s["top"]}>
        <h1>Key accomodation considerations </h1>
      </div>
      <div className={s["bottom"]}>
        <div className={s["left-side"]}>
          <div className={s["box"]}>
            <div className={s["data"]}>
              <div className={s["left-data"]}>
                <img src={location} alt="" />
              </div>
              <div className={s["right-data"]}>
                <h2>Location</h2>{" "}
              </div>
            </div>
            <p>
              Proximity to the educational institution is crucial. Consider the
              distance and the ease of commuting. Being close to the university
              can save time and transportation costs.
            </p>

            <p>
              The neighborhood's safety and accessibility to essential amenities
              like grocery stores, pharmacies, and public transportation should
              also be assessed.
            </p>
          </div>
          <div className={s["box"]}>
            <div className={s["data"]}>
              <div className={s["left-data"]}>
                <img src={money} alt="" />
              </div>
              <div className={s["right-data"]}>
                <h2>Budget</h2>{" "}
              </div>
            </div>
            <p>
              Determine your budget for accommodation, keeping in mind that
              costs can vary significantly based on location, type of
              accommodation, and amenities provided.
            </p>

            <p>
              Consider additional expenses such as utility bills (electricity,
              water, internet), transportation costs, and food.
            </p>
          </div>
          <div className={s["box"]}>
            <div className={s["data"]}>
              <div className={s["left-data"]}>
                <img src={puzzle} alt="" />
              </div>
              <div className={s["right-data"]}>
                <h2>Cultural and Social Aspects:</h2>{" "}
              </div>
            </div>

            <p>
              Consider the cultural environment of the accommodation. For
              instance, living in a local neighborhood can offer a more
              immersive cultural experience.
            </p>

            <p>
              Social aspects, such as opportunities to interact with other
              students or locals, can also be important for a fulfilling study
              abroad experience.
            </p>
          </div>
        </div>
        <div className={s["right-side"]}>
          <div className={s["box"]}>
            <div className={s["data"]}>
              <div className={s["left-data"]}>
                <img src={home} alt="" />
              </div>
              <div className={s["right-data"]}>
                <h2>Type of Accomodation:</h2>{" "}
              </div>
            </div>
            <p>
              Options may include university dormitories, private apartments,
              shared apartments, homestays, or student hostels. Each type has
              its pros and cons in terms of cost, privacy, and amenities.
            </p>

            <p>
              Assess what type of living situation best suits your needs and
              preferences, whether it's the social atmosphere of dormitories or
              the privacy of a single apartment.
            </p>
          </div>
          <div className={s["box"]}>
            <div className={s["data"]}>
              <div className={s["left-data"]}>
                <img src={document} alt="" />
              </div>
              <div className={s["right-data"]}>
                <h2>Lease Term and Conditions:</h2>{" "}
              </div>
            </div>

            <p>
              Carefully review the lease agreement or contract for the
              accommodation. Pay attention to the duration of the lease, deposit
              required, payment terms, and conditions for termination or
              extension.
            </p>

            <p>
              Understand your rights and responsibilities as a tenant in a
              foreign country, which may differ significantly from those in your
              home country.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
