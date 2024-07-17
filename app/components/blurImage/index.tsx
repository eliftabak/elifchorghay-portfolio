"use client";

import { useState } from 'react';
import Image from 'next/image';

interface BlurImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, width, height, className }) => {
  const [loaded, setLoaded] = useState(false);

  const placeholder = `/images/placeholders/placeholder-${src.split('/').pop()}`;

  return (
    <div style={{ position: 'relative', width, height }}>
      {!loaded && (
        <Image
          src={placeholder}
          alt={alt}
          fill
          style={{ filter: 'blur(20px)', transition: 'opacity 0.2s ease-in-out' }}
          className={className}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
};

export default BlurImage;
