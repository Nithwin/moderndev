const UnderLine = ({className}: {className: string}) => {
  return (
    <svg className={className} viewBox="0 0 326 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4C130.409 19.3682 200.076 18.5961 322 4" stroke="url(#paint0_linear_213_3)" strokeWidth="8" strokeLinecap="round"/>
      <defs>
        <linearGradient id="paint0_linear_213_3" x1="-119.263" y1="17.747" x2="443.002" y2="-11.6758" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EB0000"/>
          <stop offset="1" stopColor="#FF00B3"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default UnderLine;
