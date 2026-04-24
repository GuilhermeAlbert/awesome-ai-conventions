# System Architecture

## Overview

The application is split into a React frontend, a Node.js API, and a worker process.

## Boundaries

- The frontend owns routing, forms, and view state.
- The API owns authentication, validation, and persistence.
- The worker owns retries, scheduled jobs, and provider synchronization.

## Data Flow

1. The frontend calls typed API clients.
2. API handlers validate input and call domain services.
3. Domain services read and write through repositories.
4. Long-running work is queued for the worker.
