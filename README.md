[README.md](https://github.com/user-attachments/files/25309024/README.md)
# AQSURV - Enterprise Surveying Solutions

A premium website for AQSURV, an enterprise surveying platform powered by DJI technology.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Using Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Using GitHub Integration
1. Push this code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure build settings
5. Click Deploy

### Option 3: Manual Upload
1. Go to [vercel.com](https://vercel.com)
2. Create a new project
3. Upload the project folder
4. Click Deploy

## Project Structure

```
├── app/
│   ├── page.js           # Home page (root route)
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
├── components/
│   └── aqsurv.jsx        # Main AQSURV component
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json          # Vercel configuration
```

## Technologies Used

- **Next.js 14** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React** - UI library

## Features

- Responsive design
- Smooth scrolling and animations
- Product showcase sections
- Use case demonstrations
- Franchise opportunity section
- Call-to-action sections
- Dark theme with cyan accents

## Troubleshooting

### 404 Error on Deployment
If you see a 404 error after deploying, ensure:
1. `app/page.js` exists (entry point)
2. `package.json` is in the root directory
3. Build completes without errors: `npm run build`

### Styles Not Loading
Clear the Vercel cache:
1. Go to Vercel dashboard
2. Project settings → Git
3. Click "Redeploy"

## License

© 2024 AQSURV. All rights reserved.
