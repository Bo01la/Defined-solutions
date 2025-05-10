import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Inputs({
  type,
  name,
  value,
  id,
  onChange,
  icon,
  label,
  warning,
  warningMessage,
}) {
  return (
    <div className="w-full rounded-xl bg-[#d2d5d6] relative">
      <input
        type={type}
        name={name}
        placeholder=""
        value={value}
        id={id}
        onChange={onChange}
        className="peer p-4 pl-12 w-full rounded-xl focus:outline-none text-lg text-[#161A1C]"
      />
      <label
        htmlFor={id}
        className={`absolute left-12  text-[#161A1C80] tracking-widest transition-all duration-200 ${
          value ? "top-0 text-sm" : "top-4 text-xl"
        } peer-focus:top-0 peer-focus:text-sm`}
      >
        {label}
      </label>
      <FontAwesomeIcon
        icon={icon}
        className={`text-4xl absolute top-3 left-2 ${
          icon === faEnvelope || icon === faPhone ? "text-[30px]" : null
        }`}
      />
      {warning && (
        <span className="text-sm text-red-500 pl-12">{warningMessage}</span>
      )}
    </div>
  );
}

export default Inputs;
