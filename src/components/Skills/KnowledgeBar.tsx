import { useEffect, useState, useRef } from 'react';

interface Props {
  percentage: number;
  language: string;
}

export default function KnowledgeBar({ percentage, language }: Props) {
  const [width, setWidth] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5, once: true }
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

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [inView, percentage]);

  return (
    <div className="knowledge-bar" ref={ref}>
      <p className="knowledge-bar--language">{language}</p>
      <span
        className="knowledge-bar--inner"
        style={{ width: `${width}%` }}
      >
        &nbsp;
      </span>
      <p className="knowledge-bar--percentage">{percentage}%</p>
    </div>
  );
}

