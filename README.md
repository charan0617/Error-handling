# Express Error Handling Example

This is a simple Express.js application demonstrating basic route handling, error handling, and middleware usage including:

- Manual error throwing
- Async error handling
- 404 route handling
- Global error middleware

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v14 or higher recommended)

### Installation

1. Clone this repository or copy the files into a directory
2. Navigate into the project folder
3. Install dependencies

```bash
npm install

routes:
| Method | Route          | Description                          |
| ------ | -------------- | ------------------------------------ |
| GET    | `/`            | Returns a welcome message            |
| GET    | `/error`       | Triggers a manual error              |
| GET    | `/async-error` | Simulates and handles an async error |
| ANY    | (not found)    | Triggers a 404 "Route not found"     |

