import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SimpleServiceCard from "../components/SimpleServiceCard";
import ComplexServiceCard from "../components/ComplexServiceCard";

const data = [
  {
    title: "main title",
    body: "main body",
    subtags: [
      {
        subtitle: "sub title 1",
        subbody: "sub body 1",
      },
      {
        subtitle: "sub title 2",
        subbody: "sub body 2",
      },
      {
        subtitle: "sub title 3",
        subbody: "sub body 3",
      },
    ],
  },
  {
    title: "main title",
    body: "main body",
    subtags: [
      {
        subtitle: "sub title 1",
        subbody: "sub body 1",
      },
      {
        subtitle: "sub title 2",
        subbody: "sub body 2",
      },
      {
        subtitle: "sub title 3",
        subbody: "sub body 3",
      },
      {
        subtitle: "sub title 4",
        subbody: "sub body 4",
      },
    ],
  },
];

function Services() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service");

  const [service, setService] = useState(initialService);
  const [subService, setSubService] = useState(false);

  {
    /* manually set the service in sub-nav */
  }
  const selectServiceHandler = (key) => {
    setService(key);
    setSubService(false);
  };

  {
    /* dynamically set the service */
  }
  useEffect(() => {
    setService(initialService);
  }, [initialService]);

  const subServicehandler = () => setSubService(!subService);

  return (
    <>
      <section className=" bg-gradient-to-b from-[#02242e] to-dark lg:bg-[url('/assets/images/background_design_1.png')] lg:bg-cover relative top-12 lg:-top-22 z-0 bg-center ">
        <div className="py-10 px-4 lg:pt-50 lg:px-0 lg:pl-24 ">
          {/*sub nav */}
          <div>
            <button onClick={() => selectServiceHandler("1")}>1</button>
            <br />
            <button onClick={() => selectServiceHandler("2")}>2</button>
            <br />
            <button onClick={() => selectServiceHandler("3")}>3</button>
            <br />
            <button onClick={() => selectServiceHandler("4")}>4</button>
            <br />
            <button onClick={() => selectServiceHandler("5")}>5</button>
            <br />
            <button onClick={() => selectServiceHandler("6")}>6</button>
            <br />
            <button onClick={() => selectServiceHandler("7")}>7</button>
            <br />
            <button onClick={() => selectServiceHandler("8")}>8</button>
            <br />
          </div>
        </div>
      </section>
      <section>
        <div>
          {/*Data Center Modernization */}
          {service === "1" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={subServicehandler}
                title={"Datacenter Modernization"}
                body={
                  "We help businesses modernize aging datacenters to improve performance, optimize costs, and embrace cloud-native technologies. Our services include:"
                }
              />
              {subService && (
                <>
                  <div className="flex flex-col gap-3.5">
                    <SimpleServiceCard
                      subTitle={"- Datacenter assessments and roadmaps:"}
                      subBody={
                        "We analyze your current infrastructure and create a strategic plan for modernization."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Hardware refresh and consolidation:"}
                      subBody={
                        "We recommend and implement upgrades to your existing hardware for optimal performance and efficiency."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={
                        "- Software-defined datacenter (SDDC) solutions:"
                      }
                      subBody={
                        "We assist in implementing SDDC solutions to automate and simplify datacenter management."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Hybrid and multi-cloud integration:"}
                      subBody={
                        "We help you seamlessly integrate your on-premises datacenter with leading public, local and private cloud platforms."
                      }
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {/*Migration Services */}
          {service === "2" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={subServicehandler}
                title={"Migration Services"}
                body={
                  "We offer expert migration services to help you move your workloads seamlessly to the cloud, a new datacenter, or within your existing infrastructure. Our services include:"
                }
              />
              {subService && (
                <>
                  <div className="flex flex-col gap-3.5">
                    <SimpleServiceCard
                      subTitle={"- Workload migrations:"}
                      subBody={
                        "We migrate your applications and associated resources (servers, storage, databases) securely and efficiently to your desired destination."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Application and data migration: "}
                      subBody={
                        "We migrate your applications and data securely and efficiently to your desired destination."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Database migration:"}
                      subBody={
                        "We migrate your databases to the most suitable platform for optimal performance and scalability."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Storage migration: "}
                      subBody={
                        "We migrate your storage infrastructure to a modern and reliable solution."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Network and security migration:"}
                      subBody={
                        "We plan and execute the migration of your network infrastructure and security controls to the new environment, ensuring minimal disruption and maintaining robust security posture."
                      }
                    />
                  </div>
                </>
              )}
            </div>
          )}
          {/*Network & Security */}
          {service === "3" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={subServicehandler}
                title={"Network & Security"}
                body={
                  "Our team of network and security specialists offers a comprehensive suite of services to safeguard your valuable data and systems:"
                }
              />
              {subService && (
                <>
                  <div className="flex flex-col gap-3.5">
                    <SimpleServiceCard
                      subTitle={"- Network Design and Implementation:"}
                      subBody={
                        "We design and implement secure, scalable network solutions for datacenters and enterprise environments."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Network Migration:"}
                      subBody={
                        "We assist with migrating your network infrastructure from legacy setups to Software-Defined Networking (SDN) for increased flexibility and automation."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Network Assessment:"}
                      subBody={
                        "We conduct in-depth network assessments to identify vulnerabilities, optimize performance, and ensure alignment with your business needs."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Security Implementation and Migration:"}
                      subBody={
                        "We deploy and configure best-in-class security solutions (from leading vendors like Fortinet, Palo Alto Networks, F5 Networks, Cisco, and Trend Micro) and migrate your existing security infrastructure to a more robust platform."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Security Assessments:"}
                      subBody={
                        "We conduct comprehensive security assessments to identify potential threats and vulnerabilities, helping you proactively manage your security posture."
                      }
                    />
                  </div>
                </>
              )}
            </div>
          )}
          {/*Database Management */}
          {service === "4" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={subServicehandler}
                title={"Database Management"}
                body={
                  "Our team of database experts boasts extensive experience with leading database platforms such as Oracle, Microsoft SQL Server, MySQL, and MongoDB. We offer a comprehensive suite of services to ensure optimal database performance, security, and health:"
                }
              />
              {subService && (
                <>
                  <div className="flex flex-col gap-3.5">
                    <SimpleServiceCard
                      subTitle={"- Database Assessment:"}
                      subBody={
                        "We conduct in-depth assessments of your database infrastructure to identify performance bottlenecks, security vulnerabilities, and optimization opportunities."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Database Installation and Upgrades:"}
                      subBody={
                        "We assist with the installation and upgrade of your database software, ensuring a smooth and efficient process."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Database Migration:"}
                      subBody={
                        "We help you migrate your databases to the most suitable platform for your needs, whether it's a cloud-based solution, a new on-premises server, or a different database engine"
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Database Re-platforming:"}
                      subBody={
                        "We can assist with re-platforming your databases to a different platform to leverage the latest features, improve scalability, or reduce costs."
                      }
                    />
                  </div>
                </>
              )}
            </div>
          )}
          {/*Private Multi-Cloud Services */}
          {service === "5" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={subServicehandler}
                title={"Private Multi-Cloud Services"}
                body={
                  "As a consultation company, we provide comprehensive guidance for cloud adoption and management across various platforms. Our services encompass:"
                }
              />
              {subService && (
                <>
                  <div className="flex flex-col gap-3.5">
                    <SimpleServiceCard
                      subTitle={"- Cloud strategy and planning:"}
                      subBody={
                        "We help you define your cloud adoption goals and create a customized cloud roadmap."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Cloud implementation and migration:"}
                      subBody={
                        "We seamlessly migrate your workloads to the cloud platform of your choice."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Multi-cloud management:"}
                      subBody={
                        "We provide ongoing management services to ensure optimal performance, security, and cost efficiency across your multi-cloud environment."
                      }
                    />
                    <SimpleServiceCard subTitle={"- "} subBody={""} />
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Services;
