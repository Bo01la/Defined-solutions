import Inputs from "../components/Inputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faArrowRight,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function ContactUS() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [warning, setWarning] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const newWarnings = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email),
      phone: !formData.phone.trim() || !/^[0-9]{10,15}$/.test(formData.phone),
      message: !formData.message.trim(),
    };

    setWarning(newWarnings);

    return !Object.values(newWarnings).some(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending to backend:", formData);
    if (!validateForm()) return;
  };

  return (
    <>
      {/* <section className=" bg-gradient-to-b from-[#02242e] to-dark lg:bg-[url('/assets/images/ELLIPSE-simple.png')] lg:bg-cover relative top-12 lg:-top-22 z-0 bg-center "> */}
      <section className="relative top-12 lg:-top-22 z-0  ">
        <div className="absolute z-0 -top-[37rem] lg:top-0 bg-[url('/assets/images/ELLIPSE-simple.png')] bg-cover bg-center lg:bg-bottom h-[150vh] lg:h-[100vh] w-[100vw]"></div>
        <div className=" relative py-10 px-4 lg:pt-50 lg:px-0 lg:pl-24 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 z-10">
          <div className="flex flex-col gap-6 lg:pt-10">
            {/* controls both form and title*/}
            <div className="px-6 text-center flex flex-col gap-1.5">
              <h1 className="text-2xl font-black lg:text-5xl lg:font-bold">
                CONTACT US
              </h1>
              <p className="text-sm tracking-wider">
                We are always here to help out whatever way you can
              </p>
            </div>
            <form action="" className="flex flex-col gap-4">
              <Inputs
                type="text"
                name="name"
                value={formData.name}
                id="name"
                icon={faUser}
                label="Name"
                onChange={handleChange}
                warning={warning.name}
                warningMessage="Please enter a valid name"
              />
              <Inputs
                type="text"
                name="email"
                value={formData.email}
                id="email"
                icon={faEnvelope}
                label="Email"
                onChange={handleChange}
                warning={warning.email}
                warningMessage="Please enter a valid email address"
              />
              <Inputs
                type="text"
                name="phone"
                value={formData.phone}
                id="phone"
                icon={faPhone}
                label="Phone"
                onChange={handleChange}
                warning={warning.phone}
                warningMessage="Please enter a valid phone number"
              />
              <div className="w-full rounded-xl bg-[#d2d5d6] relative">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="2"
                  value={formData.message}
                  onChange={handleChange}
                  className="peer p-4 pl-12 w-full rounded-xl focus:outline-none text-lg text-[#161A1C]"
                ></textarea>
                <label
                  htmlFor="message"
                  className={`absolute left-8  text-[#161A1C80] tracking-widest transition-all duration-200 ${
                    formData.message ? "top-0 text-sm" : "top-4 text-xl"
                  } peer-focus:top-0 peer-focus:text-sm`}
                >
                  Enter your message
                </label>
                {warning.message && (
                  <span className="text-sm text-red-500 pl-12">
                    please enter a valid message
                  </span>
                )}
              </div>
              <button
                onClick={handleSubmit}
                className=" relative min-h-12 bg-gradient-to-b from-primary to-secondary text-lg font-bold tracking-widest rounded-xl cursor-pointer "
              >
                Send
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="absolute top-3 left-8 -rotate-45 text-2xl"
                />
                {/* <div className="absolute top-2 left-6 flex justify-center items-center size-8 bg-amber-50 rounded-full">
                </div> */}
              </button>
            </form>
          </div>
          <a
            href="https://maps.app.goo.gl/4PAP7WgCNVoCsu198"
            target="blank"
            className="bg-[url('/assets/images/location_image.png')] h-[calc(80vw-100px)] w-full lg:h-150 rounded-3xl lg:rounded-l-[50px] lg:rounded-r-none bg-cover lg:bg-cover lg:bg-center bg-no-repeat shadow-xl lg:shadow-none shadow-amber-50/20"
          ></a>
        </div>
      </section>
    </>
  );
}
export default ContactUS;
