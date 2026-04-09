# Architecture

This project is built using React Native and Expo. 
**Note:** As per our latest architectural decision, we are migrating to and strictly using **TypeScript** across the codebase. 

## Directory Structure
- `src/components/`: Contains reusable UI components (e.g., SearchBar, ProductCard, Header).
- `src/screens/`: Contains full screens (e.g., HomeScreen, CategoriesScreen, ProductsScreen).
- `src/navigation/`: App routing using React Navigation (Native Stack and Bottom Tabs).
- `src/constants/`: Stores global configuration, such as our centralized `Theme` for colors and typography.
- `assets/`: Image resources and fonts.

## State Management
- Currently utilizing standard React hooks (`useState`, `useEffect`).
- Future state management or server-state cache should be strictly typed.
