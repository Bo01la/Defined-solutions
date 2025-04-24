import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Outlet />
      <div>{/*Home content */}</div>
      <Outlet />
    </>
  );
}

export default Home;
