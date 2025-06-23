import React, { useEffect } from "react";
import popularcourses from "./popularcourses.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Popularcourses() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <div className={popularcourses.container}>
        <div className={popularcourses.text}>
          <h1
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Popular Courses to Studying in Australia
          </h1>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            International students in Australia are presented with an
            unparalleled array of educational possibilities across a spectrum of
            fields. Whether one envisions a journey into the hallowed halls of
            study in an Australian university or seeks the best courses to study in
            Australia, the opportunities for intellectual growth and
            professional advancement are boundless.
          </p>
          <ul
            className={popularcourses.ultext}
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <li>
              <strong>Medicine:</strong> Offers hands-on training and advanced
              research opportunities, preparing students for careers in
              healthcare. The medical programs are recognized internationally.
            </li>
            <li>
              <strong>Business Management:</strong> Focuses on innovation and
              entrepreneurship, equipping students with skills needed for
              dynamic roles in the corporate world. Graduates are well-prepared
              for various business careers.
            </li>
            <li>
              <strong>Marine Sciences:</strong> Leverages Australia's coastal
              location to provide insights into aquatic ecosystems and
              conservation efforts, making it ideal for those interested in
              environmental studies.
            </li>
            <li>
              <strong>Hospitality & Tourism Management:</strong> Prepares
              students for careers in the thriving tourism industry, offering
              practical skills for managing hospitality businesses and events.
            </li>
            <li>
              <strong>Information Technology:</strong> Covers essential areas
              such as software development and data analysis, reflecting the
              growing demand for tech professionals globally.
            </li>
            <li>
              <strong>Civil & Architectural Engineering:</strong> Equips
              students with the knowledge to contribute to infrastructure
              development, addressing the needs of a modernizing society.
            </li>
            <li>
              <strong>Law:</strong> Provides a comprehensive understanding of
              legal systems, preparing graduates for various legal careers both
              locally and internationally.
            </li>
            <li>
              <strong>Psychology:</strong> Offers insights into human behavior
              and mental processes, providing a strong foundation for careers in
              counseling, therapy, or research.
            </li>
            <li>
              <strong>Pharmacy:</strong> Prepares students for careers in
              pharmaceutical sciences, focusing on drug development and
              healthcare solutions.
            </li>
            <li>
              <strong>Computer Science:</strong> Equips students with
              programming and analytical skills necessary for various roles in
              the tech industry, including software engineering and data
              science.
            </li>
          </ul>
          <p
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Australia's educational tapestry weaves together diverse
            opportunities for international students in Australia, resonating
            with the spirit of exploration and learning. As international
            students study in Australia, they partake in a transformative
            experience that not only builds academic expertise but also nurtures
            cultural understanding, international connections, and a profound
            sense of achievement.
          </p>
        </div>
        <p
          className={popularcourses.imp}
          data-aos="fade-left"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          Fascinating, right? Eager to explore further, aren't you? <br />
          Then click to discover more about the Best Courses to Study in
          Australia for International Students!
        </p>
      </div>
    </div>
  );
}

export default Popularcourses;
