
import img1 from'../assets/images/micro.png'
const TestCards = () => {
  const testCards = [
    {
      id: 1,
      title: "Speaking Test",
      subtitle: "Start your",
      image: <img src={img1} alt="" />,
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      id: 2,
      title: "Listening Test", 
      subtitle: "Start your",
      image: <img src={img1} alt="" />,
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      id: 3,
      title: "Writing Test",
      subtitle: "Start your", 
      image: <img src={img1} alt="" />,
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100"
    }
  ];

  return (
    <div className="flex gap-6 p-6">
      {testCards.map((card) => (
        <div
          key={card.id}
          className={`${card.bgColor} rounded-2xl p-6 w-80 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className={`${card.iconBg} rounded-xl p-3 flex items-center justify-center`}>
              <span className="text-2xl">{card.image}</span>
            </div>
            
            {/* Text Content */}
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                {card.subtitle}
              </p>
              <h3 className="text-gray-900 text-xl font-bold">
                {card.title}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestCards;
