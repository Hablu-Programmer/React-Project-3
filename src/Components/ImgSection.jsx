function ImgSection() {
  const cards = [
    { imgSrc: "/img1.png", title: "Eat & Drink" },
    { imgSrc: "/img2.png", title: "Event" },
    { imgSrc: "/img3.png", title: "Club" },
    { imgSrc: "/img4.png", title: "Things to do" },
  ];
  return (
    <section>
      <h1 className="text-center text-[#26395C] text-2xl lg:text-6xl font-bold mt-10 mb-8">
        What are you in the mood for?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-5 mb-10 container mx-auto p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center overflow-hidden"
          >
            <img
              className="w-full  h-[500px] lg:h-[650px]"
              src={card.imgSrc}
              alt=""
            />
            <div>
              <h2 className="text-[#26395C] font-semibold text-2xl mt-4 mb-4">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImgSection;
