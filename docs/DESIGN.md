# DSA Visualizer Design Document
WARNING: ensure '@types/cookie' are deleted; still being installed upon sveltekit@latest install for unknown reason.
 
## Project Objectives

Goal: to create a web-based application that visualizes the internal workings of various data structures and algorithms (DSA). The project will include:

- Interactive visuals
- Code snippets
- Detailed explanations for educational purposes

### Core Functionality

- Interactive visualization of data structures like Linked Lists, Vectors, etc.
- Step-by-step simulations for operations (e.g., node insertion/removal).
- Display respective code implementations for each visualization.
- Dynamic updates to visualizations based on user input.

---

## User Interface

- Clean and responsive design using Tailwind CSS and CSS Flexbox.
- Mobile-friendly layouts.
- Sections for:
  - Selecting DSAs
  - Viewing visuals
  - Accessing C++ code snippets

---

## Key Components

### Component 1: Home Page
- **Description**: Main landing page with navigation options.

### Component 2: DSA Pages
- **Description**: Dedicated pages for each data structure.

### Component 3: Tabs
- **Description**: Allow users to switch between implementations (e.g., singly or doubly linked lists).

---

## Basic Design (UI/Architecture)

### UI Design
- **Main Page**: Dropdown menu for DSA selection and navigation buttons.
- **DSA Pages**: 
  - Visual representation of DSA
  - Visual representation of Code 
  - User input section for interaction

### Architecture Overview
- **Frontend**: 
  - Built with SvelteKit for reactive UI and state management.
  - TailwindCSS and ShadCn components with animations.
- **Visualization Logic**:
  - D3.js or SVG components for rendering and animating data structures.

---

## Build & Dependency Management Plan

- **Build System**: Vite (integrated with SvelteKit) for fast builds and hot reloading.
- **Dependency Management**:
  - `npm` for JavaScript libraries and frameworks.
  - GitHub Actions for continuous integration.

---

## Testing Plan

- **Unit Testing**: Using Vitest.
- **Integration Testing**: Ensures component and system cohesion.

---

## Notes

This document serves as a guide for project development, tracking the core features and future improvements of the DSA Visualizer.
