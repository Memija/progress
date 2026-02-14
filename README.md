# Training

Progress is the movement towards a refined, improved, or otherwise desired state.

[![Build Status](https://dev.azure.com/avanade-memija-dach/Training/_apis/build/status/Memija.progress?branchName=master)](https://dev.azure.com/avanade-memija-dach/Training/_build/latest?definitionId=3&branchName=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Memija_progress&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Memija_progress)

## Getting Started

This project is an Angular application with an Express server.

### Prerequisites

Ensure you have Node.js installed. The supported versions are:
- `^14.20.0`
- `^16.13.0`
- `^18.10.0`

### Installation

Install the dependencies:

```bash
npm install
```

### Development Server

Run the development server for the Angular app:

```bash
npm run local
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Build the project:

```bash
npm run build
```

The build artifacts will be stored in the `dist/training` directory.

### Running Tests

Run the unit tests via [Karma](https://karma-runner.github.io):

```bash
npm test
```

### Running the Server

Start the Express server:

```bash
npm start
```

This will run `node server.js`.
