# Symon Marville H. Distor | Portfolio

This is my responsive personal portfolio, built with HTML, CSS, and vanilla JavaScript. It introduces me, highlights my skills and learning progress, showcases my projects, and provides links to contact and social profiles.

## Features

- Floating navigation with Home, About, Projects, and Contact links
- About section with my background, skills, and current learning focus
- Bento-grid project cards with technology tags and project links
- Contact section with email, GitHub, and LinkedIn links
- Responsive layout with interactive navigation, project cards, and timeline details

## File structure

```text
portfolio/
├── assets/
│   ├── favicon.svg
│   ├── profile.png
│   └── projects/
│       └── backend-practice.png
├── css/
│   └── style.css
├── js/
│   └── main.js
└── index.html
```

- `index.html` contains the portfolio content and page structure.
- `css/style.css` contains the layout, responsive styles, colors, and typography.
- `js/main.js` handles the interactive behavior.
- `assets/` contains the profile image, project images, and favicon.

## Preview locally

The simplest way to preview the site is to open `index.html` directly in a browser.

You can also run a local server from the project folder:

```bash
python -m http.server
```

Then open `http://localhost:8000` in your browser.

## Edit the content

Most content can be edited directly in `index.html`:

- Update the hero heading and tagline in the `.hero` section.
- Change the About text and skill lists in `#about`.
- Update social, email, and project URLs in their corresponding `<a>` elements.
- Edit the timeline entry in `.timeline` to reflect your education or milestones.
- Replace images in `assets/` and update their `src` and `alt` attributes.
- Adjust the visual design in `css/style.css`.

## Add a project card

Inside `.bento-grid` in `index.html`, add another `<article>` using the same structure as the existing project card:

```html
<article
  class="bento-card glass-card bento-wide"
  tabindex="0"
  role="link"
  aria-label="Open My new project project"
  data-primary-url="https://github.com/your-username/my-new-project"
>
  <img
    class="project-screenshot"
    src="assets/projects/my-new-project.png"
    alt="Screenshot of the My new project project"
    width="640"
    height="360"
    loading="lazy"
  />
  <div class="project-card-content">
    <span class="card-label">Project type</span>
    <h3>My new project</h3>
    <p>A short description of what the project does.</p>
    <ul class="project-tags" aria-label="Technologies used">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </div>
  <div class="project-card-actions">
    <a class="project-link" href="https://github.com/your-username/my-new-project" rel="noopener noreferrer">Code ↗</a>
  </div>
</article>
```

Replace the project name, description, image path, technology tags, GitHub URL, and accessibility text with the details for the new project.

## Credits

The site uses the Inter, Sora, and JetBrains Mono fonts from [Google Fonts](https://fonts.google.com/).
