import { useState, useEffect } from 'react';

interface Props {
  text: string;
}

export default function TypeWriter({ text }: Props) {
  const [displayText, setDisplayText] = useState('');
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [text]);

  useEffect(() => {
    const caretTimer = setInterval(() => {
      setShowCaret(prev => !prev);
    }, 1000);

    return () => clearInterval(caretTimer);
  }, []);

  return (
    <div className="typing">
      <h2 className="subtitle">
        {displayText}
        <span className={`caret ${showCaret ? 'visible' : ''}`}>&nbsp;</span>
      </h2>
    </div>
  );
}

