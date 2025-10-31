import { useEffect, useState, useRef } from 'react';

interface Props {
  title: string;
  subtitle: string;
  iconSrc: string;
  iconFallbackSrc: string;
  date: string;
  children: React.ReactNode;
  right?: boolean;
}

export default function WorkItem({
  title,
  subtitle,
  iconSrc,
  iconFallbackSrc,
  date,
  children,
  right = false,
}: Props) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3, once: true }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="work-item" ref={ref}>
      <div className="work-item--image">
        <picture>
          <source srcSet={iconSrc} type="image/webp" />
          <img src={iconFallbackSrc} alt={title} />
        </picture>
      </div>
      <div
        className="work-item--text"
        style={{
          [right ? 'left' : 'right']: inView ? '0vw' : '50vw',
        }}
      >
        <div className="work-item--arrow">&nbsp;</div>
        <h3 className="work-item--title">{title}</h3>
        <h4 className="work-item--subtitle">{subtitle}</h4>
        {children}
        <span className="work-item--date">{date}</span>
      </div>
    </div>
  );
}

