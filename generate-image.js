import sharp from 'sharp';

const width = 800;
const height = 600;

// Create SVG to convert to PNG
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A6EAA;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#14508C;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0082BE;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0A6EAA;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGradient)"/>
  
  <!-- Decorative circles -->
  <circle cx="80" cy="80" r="70" fill="#0082BE" opacity="0.25"/>
  <circle cx="750" cy="550" r="90" fill="#FFFFFF" opacity="0.12"/>
  
  <!-- Top accent line -->
  <rect x="0" y="0" width="${width}" height="6" fill="#FFFFFF" opacity="0.3"/>
  
  <!-- Main content area -->
  <g>
    <!-- Left geometric shapes -->
    <rect x="40" y="100" width="140" height="140" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.25" rx="8"/>
    
    <!-- Main card -->
    <rect x="140" y="130" width="520" height="340" fill="#FFFFFF" opacity="0.08" rx="16" stroke="#FFFFFF" stroke-width="1" stroke-opacity="0.2"/>
    
    <!-- Logo circle background -->
    <circle cx="400" cy="200" r="60" fill="url(#accentGradient)" opacity="0.3"/>
    <circle cx="400" cy="200" r="55" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6"/>
    
    <!-- Company initial E -->
    <text x="400" y="235" font-family="Arial, Helvetica, sans-serif" font-size="80" font-weight="bold" fill="#FFFFFF" text-anchor="middle" opacity="0.95">E</text>
    
    <!-- Company Name -->
    <text x="400" y="320" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="bold" fill="#FFFFFF" text-anchor="middle">EnProSys</text>
    <text x="400" y="365" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="600" fill="#0082BE" text-anchor="middle">Infotech</text>
    
    <!-- Tagline -->
    <text x="400" y="415" font-family="Arial, Helvetica, sans-serif" font-size="20" fill="#FFFFFF" text-anchor="middle" opacity="0.85">Digital Solutions & AI Innovation</text>
    
    <!-- Divider lines -->
    <line x1="250" y1="440" x2="350" y2="440" stroke="#0082BE" stroke-width="3" stroke-linecap="round"/>
    <line x1="450" y1="440" x2="550" y2="440" stroke="#0082BE" stroke-width="3" stroke-linecap="round"/>
  </g>
  
  <!-- Bottom established badge -->
  <g>
    <rect x="590" y="20" width="180" height="60" fill="#FFFFFF" opacity="0.1" rx="12" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.3"/>
    <text x="680" y="45" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Established 2008</text>
    <text x="680" y="65" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#0082BE" text-anchor="middle">Indore, India</text>
  </g>
  
  <!-- Decorative dots -->
  <g fill="#0082BE" opacity="0.5">
    <circle cx="120" cy="520" r="6"/>
    <circle cx="680" cy="520" r="6"/>
    <circle cx="400" cy="560" r="4" opacity="0.3"/>
  </g>
</svg>
`;

// Generate the image
sharp(Buffer.from(svg))
  .png()
  .toFile('public/about-company.png')
  .then(() => console.log('Image created successfully'))
  .catch(err => console.error('Error creating image:', err));
