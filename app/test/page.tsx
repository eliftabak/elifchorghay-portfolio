import React from 'react';
import BlurImage from '../components/blurImage';

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Test Blur Image</h1>
      <BlurImage
        src="/images/elifchorghay.jpg"
        alt="Elif Chorghay"
        width={400}
        height={400}
      />
      <BlurImage
        src="/images/wave.png"
        alt="wave"
        width={100}
        height={100}

      />
    </div>
  );
};

export default TestPage;
