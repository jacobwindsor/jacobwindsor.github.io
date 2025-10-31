import { useState } from 'react';

interface Props {
  heading: string;
  body: string | string[];
  tags: string[];
  link?: string;
  imgSrc: string;
  fallbackSrc: string;
  size?: string;
}

export default function ProjectCard({ 
  heading, 
  body, 
  tags, 
  link, 
  imgSrc, 
  fallbackSrc,
  size 
}: Props) {
  const [showDetails, setShowDetails] = useState(false);

  const bodyText = Array.isArray(body) ? body.join(' ') : body;

  const getWidth = () => {
    switch (size) {
      case 'xxsmall':
      case 'xsmall':
      case 'small':
        return '100%';
      case 'medium':
        return '50%';
      case 'large':
        return '25%';
      default:
        return '25%';
    }
  };

  const getPadding = () => {
    switch (size) {
      case 'xxsmall':
      case 'xsmall':
      case 'small':
        return '56.25%';
      case 'medium':
      case 'large':
        return '75%';
      default:
        return '75%';
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'xxsmall':
        return '0.7em';
      case 'xsmall':
        return '0.8em';
      case 'small':
        return '0.9em';
      default:
        return '1em';
    }
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      style={{
        width: getWidth(),
        fontSize: getFontSize(),
      }}
    >
      <div
        className="card--content"
        style={{
          paddingTop: getPadding(),
        }}
      >
        <picture>
          <source srcSet={imgSrc} type="image/webp" />
          <img src={fallbackSrc} alt={heading} />
        </picture>
        <div
          className={`card--overlay ${showDetails ? 'visible' : ''}`}
        >
          &nbsp;
        </div>
        <div
          className={`card--details--text ${showDetails ? 'visible' : ''}`}
        >
          <h2 className="card--details--heading">{heading}</h2>
          <ul className="card--details--tags">
            {tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          <p className="card--details--body">{bodyText}</p>
        </div>
        <h2 className={`card--simple--heading ${showDetails ? 'hidden' : ''}`}>
          {heading}
        </h2>
        {link && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`card--details--link ${showDetails ? 'visible' : ''}`}
            href={link}
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

