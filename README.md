# 1 Step Ahead - Financial Education Website

A modern, responsive website for 1 Step Ahead financial education programs, built with Next.js 15, React Three Fiber, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, professional UI with tangerine branding
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎭 **3D Elements**: Interactive 3D cube in hero section using React Three Fiber
- 📊 **Animated Stats**: Counter animations with GSAP scroll triggers
- 🎯 **Performance**: Optimized for Vercel deployment
- ♿ **Accessible**: WCAG compliant with proper ARIA labels

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: GSAP + Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nickmitreski/1steplatest.git
cd 1steplatest
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Your site will be available at `https://your-app.vercel.app`

### Manual Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── programs/          # Programs page
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── hero-cube.tsx     # 3D hero cube
│   └── ...
├── public/               # Static assets
└── lib/                  # Utility functions
```

## Key Components

- **Hero Section**: Features animated text with 3D rotating cube
- **Stats Section**: Animated counters with scroll triggers
- **Quote Breaks**: Highlighted text with tangerine accents
- **Team Section**: Professional team information
- **Contact Form**: Functional contact form

## Customization

### Colors
- Primary: `#FFA800` (Tangerine)
- Background: Various grays and whites
- Text: Black and gray tones

### 3D Elements
The hero cube can be customized in `components/hero-cube.tsx`:
- Change geometry (box, sphere, etc.)
- Modify materials and colors
- Add more 3D objects
- Adjust animations

## Performance

- Optimized images and assets
- Lazy loading for 3D components
- Minimal bundle size
- Fast loading times

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to 1 Step Ahead.

## Contact

For questions about this website, contact hello@1stepahead.au
