# Lista Inteiros API

Backend API for the Lista Inteiros application, providing number-to-text conversion services.

## Features

- RESTful API for number-to-text conversion
- Express.js with TypeScript
- SQL Server database integration
- Authentication middleware
- Error handling and logging
- Health check endpoint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- SQL Server (local or remote)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/lista-inteiros-api.git
   cd lista-inteiros-api
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create environment file
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Build the project
   ```bash
   npm run build
   # or
   yarn build
   ```

5. Start the server
   ```bash
   npm start
   # or
   yarn start
   ```

### Development Mode

```bash
npm run dev
# or
yarn dev
```

## API Endpoints

### Public Endpoints

- `GET /api/external/numbers` - Get all numbers with text representations
- `GET /api/external/numbers/:id` - Get specific number by ID (1-10)
- `GET /health` - Health check endpoint

## Project Structure

```
src/
├── api/                  # API controllers
│   ├── external/         # Public endpoints
│   └── internal/         # Protected endpoints
├── config/               # Application configuration
├── constants/            # Application constants
├── instances/            # Service instances
├── middleware/           # Express middleware
├── routes/               # Route definitions
├── services/             # Business logic
├── utils/                # Utility functions
└── server.ts             # Application entry point
```

## Testing

```bash
npm test
# or
yarn test
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
