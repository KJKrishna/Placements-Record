import React from "react";
import "./CSS/selectCompany.css";
import { Link } from "react-router-dom";


const Companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "/company/Google",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    link: "/company/Microsoft",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    link: "/company/Amazon",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    link: "/company/IBM",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    link: "/company/Samsung",
  },
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
    link: "/company/Dell",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/350px-Infosys_logo.svg.png",
    link: "/company/Infosys",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/500px-Accenture.svg.png",
    link: "/company/Accenture",
  },
  {
    name: "SumTotal",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/SumTotal.svg/500px-SumTotal.svg.png",
    link: "/company/Sumtotal",
  },
];

const SelectCompany = () => {
  return (
    <div className="container">
      <h1>Select the Company Name</h1>
      <div className="company-grid">
        {Companies.map((company) => (

          <Link key={company.name} to={company.link} className="company-card">
            <img src={company.logo} alt={`${company.name} Logo`} />
            <span>{company.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectCompany;
