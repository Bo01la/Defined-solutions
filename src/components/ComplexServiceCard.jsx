import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import FadeInWrapper from "./FadeInWrapper";

function ComplexServiceCard({ title, body, onToggle, isOpen }) {
  return (
    <FadeInWrapper>
      <div className="mx-5 flex flex-col lg:flex-row justify-center lg:h-[86px] lg:justify-normal items-center gap-3 p-4 lg:px-8 lg:py-2 text-primary bg-white rounded-[48px] lg:rounded-full ">
        <h3 className="lg:max-w-[360px]  text-center lg:text-start text-2xl font-black">
          {title}
        </h3>
        <p className="text-center lg:text-start lg:max-w-[700px] lg:text-[15px]">
          {body}
        </p>
        <button
          onClick={onToggle}
          className="relative lg:absolute lg:right-14 flex items-center justify-center gap-4 size-12 rounded-full bg-gradient-to-b from-primary to-secondary text-white font-black cursor-pointer"
        >
          <div className="absolute top-2 right-2 size-8 flex items-center justify-center rounded-full ">
            <FontAwesomeIcon
              icon={faArrowRight}
              className={`text-white text-2xl ${
                isOpen ? "-rotate-90" : "rotate-90"
              }`}
            />
          </div>
        </button>
      </div>
    </FadeInWrapper>
  );
}

export default ComplexServiceCard;
