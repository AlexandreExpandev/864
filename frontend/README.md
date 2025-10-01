# Lista Inteiros - Frontend

This is the frontend for the "Lista Inteiros" application, built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This project follows a domain-driven architecture to ensure scalability and maintainability.

- `src/app`: Contains all pages and layouts, following the Next.js App Router conventions.
- `src/core`: Contains shared, application-wide logic, components, hooks, and utilities that are not specific to any business domain.
- `src/domain`: Contains business-specific logic. Each subdirectory represents a distinct business domain (e.g., `number`).

This structure separates concerns and makes it easy to add new features without affecting existing ones.
