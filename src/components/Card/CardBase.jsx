const CardBase = ({ children, className = "" }) => {
  return <div className={`card-base card ${className}`}>{children}</div>;
};

export { CardBase };
