import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SimpleServiceCard from "../components/SimpleServiceCard";
import ComplexServiceCard from "../components/ComplexServiceCard";

function Services() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service");

  const [service, setService] = useState(initialService);
  const [subService, setSubService] = useState(false);
  const [nestedService, setNestedService] = useState(0);

  {
    /* manually set the service in sub-nav */
  }
  const selectServiceHandler = (key) => {
    setService(key);
    setSubService(false);
    setNestedService(0);
  };

  {
    /* dynamically set the service */
  }
  useEffect(() => {
    setService(initialService);
  }, [initialService]);

  const subServicehandler = () => {
    setSubService(!subService);
    setNestedService(0);
  };
  const nestedServiceHandler = (key) => {
    nestedService === key ? setNestedService(0) : setNestedService(key);
  };

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
                  </div>
                </>
              )}
            </div>
          )}
          {/*Private Multi-Cloud Services */}
          {service === "6" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={subServicehandler}
                title={"Cloud services"}
                body={
                  "Our team of cloud experts offers a comprehensive suite of services that can be broadly categorized into three main areas: Cloud Strategy & Implementation, Cloud Management, and Cloud Migration."
                }
              />
              {subService && (
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-2">
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(1)}
                      title={"1. Cloud Strategy & Implementation:"}
                    />
                    {nestedService === 1 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- Cloud Assessment & Planning:"}
                          subBody={
                            "This service helps businesses evaluate their current IT infrastructure and applications to determine the best cloud adoption strategy (public, private, hybrid). It involves analyzing workloads, security needs, budget constraints, and compliance requirements to create a customized cloud roadmap."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Cloud Architecture Design:"}
                          subBody={
                            "Experts design a secure and scalable cloud architecture that aligns with your business goals. This includes selecting the appropriate cloud platform, designing infrastructure components, and integrating with on-premises systems."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Cloud Implementation:"}
                          subBody={
                            "This service involves provisioning cloud resources, configuring services, and deploying applications to the chosen cloud platform. Experts ensure a smooth and secure transition to the cloud environment."
                          }
                        />
                      </>
                    )}
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(2)}
                      title={"2. Cloud Management:"}
                    />
                    {nestedService === 2 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- Cloud Cost Optimization:"}
                          subBody={
                            "Help you optimize your cloud spending by analyzing usage patterns, identifying cost-saving opportunities (reserved instances, discounts), and recommending resource allocation strategies."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Cloud Security Management:"}
                          subBody={
                            "Maintaining robust security in the cloud is crucial. We offer ongoing security monitoring, vulnerability assessments, and threat detection services to safeguard your cloud environment."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Cloud Performance Management:"}
                          subBody={
                            "Monitoring and optimizing cloud performance is essential for smooth operations. Utilize tools and expertise to monitor application performance, identify bottlenecks, and troubleshoot issues."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Cloud Patch Management:"}
                          subBody={
                            "Keeping software in your cloud environment up-to-date with security patches is crucial. Our team can automate patch management processes to ensure your systems stay protected."
                          }
                        />
                      </>
                    )}
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(3)}
                      title={"3. Cloud Migration:"}
                    />
                    {nestedService === 3 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- Cloud Migration Planning & Strategy:"}
                          subBody={
                            "Planning a successful cloud migration requires careful consideration. Our team help define migration goals, timelines, and dependencies, while selecting the most appropriate migration approach (lift-and-shift, refactoring, etc.) for each workload."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Cloud Migration Execution:"}
                          subBody={
                            "Executing the migration plan involves moving data, applications, and infrastructure to the cloud platform. Our team handle the technical complexities of migration, ensuring minimal disruption to ongoing operations."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Post-Migration Support:"}
                          subBody={
                            "Even after migrating to the cloud, ongoing support is crucial. Defined Solutions offer assistance with post-migration optimization, performance monitoring, and security management to ensure a smooth transition."
                          }
                        />
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
          {/*Business Continuity and Disaster Recovery (BCDR) */}
          {service === "7" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={subServicehandler}
                title={"Business Continuity and Disaster Recovery (BCDR)"}
                body={
                  "We help you develop a robust BCDR strategy and implement the necessary technologies to ensure minimal downtime and a swift recovery in the event of a disaster. Our BCDR professional services include:"
                }
              />
              {subService && (
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-col gap-2">
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(1)}
                      title={"1. Backup and Data Protection Services "}
                    />
                    {nestedService === 1 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- Data Backup solutions:"}
                          subBody={
                            "We design and implement a secure data backup strategy that utilizes industry-leading backup technologies. This may include local backups, cloud backups, and a combination of both for optimal redundancy."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Data Archiving:"}
                          subBody={
                            "We establish a data archiving strategy to ensure long-term data retention according to your compliance requirements."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Data Recovery Services:"}
                          subBody={
                            "We develop and test data recovery procedures to ensure you can efficiently restore critical data in case of a disaster."
                          }
                        />
                      </>
                    )}
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(2)}
                      title={"2. Replication Services  "}
                    />
                    {nestedService === 2 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- Disaster Recovery Site Replication:"}
                          subBody={
                            "We configure real-time or periodic data replication to a secondary disaster recovery (DR) site to minimize data loss in case of an outage at the primary site."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Application Replication:"}
                          subBody={
                            "We replicate critical applications to the DR site to ensure their continued availability during a disaster."
                          }
                        />
                      </>
                    )}
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(3)}
                      title={"3. Building Disaster Recovery Services"}
                    />
                    {nestedService === 3 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- DR Site Assessment and Selection:"}
                          subBody={
                            "We help you assess your DR site needs and assist in selecting the most suitable DR location based on factors like cost, security, and recovery time objectives (RTOs)."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={
                            "- DR Infrastructure Design and Implementation:"
                          }
                          subBody={
                            "We design, build, and configure your DR infrastructure, ensuring it can seamlessly support your critical business functions in case of a primary site outage."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- DR Orchestration and Automation:"}
                          subBody={
                            "We implement DR orchestration and automation tools to streamline the disaster recovery process, minimizing manual intervention and human error."
                          }
                        />
                      </>
                    )}
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(4)}
                      title={"4. Building Business Continuity Planning"}
                    />
                    {nestedService === 4 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- Business Impact Analysis (BIA):"}
                          subBody={
                            "We conduct a BIA to identify your critical business functions, their dependencies on IT systems, and the potential impact of disruptions."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- Risk Assessment:"}
                          subBody={
                            "We assess potential threats and vulnerabilities that could disrupt your operations and develop mitigation strategies."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={
                            "- Business Continuity Plan (BCP) Development:"
                          }
                          subBody={
                            "We collaborate with your team to create a comprehensive BCP that outlines recovery procedures, roles and responsibilities, and communication protocols in the event of a disaster."
                          }
                        />
                      </>
                    )}
                    <ComplexServiceCard
                      onToggle={() => nestedServiceHandler(5)}
                      title={"5. DR Drills and Runbooks"}
                    />
                    {nestedService === 5 && (
                      <>
                        <SimpleServiceCard
                          subTitle={"- DR Testing and Validation:"}
                          subBody={
                            "We conduct regular DR drills to test your BCDR plan, identify any gaps, and ensure your team is prepared to execute recovery procedures effectively."
                          }
                        />
                        <SimpleServiceCard
                          subTitle={"- DR Runbook Development:"}
                          subBody={
                            "We develop and maintain DR runbooks that document detailed recovery procedures for various disaster scenarios, ensuring a smooth and coordinated response during an outage."
                          }
                        />
                      </>
                    )}
                  </div>
                </div>
              )}
              {}
            </div>
          )}
          {service === "8" && (
            <div className="flex flex-col gap-6 relative z-50 ">
              <ComplexServiceCard
                onToggle={() => nestedServiceHandler(1)}
                title={"Managed Services"}
                body={"Managed services value"}
              />
              {nestedService === 1 && (
                <>
                  <div className="flex flex-col gap-2.5">
                    <SimpleServiceCard
                      subTitle={"- Cost savings:"}
                      subBody={
                        "By outsourcing IT services, a company can avoid the need to hire and train its own IT staff. This can save money on salaries, benefits, and office space."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Improved efficiency:"}
                      subBody={
                        "MSPs have the expertise and experience to manage IT systems efficiently. This can free up a company's internal IT staff to focus on more strategic projects."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Increased security:"}
                      subBody={
                        "MSPs can provide businesses with the latest security tools and expertise to help protect their data from cyberattacks."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"- Peace of mind:"}
                      subBody={
                        "Knowing that their IT systems are being monitored and managed by experts can give business owners peace of mind."
                      }
                    />
                  </div>
                </>
              )}
              <ComplexServiceCard
                onToggle={() => nestedServiceHandler(2)}
                title={"Managed Services"}
                body={"Managed Services Models"}
              />
              {nestedService === 2 && (
                <>
                  <div className="flex flex-col gap-2.5">
                    <SimpleServiceCard
                      subTitle={"1.Break/Fix Model:"}
                      subBody={
                        "Break/Fix Model services are provided on an as-needed basis. When a problem arises, Our managed services is engaged to fix it, and the client pays for the services rendered."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"2. Managed Services Provider (MSP) Model:"}
                      subBody={
                        "Our managed service team takes on a proactive role in managing the client's IT infrastructure. Services include monitoring, maintenance, support, and sometimes strategic planning."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"3. Cloud Services Model:"}
                      subBody={
                        "Our managed service include managing cloud infrastructure, platforms, and applications, as well as providing support for cloud migrations and optimizations."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"4. Co-Managed IT Services Model:"}
                      subBody={
                        "In this model, our managed service team works alongside the client's internal IT team to complement their capabilities. The provider may handle specific tasks or areas of expertise while the internal team manages others. This model allows for a collaborative approach to IT management."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={"5. Outsourced IT Department Model:"}
                      subBody={
                        "Fully dedicated outsource team provided to customer to manage ICT environment. This includes all aspects of IT management, from help desk support to network infrastructure maintenance and strategic planning."
                      }
                    />
                    <SimpleServiceCard
                      subTitle={
                        "6. Value-Added Managed services after delivery:"
                      }
                      subBody={
                        "Provide dedicated resources for a period of time 3/6/12 months to manage the customer environment after a project delivery."
                      }
                    />
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
