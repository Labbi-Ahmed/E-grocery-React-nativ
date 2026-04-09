# Coding Conventions

1. **TypeScript Always**: We use TypeScript for all new files and are migrating existing JavaScript files to TypeScript (`.ts` and `.tsx`). Use strict typing and avoid `any`.
2. **Static Mock Data First**: Currently, all UI features (like Language, Currency, Categories) are implemented with statically hardcoded mock data so we can purely focus on completing the pixel-perfect design. In the future, this static data must be replaced and driven by dynamic API values from the backend.
3. **Components**: Use functional components exclusively with React Hooks. 
4. **Styling**: Always use `StyleSheet.create` for component-level styling. Do not use inline styles unless absolutely necessary. Rely on predefined colors and sizing in `src/constants/Theme.js` (or `.ts`).
5. **Imports**: Keep organized absolute/relative imports. Clean up any unused imports to keep code lean.
6. **UI Fidelity**: Components must strive for complete fidelity with Figma designs (proper margins, padding, rounded corners, shadows, and subtle micro-interactions).
