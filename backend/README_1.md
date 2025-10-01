# Lista Inteiros API

Backend API for the Lista Inteiros application, providing number conversion services.

## Features

- Number listing (1-10)
- Number to text conversion
- RESTful API design
- Comprehensive error handling
- Logging and monitoring

## Tech Stack

- Node.js
- TypeScript
- Express.js
- SQL Server (optional)
- Jest for testing

## Project Structure

```
src/
├── api/                  # API controllers
│   ├── external/         # Public endpoints
│   └── internal/         # Authenticated endpoints
├── config/               # Application configuration
├── constants/            # Application constants
├── instances/            # Service instances
├── middleware/           # Express middleware
├── routes/               # Route definitions
├── services/             # Business logic
├── utils/                # Utility functions
└── server.ts             # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- SQL Server (optional)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/lista-inteiros-api.git
   cd lista-inteiros-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`
   ```bash
   cp .env.example .env
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## API Endpoints

### Public Endpoints

- `GET /api/external/number/list` - Get list of available numbers (1-10)
- `GET /api/external/number/convert/:number` - Convert number to text

## Development

### Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

## Testing

The project uses Jest for testing. Run tests with:

```bash
npm test
```

## License

This project is licensed under the MIT License.
