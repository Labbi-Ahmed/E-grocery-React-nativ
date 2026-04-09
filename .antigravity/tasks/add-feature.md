# Task: Add Feature

When tasked to add a new UI feature/screen:

1. **Review Reference:** Thoroughly analyze the Figma design or provided UI screenshots.
2. **Components Extraction:** Analyze what parts of the feature can be abstracted into reusable UI blocks inside `src/components/`.
3. **TypeScript Screen:** Create the main Screen inside `src/screens/` explicitly utilizing `.tsx`.
4. **Navigation:** Register the new screen in the correct navigator (`AppNavigator.tsx` or `MainTabNavigator.tsx`).
5. **Styling:** Apply exact styling based natively on predefined variables from `src/constants/Theme`.
