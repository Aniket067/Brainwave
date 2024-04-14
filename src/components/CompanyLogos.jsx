import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem] relative"
            key={index}
          >
            
            <div className="logo-wrapper">
              <img src="https://freelogopng.com/images/all_img/1681142315open-ai-logo.png" width={134} height={28} alt={`Logo ${index}`} />
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-r mix-blend-mode-multiply " />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
