# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for "愛你的心物法資拔" (NTU Information Management, Psychology, and Physical Therapy Departments Joint Orientation Camp 2025). The site serves as the official information platform for the camp held from August 24-26, 2025.

## Architecture

**Static Website Structure:**
- Pure HTML/CSS/JavaScript - no build system or package manager
- Tailwind CSS via CDN for styling
- Responsive design supporting mobile devices
- Six main pages: index, news, schedule, team, downloads, faq

**Key Files:**
- `index.html` - Main landing page with hero section and quick navigation
- `news.html` - Announcements and updates
- `schedule.html` - 3-day detailed itinerary
- `team.html` - Staff and counselor introductions
- `downloads.html` - Forms and documents for download
- `faq.html` - Frequently asked questions
- `js/script.js` - Interactive features (mobile menu, smooth scrolling, animations)
- `assets/` - Images and media files

## Technology Stack

- **HTML5** with semantic structure
- **Tailwind CSS** (CDN) with custom theme colors:
  - `camp-pink`: #FFB6C1
  - `camp-orange`: #FFD4C4
  - `camp-yellow`: #FFF2CC
  - `camp-brown`: #8B4513
- **Vanilla JavaScript** for interactions
- **Noto Sans TC** font for Chinese text
- **GitHub Pages/Vercel** for deployment

## Development Commands

Since this is a static site with no build process:

**Local Development:**
```bash
# Serve locally (use any static server)
python -m http.server 8000
# or
npx serve .
```

**Testing:**
- Test responsiveness across desktop/mobile
- Verify all internal links work
- Check form functionality (currently shows alert placeholder)

## Key Features

- Mobile-responsive navigation with hamburger menu
- Smooth scrolling between sections
- Intersection Observer for fade-in animations
- Dynamic navbar background on scroll
- Card hover effects with transform animations
- Registration button placeholder (shows alert)

## Design Principles

- Warm, welcoming color scheme matching camp theme
- Card-based layout with rounded corners
- Smooth transitions and hover effects
- Mobile-first responsive design
- Chinese typography optimized with Noto Sans TC

