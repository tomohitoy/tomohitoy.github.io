# AGENTS.md

## Project Overview

This is a personal portfolio website for Tomohito Yamazaki (山﨑 智仁), a Research-Practitioner in alternative education, programming education, and learning science. The website features a bilingual (Japanese and English) interface with a modern bento grid layout showcasing various activities including teaching, research, school advisory, consulting, and software development.

### Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **Styling**: CSS Grid, CSS Variables for theming
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Noto Sans JP, Open Sans, Roboto)
- **Hosting**: GitHub Pages (static site)

### File Structure

```
tomohitoy.github.io/
├── index.html              # Japanese version homepage
├── index.en.html           # English version homepage
├── PROFILE.md              # Source of truth for all profile content (bilingual)
├── AGENTS.md               # This file - instructions for AI coding agents
├── README.md               # Human-readable project documentation
├── css/
│   ├── main.css           # Main styles including bento grid layout
│   ├── modal.css          # Modal dialog styles
│   └── reset.css          # CSS reset
├── js/
│   ├── content.js         # All site content in Japanese and English
│   ├── main.js            # Main application logic
│   └── modal.js           # Modal functionality
└── img/
    └── profile.jpg        # Profile image
```

## Content Management

### Single Source of Truth

**IMPORTANT**: `PROFILE.md` is the master document for all content. When updating the website:

1. **Always update PROFILE.md first** with new information in both Japanese and English sections
2. Then update `js/content.js` to reflect changes from PROFILE.md
3. Finally, verify changes in `index.html` and `index.en.html` if structural changes are needed

### Content Update Workflow

When adding new achievements, news, or updating sections:

1. **Edit PROFILE.md**:
   - Add to the appropriate section in Japanese
   - Add the corresponding English translation in the English section
   - Ensure dates are formatted consistently (YYYY年MM月DD日 for Japanese, Month DD, YYYY for English)

2. **Update js/content.js**:
   - Locate the relevant section in both `ja` and `en` objects
   - Add new content maintaining the same structure
   - Use proper HTML tags in content strings
   - Keep modal content synchronized with card summaries

3. **Update HTML files** (only if adding new card types):
   - Add new card elements to both `index.html` and `index.en.html`
   - Use appropriate `data-card` attributes matching content.js keys
   - Maintain bento grid structure

4. **Update CSS** (if new card types added):
   - Add grid-area assignments in `css/main.css`
   - Update grid-template-areas in `.bento-grid`
   - Add any specific styling for new card types

### Content Sections

The website has the following main sections:

- **Profile** (`profile`): Basic introduction and affiliations
- **What's New** (`whatsNew`): Latest news and announcements (white background with orange border for emphasis)
- **Teaching** (`teaching`): Academic courses and classes (academic-card: green background)
- **Research** (`research`): Publications, presentations, invited talks (academic-card: green background)
- **Awards & Trademarks** (`awards`): Awards, prizes, patents, and trademarks (academic-card: green background)
- **School Advisory** (`advisory`): Educational consulting and workshops (professional-card: teal background)
- **Business Consulting** (`consulting`): Data analysis and UX research (professional-card: teal background)
- **Software Development** (`software`): Web applications and systems (professional-card: teal background)
- **Contact** (`contact`): Contact information and social links

## Development Guidelines

### Code Style

- Use modern JavaScript (ES6+) with classes
- Prefer template literals for HTML content
- Use const/let, never var
- Single quotes for strings
- Semicolons are required
- 4-space indentation in JavaScript
- 2-space indentation in HTML/CSS

### CSS Conventions

- Use CSS custom properties (variables) defined in `:root`
- Follow BEM-like naming for card classes: `.card-{type}`
- Responsive design: mobile-first approach
- Grid areas for layout control
- Use `!important` for card category background colors to ensure they override base `.card` styles
- Card categories:
  - `.academic-card`: Green background (`rgba(76, 175, 80, 0.1)`), green left border
  - `.professional-card`: Teal background (`rgba(0, 150, 136, 0.1)`), teal left border
  - Special cards like `.card-whats-new` can have custom backgrounds (e.g., white with orange border)

### JavaScript Structure

- `content.js`: Pure data object, no logic
- `main.js`: Application initialization and core logic
- `modal.js`: Modal dialog functionality
- All DOM manipulation happens after DOMContentLoaded

### Bilingual Content

- Language is determined by HTML file: `index.html` (Japanese) vs `index.en.html` (English)
- `lang` attribute on `<html>` tag sets the language
- JavaScript reads `document.documentElement.lang` to load appropriate content
- Content object structure: `siteContent.ja` and `siteContent.en`

## Layout Architecture

### Desktop Layout (> 768px)

The bento grid uses a 4-column layout:

```css
grid-template-columns: repeat(4, 1fr);
grid-template-areas:
    "profile profile profile image"
    "whatsnew activity1 activity2 awards"
    "activity3 activity4 activity5 contact";
```

- Row 1: Profile (3 cols) + Profile Image (1 col)
- Row 2: What's New, Teaching, Research, Awards (each 1 col)
- Row 3: Advisory, Consulting, Software, Contact (each 1 col)

### Tablet Layout (577px - 768px)

Two-column layout with specific arrangements.

### Mobile Layout (< 576px)

```css
grid-template-columns: 1fr 1fr;
grid-template-areas:
    "profile profile"
    "image whatsnew"
    "activity1 activity2"
    "awards activity3"
    "activity4 activity5"
    "contact contact";
```

**Key Mobile Considerations:**
- All activity cards (teaching, research, awards, advisory, consulting, software) should be square (`aspect-ratio: 1/1`)
- Profile and contact cards span both columns
- Contact card should have `aspect-ratio: 3/1` for compact display
- Avoid using `grid-column: 1 / -1` for activity cards unless they should span full width
- Always check that grid-template-areas properly assigns each card to avoid overlapping

## Testing Instructions

Since this is a static site, testing is primarily manual:

1. **Visual Testing**:
   ```bash
   # Open in browser (use a local server for proper CORS handling)
   python3 -m http.server 8000
   # Then navigate to http://localhost:8000
   ```

2. **Test Both Languages**:
   - Open `index.html` (Japanese)
   - Open `index.en.html` (English)
   - Verify all cards display correctly
   - Test all modal popups
   - Check language switcher functionality

3. **Responsive Testing**:
   - Test on mobile (< 576px) - **CRITICAL**: Check that cards don't overlap
   - Test on tablet (577px - 768px)
   - Test on desktop (> 768px)
   - Verify bento grid layout adapts properly
   - Check card aspect ratios at each breakpoint

4. **Content Verification**:
   - All links should open in new tabs (`target="_blank"`)
   - External links should have `rel="noopener noreferrer"`
   - Dates should be formatted consistently
   - Japanese text should use proper typography
   - Card background colors match their category (academic vs professional)

## Common Tasks

### Adding a New News Item to "What's New"

1. Add to `PROFILE.md` under `## 新着ニュース / What's New`:
   ```markdown
   - YYYY年MM月DD日 [Japanese description with link if applicable]
   - Month DD, YYYY [English description with link if applicable]
   ```

2. Update `js/content.js` in the `whatsNew` modal content:
   ```javascript
   // Japanese section (ja.modals.whatsNew.content)
   <li><strong>YYYY年MM月DD日</strong> [description]</li>
   
   // English section (en.modals.whatsNew.content)
   <li><strong>Month DD, YYYY</strong> [description]</li>
   ```

### Adding a New Publication to Research

1. Add to `PROFILE.md` under appropriate research subsection
2. Update `js/content.js` research modal in both ja and en sections
3. Follow citation format consistently
4. Ensure author names, year, title, venue are accurate

### Adding a New Training Session to Advisory

1. Add to `PROFILE.md` under `### 学校・先生のための研修`
2. Update `js/content.js` advisory modal
3. Include date, description, and location
4. Maintain chronological order (newest first or oldest first, be consistent)

### Adding a New Activity Card

This is a major structural change. Steps:

1. **Update PROFILE.md**:
   - Add new section or subsection with content in both Japanese and English
   - Ensure consistent formatting and structure

2. **Update content.js**:
   - Add card definition in both `ja.cards` and `en.cards`:
     ```javascript
     cardName: {
         title: "日本語タイトル",
         subtitle: "English Subtitle",
         summary: "カードに表示される概要文"
     }
     ```
   - Add modal definition in both `ja.modals` and `en.modals`:
     ```javascript
     cardName: {
         title: "モーダルタイトル",
         content: `<h3>HTML content here</h3>`
     }
     ```

3. **Update HTML files**:
   - Add card HTML to both `index.html` and `index.en.html`:
     ```html
     <div class="card [category]-card activity-card card-{name}" data-card="{name}">
         <div class="card-header">
             <h2 class="card-title">タイトル</h2>
             <div class="card-subtitle">Subtitle</div>
         </div>
         <div class="card-icon">
             <i class="fas fa-{icon-name}"></i>
         </div>
         <div class="card-body">
             概要文
         </div>
     </div>
     ```
   - Choose appropriate category class: `academic-card` or `professional-card`
   - Include proper `data-card` attribute matching content.js key
   - Add appropriate icon from Font Awesome

4. **Update CSS (css/main.css)**:
   - Add grid-area assignment:
     ```css
     .card-{name} {
         grid-area: {areaName};
     }
     ```
   - Update `grid-template-areas` in `.bento-grid` for **all breakpoints**:
     - Desktop (default)
     - Tablet (`@media (max-width: 768px)`)
     - Mobile (`@media (max-width: 576px)`)
   - If the card needs special styling (like `.card-whats-new`):
     ```css
     .card-{name} {
         background-color: #color !important;
         border-left: 4px solid #borderColor;
     }
     ```
   - For mobile layout, decide if card should:
     - Be square (1 col): include in grid like `"activity1 activity2"`
     - Span full width (2 cols): include in grid like `"cardname cardname"`
     - Set appropriate `aspect-ratio` for mobile in media query if different from desktop

5. **Test thoroughly**:
   - Check desktop layout
   - **CRITICAL**: Check mobile layout for overlapping cards
   - Verify background colors match category
   - Test modal opens correctly
   - Check both Japanese and English versions

## Deployment

This site is deployed via GitHub Pages:

1. Changes pushed to the `main` branch are automatically deployed
2. Site is available at: `https://tomohitoy.com` (with CNAME configuration)
3. No build process required - this is a static site

### Commit Message Guidelines

- Use clear, descriptive messages in English
- Format: `[type]: description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `content`
- Examples:
  - `content: Add WALS2025 presentation to research section`
  - `feat: Add What's New section to homepage`
  - `fix: Correct grid layout on mobile devices`

## Security Considerations

- All external links must include `rel="noopener noreferrer"`
- No sensitive data should be committed (API keys, credentials, etc.)
- Email is public and intentionally displayed
- Images should be optimized before committing

## SEO and Metadata

- Both HTML files have comprehensive meta tags
- Structured data (JSON-LD) for Person and ProfessionalService
- Language alternates properly configured
- Canonical URLs set correctly
- Open Graph and Twitter Card metadata included

## Common Pitfalls and Solutions

### Mobile Layout Issues

**Problem**: Cards overlapping or not displaying correctly on mobile
**Causes**:
1. `grid-template-areas` defining cards in same position (e.g., `"activity4 activity5"` when both should span full width)
2. Conflicting `grid-column` declarations in mobile media queries
3. Incorrect aspect ratios

**Solutions**:
- For full-width cards on mobile, use `"cardname cardname"` in grid-template-areas
- For side-by-side square cards, use `"card1 card2"` and ensure `aspect-ratio: 1/1`
- Remove `grid-column: 1 / -1` declarations for cards that should be square on mobile
- Always test mobile layout after adding/modifying cards

### Background Color Not Applying

**Problem**: Card background color not showing despite having `academic-card` or `professional-card` class

**Cause**: Base `.card` style has `background-color: var(--card-bg)` which overrides category colors

**Solution**: Use `!important` in category classes:
```css
.academic-card {
    background-color: rgba(76, 175, 80, 0.1) !important;
}
```

### Inconsistent Card Sizes on Mobile

**Problem**: Some cards appear larger or smaller than others on mobile

**Cause**: Inconsistent aspect-ratio declarations or missing aspect-ratio overrides in mobile media query

**Solution**: 
- Ensure all activity cards have `aspect-ratio: 1/1` in mobile media query
- Full-width cards (contact) should have consistent aspect-ratio (e.g., `3/1`)
- Explicitly set aspect-ratios for each card type in mobile media query if needed

## Notes for AI Coding Agents

- **Always** check `PROFILE.md` first when updating content
- Maintain bilingual parity - if you update Japanese, update English too
- Test changes by viewing the actual HTML files in a browser
- Preserve existing code style and structure
- Keep grid layout responsive across **all** device sizes (desktop, tablet, mobile)
- Modal content should be more detailed than card summaries
- Use Font Awesome icon classes for card icons
- Date formats must be culturally appropriate (Japanese vs English conventions)
- **CRITICAL**: When modifying CSS grid layouts, update ALL breakpoints (desktop, tablet, mobile)
- Use browser DevTools to test mobile layout (don't just resize browser window)
- When adding `!important` to CSS, document why it's needed
- Card categories (academic vs professional) determine background color and left border
- The "What's New" card has special styling (white background, orange border) to stand out

## Links and Resources

- **Live Site**: https://tomohitoy.com
- **GitHub Repository**: https://github.com/tomohitoy/tomohitoy.github.io
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Google Fonts**: https://fonts.google.com/
