const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-col flex-1">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-red-400">Super</span>
          <span className="text-red-400">Quality </span> Shoes
        </h2>
        <p className="font-montserrat text-slate-500 text-lg mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="View Details" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default SuperQuality;
