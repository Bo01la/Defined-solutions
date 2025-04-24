import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Outlet />
      <h1 className="text-pink-500 text-5xl font-semibold">hello bolla</h1>
      <Outlet />
    </>
  );
}

export default Home;
