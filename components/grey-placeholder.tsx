import React from 'react'

interface GreyPlaceholderProps {
  width?: string | number
  height?: string | number
  className?: string
  alt?: string
  aspectRatio?: string
}

export default function GreyPlaceholder({ 
  width = '100%', 
  height = 'auto', 
  className = '', 
  alt = 'Placeholder image',
  aspectRatio
}: GreyPlaceholderProps) {
  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    aspectRatio: aspectRatio,
    backgroundColor: '#e5e7eb', // grey-200
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af', // grey-400
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '8px',
    border: '1px solid #d1d5db', // grey-300
  }

  return (
    <div 
      style={style} 
      className={`grey-placeholder ${className}`}
      role="img"
      aria-label={alt}
    >
      📷 Image Placeholder
    </div>
  )
}
