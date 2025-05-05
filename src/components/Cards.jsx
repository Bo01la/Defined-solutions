import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Datacenter Modernization",
    body: "We help businesses modernize aging datacenters to improve performance, optimize costs, and embrace cloud-native technologies. Our services include:",
  },
  {
    title: "Multi-Cloud Services",
    body: "As a consultation company, we provide comprehensive guidance for cloud adoption and management across various platforms.",
  },
  {
    title: "Migration Services",
    body: "We offer expert migration services to help you move your workloads seamlessly to the cloud, a new datacenter, or within your existing infrastructure. Our services include:",
  },
  {
    title: "Network & Security",
    body: "Our team of network and security specialists offers a comprehensive suite of services to safeguard your valuable data and systems:",
  },
  {
    title: "Database Management",
    body: "Our team of database experts boasts extensive experience with leading database platforms such as Oracle, Microsoft SQL Server, MySQL, and MongoDB. We offer a comprehensive suite of services to ensure optimal database performance, security, and health:",
  },
  {
    title: "Cloud services",
    body: "Our team of cloud experts offers a comprehensive suite of services that can be broadly categorized into three main areas: Cloud Strategy & Implementation, Cloud Management, and Cloud Migration.",
  },
  {
    title: "Business Continuity & Disaster Recovery (BCDR) ",
    body: "Defined Solutions offers a comprehensive suite of Business Continuity and Disaster Recovery (BCDR) services to safeguard your critical operations and data from unforeseen disruptions.",
  },
  {
    title: "Managed Services",
    body: "Managed services value",
  },
];

function Cards() {
  return (
    <div className="flex flex-col gap-6 relative z-50">
      {services.map((content) => (
        <div className="mx-5 flex flex-col lg:flex-row justify-center lg:h-[86px] lg:justify-normal items-center gap-3 p-4 lg:px-8 lg:py-2 text-primary bg-white rounded-[48px] lg:rounded-full ">
          <h3 className="lg:min-w-[360px] text-center lg:text-start text-2xl font-black">
            {content.title}
          </h3>
          <p className="text-center lg:text-start lg:min-w-[600px] lg:text-[15px]">
            {content.body}
          </p>
          <Link
            to={"/"}
            className="relative lg:min-w-[260px] flex items-center justify-center gap-4 w-64 h-12 rounded-2xl bg-gradient-to-b from-primary to-secondary text-white font-black"
          >
            LEARN MORE
            <div className="absolute top-2 right-2 size-8 flex items-center justify-center rounded-full bg-amber-50">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-primary/70 text-xl"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
