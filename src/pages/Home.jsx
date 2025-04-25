import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Outlet />
      <div className="text-red-500 text-5xl font-semibold pt-14 lg:pt-0"> Home
        {/*Home content */}
      </div>
      <Outlet />
    </>
  );
}

export default Home;
