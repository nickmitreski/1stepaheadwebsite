/** @type {import('next').NextConfig} */
const nextConfig = {
  // Security: Enable build-time checks for better code quality and security
  eslint: {
    // Only ignore during builds in development, not production
    ignoreDuringBuilds: process.env.NODE_ENV === 'development',
  },
  typescript: {
    // Only ignore TypeScript errors in development, enforce in production
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  // Performance optimizations
  images: {
    // Re-enable image optimization for better performance
    unoptimized: false,
    domains: ['github.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Experimental features for performance
  experimental: {
    optimizePackageImports: [
      '@react-three/fiber', 
      '@react-three/drei', 
      'three',
      'gsap',
      'framer-motion',
      'lucide-react'
    ],
  },
  
  // Compiler optimizations
  compiler: {
    // More granular console removal
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'] // Keep error logs even in production
    } : false,
  },
  
  // Build configuration
  output: 'standalone',
  
  // Security headers
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // Environment variables
  env: {
    VERCEL: process.env.VERCEL || '0',
    VERCEL_ENV: process.env.VERCEL_ENV || 'development',
    VERCEL_URL: process.env.VERCEL_URL || '',
    VERCEL_REGION: process.env.VERCEL_REGION || '',
  },
}

export default nextConfig
