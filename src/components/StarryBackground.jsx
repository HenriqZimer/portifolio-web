'use client';

import React, { useEffect, useState } from 'react';

const StarryBackground = () => {
  const [mounted, setMounted] = useState(false);
  const [shadows, setShadows] = useState({ small: '', medium: '', large: '' });

  useEffect(() => {
    const generateShadows = (count) => {
      const shadow = [];

      for (let i = 0; i < count; i += 1) {
        shadow.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`);
      }

      return shadow.join(', ');
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShadows({
      small: generateShadows(300),
      medium: generateShadows(150),
      large: generateShadows(50)
    });
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 z-0 bg-[#03050a]" />;
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#03050a]">
      <style>
        {`
          @keyframes animStar {
            from { transform: translateY(0px); }
            to { transform: translateY(-2000px); }
          }
          .stars-small {
            width: 1px; height: 1px; background: transparent;
            box-shadow: ${shadows.small};
            animation: animStar 100s linear infinite;
          }
          .stars-small:after {
            content: " "; position: absolute; top: 2000px;
            width: 1px; height: 1px; background: transparent;
            box-shadow: ${shadows.small};
          }
          .stars-medium {
            width: 2px; height: 2px; background: transparent;
            box-shadow: ${shadows.medium};
            animation: animStar 75s linear infinite;
          }
          .stars-medium:after {
            content: " "; position: absolute; top: 2000px;
            width: 2px; height: 2px; background: transparent;
            box-shadow: ${shadows.medium};
          }
          .stars-large {
            width: 3px; height: 3px; background: transparent;
            box-shadow: ${shadows.large};
            animation: animStar 50s linear infinite;
          }
          .stars-large:after {
            content: " "; position: absolute; top: 2000px;
            width: 3px; height: 3px; background: transparent;
            box-shadow: ${shadows.large};
          }
        `}
      </style>

      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-800/10 rounded-full blur-[150px]" />

      <div className="stars-small" />
      <div className="stars-medium" />
      <div className="stars-large" />
    </div>
  );
};

export default StarryBackground;
