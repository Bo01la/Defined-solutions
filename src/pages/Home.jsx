import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Outlet />
      <div className="text-white text-5xl font-normal pt-14 lg:pt-0">
        Home Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, fuga vero reiciendis voluptatibus aliquam minus facere saepe officiis magnam obcaecati?
        {/*Home content */}
      </div>
      <Outlet />
    </>
  );
}

export default Home;
