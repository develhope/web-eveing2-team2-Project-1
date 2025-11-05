const CardList = ({ cards, CardComponent, className = "" }) => (
  <div className={`cards ${className}`}>
    {cards.map((card, index) => (
      <CardComponent key={index} {...card} />
    ))}
  </div>
);

export default CardList;
