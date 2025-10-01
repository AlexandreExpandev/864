# Lista Inteiros API

Backend API for the Lista Inteiros application, providing number-to-text conversion services.

## Features

- REST API for number-to-text conversion
- Express.js with TypeScript
- SQL Server database integration
- Authentication middleware
- Error handling and validation
- Logging and monitoring

## Getting Started

### Prerequisites

- Node.js 14+
- SQL Server (or compatible database)

### Installation

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Copy `.env.example` to `.env` and configure environment variables
   ```
   cp .env.example .env
   ```
4. Build the project
   ```
   npm run build
   ```
5. Start the server
   ```
   npm start
   ```

### Development

Run the development server with hot reloading:
```
npm run dev
```

## API Endpoints

### Public Endpoints

- `GET /api/external/public/numbers` - Get list of numbers with text representations

## Project Structure

```
src/
├── api/                  # API controllers
├── config/               # Application configuration
├── constants/            # Application constants
├── instances/            # Service instances
├── middleware/           # Express middleware
├── routes/               # Route definitions
├── services/             # Business logic
├── utils/                # Utility functions
└── server.ts            # Application entry point
```

## License

This project is licensed under the MIT License.
