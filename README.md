# Sri Vagdhevi Coaching Centre Landing Page

A premium, conversion-optimized landing page designed for Sri Vagdhevi Coaching Centre, Kothagudem. This project uses modern HTML5, CSS3, and Vanilla JavaScript to ensure high performance, accessibility, and a stunning user experience.

## ✨ Features

- **Ultra-Modern Design**: Clean layout with deep navy and warm amber color palette.
- **Responsive**: Fully optimized for mobile, tablet, and desktop (Mobile-First approach).
- **Performance Optimized**: Zero external framework dependencies for lightning-fast load times.
- **Micro-Interactions**: Smooth scrolling, hover effects, number counters, and glassmorphism header.
- **Lead Generation**: Strategically placed CTAs and WhatsApp integration.
- **SEO Ready**: Schema markup, semantic HTML, and meta tags included.

## 📂 File Structure

```
/sri-vagdhevi-landing/
  ├── index.html            # Main landing page
  ├── robots.txt            # SEO crawler directives
  ├── sitemap.xml           # XML Sitemap
  ├── /assets/
      ├── /css/
      │   └── style.css     # Main stylesheet (Variables, Reset, Components)
      ├── /js/
      │   └── script.js     # Interaction logic (Menu, Scroll, Form)
      └── /images/          # Image assets (currently placeholders)
```

## 🚀 Setup & Installation

1.  **Clone or Download**: Download this repository to your local machine.
2.  **Open**: Simply open `index.html` in any modern web browser.
3.  **Local Server (Optional)**: For the best experience (and to avoid CORS issues with some local file access), run a simple local server:
    ```bash
    # Python 3
    python -m http.server
    # Node.js (http-server)
    npx http-server .
    ```

## 🖼️ image Customization

The current design uses CSS-based placeholders and SVGs for performance. To customize with real photos:

1.  **Hero Image**: Replace the SVG placeholder in the `.image-wrapper` div in `index.html` with an `<img>` tag pointing to your student photo.
2.  **Director Photo**: Replace `.img-placeholder-portrait` in `style.css` (or `index.html`) with an actual `<img>` tag of Mr. M. Ramesh Babu.
3.  **Logo**: Add your logo file to `assets/images/logo.png` and update the `src` in the `header`.

## 🌐 Deployment

This static site can be deployed instantly to:
- **Netlify**: Drag and drop the folder.
- **Vercel**: Connect your Git repo.
- **GitHub Pages**: Push to a repository and enable Pages.
- **Traditional Hosting**: Upload all files to `public_html` via FTP.

## 📱 Troubleshooting

- **Mobile Menu Not Working?**: Ensure `script.js` is loaded at the bottom of the `<body>` tag.
- **Styles Not Applying?**: Check the path to `assets/css/style.css`.
- **Form Not Sending?**: The form currently redirects to WhatsApp with a pre-filled message. Ensure pop-ups are allowed if testing locally.

## 📞 Support

For any updates or modifications, please contact the developer or refer to the inline documentation within `style.css`.

---
**Sri Vagdhevi Coaching Centre** - *Shaping Futures, Building Success Stories.*
