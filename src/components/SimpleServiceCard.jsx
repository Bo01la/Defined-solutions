function SimpleServiceCard({ subTitle, subBody }) {
  return (
    <div className="mx-5 flex flex-col lg:flex-row justify-start min-h-40 lg:min-h-[86px] lg:justify-normal items-center gap-3 p-4 lg:px-8 lg:py-2 text-primary bg-white rounded-[48px] lg:rounded-full ">
      <h4 className="lg:min-w-[360px] text-center lg:text-start text-1xl font-semibold">
        {subTitle}
      </h4>
      <p className="text-center lg:text-start lg:min-w-[600px] lg:text-[15px]">
        {subBody}
      </p>
    </div>
  );
}

export default SimpleServiceCard;
