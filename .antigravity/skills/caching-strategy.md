# Caching Strategy

## Local Persistence
- Use local storage mechanisms like `AsyncStorage` or Expo's `SecureStore` for persisting lightweight, non-sensitive user preferences and authentication tokens.

## State/Data Caching
- Consider utilizing tools like React Query (TanStack Query) for API integrations to automatically handle cache invalidation, network retries, and offline capabilities.
- Keep the catalog fetched from the API cached locally to improve app responsiveness.
