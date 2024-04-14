import { socials } from "../constants";
import Section from "./Section";

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 flex-col sm:flex-row">
                {/* Dynamic year and copyright text */}
                <p className="caption text-n-4 lg:block">&copy; {new Date().getFullYear()} Brainwave | All rights reserved</p>
                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item) => (
                        <li key={item.id}>
                            <a href={item.url}
                                target="_blank" className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6">
                                <img
                                    width={16}
                                    height={16}
                                    src={item.iconUrl}
                                    alt={item.altText}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;
