import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Outlet />
      <div className="text-white text-5xl font-normal pt-14 lg:pt-0">
        HOME lorem80
        {/*Home content */}
      </div>
      <Outlet />
    </>
  );
}

export default Home;
