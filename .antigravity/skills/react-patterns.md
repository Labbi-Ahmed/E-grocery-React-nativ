# React & React Native Patterns

- **FlatList for Data**: Prefer `FlatList` or `SectionList` over `ScrollView.map` for parsing large arrays of products to ensure UI performance isn't bottlenecked.
- **Separation of Concerns**: Treat Screens (`src/screens`) merely as containers. Heavy logic and repeated views should be broken into distinct components in (`src/components`).
- **SafeArea**: Always wrapper parent screens in `SafeAreaView` so UI isn't hidden under notches or device curves.
