import nist from "./images/RandR.png";
import osv from "./images/osv.png";
import osvMov from "./images/OSV.mov";
import umdprof from "./images/umdprof.png";
import proj320 from "./images/COVID_Chart.png";
import refresh from "./images/refresh.png";
import sus from "./images/sus.png"
import site from "./images/site.png"

export const data = [{
    title: "NIST COVID-19 Search Engine",
    src: nist,
    desc: `Online dataset containing 100,000+ search terms that utilizes NIST-developed “root and rule” to provide users with information on COVID-19`,
    tech: "HTML/CSS, JavaScript, C#, SQL",
    link: "https://randr19.nist.gov/",
}, {
    title: "Refresh",
    src: refresh,
    desc: "Productivity website that allows users to create tasks lists and view the weather and news using API calls.",
    tech: "HTML/CSS, JavaScript, Node, Express, MongoDB",
    link: "https://www.youtube.com/watch?v=6gatc2WyM-8"
}, {
    title: "Sustainabli",
    src: sus,
    desc: "Website as part of a UMD startup to help reduce waste in research labs. The program has successfully reduced over 6 tons of CO2 waste",
    tech: "React, JavaScript, Node, Express, HTML/CSS",
    link: "https://sustainabli.herokuapp.com/"
}, {
    title: "Over Sand Vehicle (OSV)",
    src: osv,
    desc: "Constructed autonomous vehicle that traversed sand with a group of 8 people. Developed navigation code that avoided obstacles using Arduino WIFI Module",
    tech: "C++",
    link: osvMov,
}, {
    title: "COVID-19 on Academic Performance",
    src: proj320,
    desc: "Data science project Investigating the effectsof the COVID-19 pandemic on academic performance in Maryland.",
    tech: "Python, Pandas, Matplotlib, Scikit-learn",
    link: "https://ahong8595.github.io/COVID-19.html",
}, {
    title: "UMD Course and Professor Catalog",
    src: umdprof,
    desc: "Calculates the average GPA for a course and determines the best professor for a course based on their reviews",
    tech: "Python",
    link: "",
}, {
    title: "This website",
    src: site,
    desc: "Personal portfolio of my work",
    tech: "React, Node, React-Bootstrap",
}]