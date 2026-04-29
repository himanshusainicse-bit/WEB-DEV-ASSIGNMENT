# Student Scoreboard

A React + Vite assignment project for Web Dev II that displays and manages student scores using reusable functional components and pure CSS.

## Features

- View student names and scores in a table
- Update student scores dynamically using input fields
- Add new students with a form
- Show pass or fail status based on marks
- Dark, attractive UI with pure CSS
- Responsive layout for desktop and mobile screens

## Tech Stack

- React
- Vite
- JavaScript (JSX)
- Pure CSS

## Component Structure

- `Header` for the title and summary cards
- `StudentTable` for displaying all student records
- `StudentRow` as a reusable row component
- `AddStudentForm` for adding new students

## Pass/Fail Rule

- `Pass` when score is `40` or more
- `Fail` when score is below `40`

## Project Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Folder Structure

```text
assignment-3/
├── src/
│   ├── components/
│   │   ├── AddStudentForm.jsx
│   │   ├── Header.jsx
│   │   ├── StudentRow.jsx
│   │   └── StudentTable.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Notes

- The app uses `useState` for managing student data in the parent component.
- Scores are limited between `0` and `100`.
- Form inputs are cleared after successful submission.
- Styling is written using pure CSS only, as required in the assignment.
