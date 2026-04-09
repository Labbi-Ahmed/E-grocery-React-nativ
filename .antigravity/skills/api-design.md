# API Design Guidelines

- **TypeScript Definitions**: Define strict Interfaces or Types for all API requests and responses.
- **RESTful Focus**: Use RESTful principles for interacting with the backend. Organize endpoints logically.
- **Abstraction**: Abstract API calls into a separate service directory or use custom data-fetching hooks (e.g., `src/api` or `src/hooks`). Never fetch directly inside a UI screen without an abstraction.
- **State Handling**: Manage global/request states (loading, success, error) properly and provide UI feedback (spinners, error messages).
