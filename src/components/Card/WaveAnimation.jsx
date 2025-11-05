const WaveAnimation = () => {
  return (
    <div className="wave-container">
      <svg viewBox="0 0 120 28" preserveAspectRatio="none">
        <path d="M0 10 Q30 20 60 10 T120 10 V30 H0 Z" fill="#F8B097">
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0 10 Q30 20 60 10 T120 10 V30 H0 Z;
              M0 15 Q30 10 60 15 T120 15 V30 H0 Z;
              M0 10 Q30 20 60 10 T120 10 V30 H0 Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveAnimation;
