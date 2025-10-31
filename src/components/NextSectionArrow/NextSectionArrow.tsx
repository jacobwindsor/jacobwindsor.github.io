import { useState } from 'react';

interface Props {
  sectionName: string;
}

export default function NextSectionArrow({ sectionName }: Props) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).scrollToSection) {
      (window as any).scrollToSection(sectionName);
    }
  };

  return (
    <div 
      className="next-section"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <h2 
        className="next-section--heading"
        style={{ marginTop: showDetails ? 0 : '-1000px' }}
      >
        {sectionName}
      </h2>
      <button
        className="next-section--arrow"
        onClick={handleClick}
        aria-label={`Scroll to ${sectionName} section`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
}

