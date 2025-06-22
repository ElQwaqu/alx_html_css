# 🎧 Headphones Landing Page

A fully responsive, multi-section landing page for a headphones company built from scratch using pure HTML, CSS, and JavaScript. This project demonstrates modern web development techniques, responsive design, and progressive enhancement.

## 📸 Preview

A beautiful, professional landing page featuring:
- Hero section with call-to-action
- Services showcase
- Results display with custom pentagon shapes
- Contact form
- Responsive hamburger menu

## 🚀 Features

### ✨ Core Features
- **Fully Responsive Design**: Optimized for desktop and mobile (480px breakpoint)
- **Progressive Enhancement**: Built in incremental steps from basic to advanced
- **Custom CSS Animations**: Interactive hover effects and smooth transitions
- **JavaScript Hamburger Menu**: Mobile-friendly navigation
- **Custom Icon Font**: Professional icons using Holberton School icon font
- **CSS-Only Pentagon Shapes**: Custom geometric shapes using clip-path
- **Smooth Scrolling**: Enhanced user experience with anchor navigation

### 🎯 Technical Highlights
- **Pure CSS & JavaScript**: No frameworks or libraries
- **Mobile-First Approach**: Responsive design principles
- **Semantic HTML**: Accessible and SEO-friendly markup
- **Cross-Browser Compatibility**: Modern browser support
- **Performance Optimized**: Lightweight and fast loading

## 📁 Project Structure

```
headphones/
├── 📄 0-index.html          # Step 0: Header section
├── 🎨 0-styles.css          # Header styles
├── 📄 1-index.html          # Step 1: + What We Do section
├── 🎨 1-styles.css          # + Services styles
├── 📄 2-index.html          # Step 2: + Our Results section
├── 🎨 2-styles.css          # + Pentagon results styles
├── 📄 3-index.html          # Step 3: + Contact section
├── 🎨 3-styles.css          # + Contact form styles
├── 📄 4-index.html          # Step 4: + Footer section
├── 🎨 4-styles.css          # + Footer styles (complete)
├── 📄 6-index.html          # Step 6: Copy of step 4
├── 🎨 6-styles.css          # Preparation for animations
├── 📄 7-index.html          # Step 7: + CSS animations
├── 🎨 7-styles.css          # + Fun animations & effects
├── 📄 8-index.html          # Step 8: + JavaScript menu
├── 🎨 8-styles.css          # + JS-ready hamburger styles
├── ⚡ 8-script.js           # JavaScript hamburger functionality
├── 🖼️ images/               # Image assets
│   ├── favicon.ico          # Site favicon
│   ├── favicon.png          # PNG favicon
│   ├── headphones_hero_1.jpg # Header background
│   ├── headphones_hero_2.jpg # Results background
│   ├── logo_headphones.png  # Company logo
│   └── pentagone.png        # Pentagon reference (unused)
├── 🎨 holberton_school-icon/ # Custom icon font
│   ├── style.css            # Icon font styles
│   ├── fonts/               # Font files (.eot, .svg, .ttf, .woff)
│   └── demo.html            # Icon reference
└── 📖 README.md             # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox & Grid layouts
  - CSS animations & transitions
  - Custom clip-path shapes
  - Media queries for responsiveness
  - CSS-only hamburger menu (steps 0-7)
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Mobile menu functionality
- **Custom Icon Font**: Holberton School icons
- **Design**: Mobile-first responsive approach

## 🎨 Design Specifications

### Layout
- **Max Content Width**: 1000px (centered)
- **Mobile Breakpoint**: 480px
- **Color Scheme**:
  - Primary: `#FF6565` (Coral red)
  - Text: `#071629` (Dark blue)
  - Background: White/Dark overlays

### Typography
- **Font Family**: Arial, sans-serif
- **Responsive Sizing**: Desktop to mobile scaling
- **Hover Effects**: Color transitions on links and buttons

### Components
1. **Header**: Hero section with background image and call-to-action
2. **What We Do**: 4 service items with custom icons
3. **Our Results**: 4 pentagon-shaped result displays
4. **Contact Us**: Minimalist contact form
5. **Footer**: Logo, social icons, and copyright

## 🔧 Development Steps

### Step 0: Header Foundation
- Basic HTML structure
- Hero section with background image
- Navigation bar
- Call-to-action button
- CSS-only hamburger menu

### Step 1: Services Section
- "What We Do" section
- Service items with icon font integration
- Responsive grid layout

### Step 2: Results Showcase
- "Our Results" section
- Custom CSS pentagon shapes using clip-path
- Background image with overlay

### Step 3: Contact Form
- Contact form with proper styling
- Input focus states and placeholders
- Form validation structure

### Step 4: Footer Complete
- Company logo and social media icons
- Copyright information
- Complete responsive design

### Steps 6-7: Enhanced Animations
- CSS animations for service items
- Pentagon hover effects
- Smooth transitions and transforms

### Step 8: JavaScript Integration
- Interactive hamburger menu
- Smooth scrolling navigation
- Enhanced mobile experience

## 📱 Responsive Design

### Desktop (> 480px)
- Full navigation menu visible
- Multi-column layouts
- Larger text and images
- Hover effects enabled

### Mobile (≤ 480px)
- Hamburger menu navigation
- Single-column layouts
- Optimized touch targets
- Reduced font sizes and spacing

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Text editor or IDE
- Local web server (optional)

### Installation

1. **Clone or Download**
   ```bash
   # Clone the repository
   git clone [repository-url]
   
   # Or download and extract the ZIP file
   ```

2. **Open in Browser**
   ```bash
   # Navigate to the project folder
   cd headphones
   
   # Open any of the HTML files in your browser
   # Recommended: Start with 8-index.html for full functionality
   ```

3. **Local Development**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Then open http://localhost:8000
   ```

## 🎯 Usage

### Viewing Different Steps
- **0-index.html**: Header only
- **1-index.html**: Header + Services
- **2-index.html**: + Results section
- **3-index.html**: + Contact form
- **4-index.html**: Complete static version
- **7-index.html**: + CSS animations
- **8-index.html**: + JavaScript functionality (recommended)

### Testing Responsiveness
1. Open developer tools (F12)
2. Toggle device toolbar
3. Test different screen sizes
4. Verify hamburger menu on mobile

### JavaScript Features (8-index.html)
- Click hamburger icon to toggle menu
- Click menu items to close menu automatically
- Click outside menu to close
- Smooth scrolling to sections

## 🎨 Customization

### Colors
```css
/* Primary color */
--primary-color: #FF6565;

/* Text color */
--text-color: #071629;

/* Modify in CSS files */
```

### Breakpoints
```css
/* Mobile breakpoint */
@media (max-width: 480px) {
    /* Mobile styles */
}
```

### Content
- Update text in HTML files
- Replace images in `/images` folder
- Modify form action and method

## 🧪 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+

### Required Features
- CSS Flexbox
- CSS Grid (partial)
- CSS clip-path
- ES6 JavaScript

## 📊 Performance

- **Lightweight**: ~800KB total (including images)
- **Fast Loading**: Optimized images and minimal CSS
- **Mobile Optimized**: Responsive images and layouts
- **No Dependencies**: Pure HTML/CSS/JS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness
5. Submit a pull request

## 📝 License

This project is part of the ALX Frontend Development curriculum and is for educational purposes.

## 🙏 Acknowledgments

- **ALX Africa**: Frontend development curriculum
- **Holberton School**: Icon font provided
- **Design Inspiration**: Modern landing page best practices

## 📞 Contact

- **Project**: Headphones Landing Page
- **Course**: ALX Frontend Development
- **Week**: 7 - Build From Scratch

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**
