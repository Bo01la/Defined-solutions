import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Services() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get("service");

  const [service, setService] = useState(initialService);

  {
    /* manually set the service in sub-nav */
  }
  const selectServiceHandler = (key) => setService(key);

  {
    /* dynamically set the service */
  }
  useEffect(() => {
    setService(initialService);
  }, [initialService]);

  return (
    <>
      <button onClick={() => selectServiceHandler("1")}>1</button>
      <button onClick={() => selectServiceHandler("2")}>2</button>
      {service === "1" && (
        <h1 className="text-red-500 text-5xl font-semibold pt-14 lg:pt-0">
          services 1
        </h1>
      )}
      {service === "2" && (
        <h1 className="text-red-500 text-5xl font-semibold pt-14 lg:pt-0">
          services 2
        </h1>
      )}
      {service === "3" && (
        <h1 className="text-red-500 text-5xl font-semibold pt-14 lg:pt-0">
          services 333333333
        </h1>
      )}
    </>
  );
}

export default Services;
