# Campus Study Room Booking System

## Project Description
A React frontend where students can browse study rooms, search for one, submit a booking request and view their bookings.

## Problem Statement
A college has several study rooms for group discussions, project work and study sessions. Students need a simple application to view available rooms, find a suitable one, request a booking and track their reservations.

## Features
- US-01 View study rooms as reusable cards (name, building, capacity, availability)
- US-02 Live search by room name or building (controlled input)
- US-03 Booking form with validation, no page refresh, confirmation message
- US-04 My Bookings list with reusable booking cards (and cancel)
- US-05 React Router navigation with a responsive navbar
- Part A demo page covering the six concept tasks

## Technologies Used
React, Vite, React Router, Tailwind CSS (JavaScript + JSX, mock/local data)

## Application Screens
- **Home** – welcome and feature overview
- **Rooms** – search bar + room cards
- **Book a room** – controlled form with validation
- **My bookings** – submitted bookings
- **Part A demos** – Tasks 1–6 demonstrations

## How to Run the Project
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Key React Concepts Demonstrated
Functional components, JSX, props, `useState`, controlled inputs, `onChange`/`onSubmit` with `preventDefault`, `map()` with unique keys, `useEffect` (page title, saving bookings, API fetch), React Router, Tailwind responsive design.

## Note
This project was developed as part of MERN Stack Placement Training (Day 3), with AI used as a development assistant.
