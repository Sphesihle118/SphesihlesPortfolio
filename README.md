---

# Sphesihle Mudau – Web Developer Portfolio

Welcome to my personal web developer portfolio! This project showcases my skills, projects, and contact information in a responsive, interactive, and visually appealing design. It includes a starry background with animated meteors, a dark/light theme toggle, and smooth section transitions.

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Sections](#sections)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)

---

## Overview

This portfolio is designed to highlight my skills and projects as an aspiring web developer. It is fully responsive, visually dynamic, and interactive, with a focus on user experience and modern design patterns.

---

## Features

* **Responsive Layout:** Works seamlessly on mobile, tablet, and desktop screens.
* **Dark/Light Theme Toggle:** Switch between dark and light modes with persistence using `localStorage`.
* **Animated Star Background:** A dynamic starry sky with twinkling stars and randomly appearing meteors.
* **Interactive Navigation:** Smooth scrolling between sections and a responsive mobile menu.
* **Skills Section:** Filterable skill categories with animated progress bars.
* **Projects Section:** Showcasing recent work with tags, live demos, and GitHub links.
* **Contact Section:** Contact information and a message form with interactive feedback.

---

## Technologies Used

* **React.js** – For building interactive UI components
* **Tailwind CSS** – For styling and responsive design
* **Lucide React Icons** – For consistent and modern icons
* **JavaScript (ES6+)** – For logic, animations, and state management
* **Vercel** – For hosting

---

## Sections

### 1. Home Section

* Animated introduction with fade-in text effects.
* “View My Work” button scrolls to the Projects section.
* Scroll indicator with subtle bounce animation.

### 2. About Me Section

* Introduction as an aspiring web developer.
* Brief description of skills and passion for elegant solutions.
* Cards for **Web Development**, **UI/UX Design**, and **Project Management**.
* Buttons to **Get in Touch** or **Download CV**.

### 3. Skills Section

* Categorized skills: Frontend, Backend, Tools.
* Interactive filter buttons.
* Animated progress bars showing proficiency.
* Responsive grid layout.

### 4. Projects Section

* Showcases three main projects with images, descriptions, tags, and links.
* Each project card includes a hover effect to enlarge the image slightly.
* Buttons for live demo and GitHub repository.

### 5. Contact Section

* Displays **Email**, **Phone**, and **Location** information.
* Message form with submit button and interactive “Sending…” feedback.
* LinkedIn link for professional connection.

### 6. StarBackground Component

* Full-screen animated starry sky.
* Randomly placed twinkling stars.
* Shooting meteors appear with random delay and speed.
* Non-intrusive (`pointer-events-none`) and fully responsive.

### 7. ThemeSwitch Component

* Fixed toggle button to switch between dark and light modes.
* Persistent mode using `localStorage`.
* Icon changes dynamically (`Moon` for dark, `Sun` for light).

### 8. Navbar Component

* Fixed, responsive navigation with smooth scrolling.
* Desktop view: horizontal nav links.
* Mobile view: slide-down menu with toggle button.
* Shrinks padding when scrolling for a dynamic effect.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Sphesihle118/Sphesihlesportfolio.git
```

2. Navigate to the project directory:

```bash
cd Sphesihlesportfolio
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

---

## Usage

* Navigate through sections via the navbar or buttons.
* Switch themes using the toggle button in the top-right corner.
* Hover over project cards to see interactive effects.
* Use the contact form to send a message (currently simulated with a timeout).

---

## License

This project is open-source and available under the **MIT License**.

---

