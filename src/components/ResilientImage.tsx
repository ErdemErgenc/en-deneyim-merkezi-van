import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackLabel,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#1E1D1C] via-[#141413] to-[#292624] text-[#FAF8F5] p-6 text-center ${className}`}
        role="img"
        aria-label={alt || fallbackLabel || 'EN Deneyim Merkezi Görseli'}
      >
        <BrandLogo variant="light" className="h-12 w-auto mb-3 opacity-90" />
        <span className="text-xs font-medium tracking-wide text-neutral-300 max-w-xs">
          {fallbackLabel || alt || 'EN Deneyim Merkezi Van'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || 'EN Deneyim Merkezi Van'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
