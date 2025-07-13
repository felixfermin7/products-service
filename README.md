# Products Service

This is a backend application built with Express.js and TypeScript. It provides an API to manage and retrieve product data, including filtering products by their IDs. The project is designed with a modular structure for scalability and maintainability.

## Project Structure

```
products-service
├── src
│   ├── app.js               # Entry point of the application
│   ├── controllers          # Contains controller files
│   ├── routes               # Contains route files
│   │── repositories         # Contains repositories files
│   └── services             # Contains services files
├── package.json             # NPM configuration file
├── .env                     # Environment variables
└── README.md                # Project documentation
```

## Requirements

- **Node.js**: This project requires **Node.js v20** or higher. Ensure you have the correct version installed before proceeding. You can check your Node.js version by running:
  ```bash
  node -v
  ```
  If you need to install or upgrade Node.js, visit Node website:
  https://nodejs.org/en/download

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd products-service
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and set the required environment variables. For example:
   ```
   PORT=3000
   ```

2. Start the application:
   ```
   npm run dev
   ```

## Running Tests

To run the tests, use the following command:
   ```
   npm run test
   ```

## Contributing

Feel free to submit issues or pull requests to improve the project. 

## License

This project is licensed under the MIT License.