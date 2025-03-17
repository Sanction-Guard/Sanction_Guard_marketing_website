# Sanction Guard Marketing Website

## Overview
This repository contains the code for Sanction Guard's marketing website. The site is designed to showcase our sanctions screening and compliance solution, provide product information, capture leads, and serve as the main digital presence for the Sanction Guard brand.

## Features
- Responsive design optimized for all devices
- Product showcase with feature highlights
- Interactive demo request functionality
- Case studies and customer testimonials
- Blog/Resources section for compliance insights
- Contact forms with lead capture
- SEO-optimized content structure
- Performance-focused implementation

## Technology Stack
- Technology Stack
- HTML5, CSS3, JavaScript
- SCSS for stylesheet preprocessing
- Webpack for asset bundling
- tailwind for responsive grid system
- jQuery for DOM manipulation
- vanta.js for animations
- Vercel for hosting and deployment
- email.js for form submissions

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or Yarn (v1.22.0 or higher)
- vite (v5.4.2 or higher)

### Installation
1. Clone the repository
```bash
git clone https://github.com/Sanction-Guard/Sanction_Guard_marketing_website.git
cd Sanction_Guard_marketing_website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure
```
├── public/               # Static files
│   ├── images/           # Image assets
│   ├── fonts/            # Font files
│   └── favicon.ico       # Site favicon
├── src/                  # Source files
│   ├── components/       # Reusable components
│   ├── pages/            # Page templates
│   ├── styles/           # SCSS style files
│   ├── scripts/          # JavaScript files
│   └── index.js          # Entry point
├── dist/                 # Compiled files (generated)
├── package.json          # Project dependencies
└── webpack.config.js     # Webpack configuration
```

## Available Scripts
- `npm run dev`: Starts development server
- `npm run build`: Builds the site for production
- `npm run deploy`: Deploys to production environment
- `npm run lint`: Runs linter on code
- `npm run format`: Formats code with Prettier

## Content Management
The website content can be updated through:

1. Direct code changes for static content
2. CMS integration (if applicable)
3. Blog posts via Markdown files in the `/content/blog` directory

## SEO Considerations
- Proper semantic HTML structure
- Meta tags for all pages
- Structured data for rich snippets
- Sitemap generation
- Optimized image assets with alt text

## Analytics and Tracking
The website is configured with:
- Vercel Analytics for visitor tracking

## Browser Compatibility
The website is tested and optimized for:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Performance Optimization
- Image optimization and WebP format
- Critical CSS extraction
- Code splitting
- Lazy loading of assets
- Minification of HTML, CSS, and JavaScript

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment
This website is automatically deployed using Vercel's continuous integration and continuous deployment (CI/CD) capabilities.
- Branch-Based Deployments:
- Commits pushed to the develop branch trigger automatic deployments to a staging environment on Vercel. This allows for testing and previewing changes before they are made live.
- Commits pushed to the main branch trigger automatic deployments to the production environment on Vercel, making the changes immediately accessible to users.
- This setup streamlines the deployment process, ensuring that updates are efficiently and reliably delivered.
  
## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
For questions related to the marketing website, please contact:
- Marketing Team: marketing@sanctionguard2024@gmail.com
- Development Team: webdev@sanctionguard2024@gmail.com
