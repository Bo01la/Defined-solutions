import FadeAnimation from "../components/FadeAnimation";

function Home() {
  return (
    <>
      <section className="flex flex-col pt-20 lg:px-35 h-screen items-center content-center ">
        <h1 className="pb-2 text-center text-4xl lg:text-5xl font-bold tracking-wide flex flex-col gap-1 ">
          WHO WE ARE <span>We Are A Team Of Top-Notch Service </span>
          <span>Providears</span>
        </h1>
        <FadeAnimation />

        <div>{/*buttons */}</div>
        <div>{/*section navigator on lg only */}</div>
      </section>
    </>
  );
}

export default Home;
