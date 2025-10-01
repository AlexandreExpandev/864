# Lista Inteiros - Frontend

This is the frontend for the Lista Inteiros application, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Modern, scalable, and maintainable architecture.
- Domain-driven structure for clear separation of concerns.
- Type-safe development with TypeScript.
- Server state management with TanStack Query.
- Styling with Tailwind CSS and tailwind-variants.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**

2.  **Navigate to the frontend directory**
    ```bash
    cd frontend
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Project Structure

The project follows a domain-driven architecture:

-   `src/app`: Next.js App Router for pages and layouts.
-   `src/core`: Shared, application-wide logic, components, hooks, and utilities.
-   `src/domain`: Business domains, each containing its own components, hooks, services, and types.

