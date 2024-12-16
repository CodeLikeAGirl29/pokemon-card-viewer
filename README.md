# Pokémon Card Viewer

A React-based application that fetches Pokémon data from the PokéAPI and displays them as interactive cards. Users can explore Pokémon details, favorite their favorite Pokémon, and filter the view to show only favorites. The project is styled to ensure a visually appealing, responsive layout.

---

## Features

- **Pokémon Cards**:

  - Displays Pokémon images, names, types, and descriptions.
  - Each card includes a "Favorite" star that users can toggle.

- **Favorites Management**:

  - Users can star (favorite) Pokémon, and their selection is saved using `localStorage`.
  - A "View Favorites" button allows users to filter the view and see only their favorited Pokémon.

- **Responsive Design**:

  - Pokémon cards are displayed in a grid layout, adapting to various screen sizes.
  - Styled for an engaging and user-friendly experience.

- **Real-Time Data**:
  - Fetches Pokémon data (name, type, image, and description) from the [PokéAPI](https://pokeapi.co/).

---

## Demo

A live demo of the project can be accessed [here](https://pokemon-card-viewer-alpha.vercel.app/).

---

## Getting Started

### Prerequisites

- Node.js installed on your computer
- A package manager like `npm` or `yarn`

---

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codelikeagirl29/pokemon-card-viewer.git
   cd pokemon-card-viewer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

---

## Usage

1. Enter a Pokémon name or type in the search bar to explore Pokémon cards.
2. Click the star (`★`/`☆`) in the top-right corner of a card to favorite/unfavorite a Pokémon.
3. Click the "View Favorites" button to see only your favorited Pokémon.
4. To reset and view all Pokémon again, click "Show All."

---

## Project Structure

```bash
src/
├── App.js           # Main application component
├── App.css          # Styling for the application
└── index.js         # Entry point of the application
```

---

## Technologies Used

- **React**: Frontend library for building user interfaces
- **PokéAPI**: Public API for Pokémon data
- **Axios**: For making API requests
- **CSS Grid**: For responsive card layout
- **LocalStorage**: To persist user favorites across sessions

---

## Future Enhancements

- Add pagination to fetch more Pokémon dynamically.
- Enhance search functionality with auto-complete suggestions.
- Include additional Pokémon stats like abilities, weight, and height.
- Add dark mode for improved accessibility.

---

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing free Pokémon data.
- React and its amazing ecosystem for simplifying frontend development.
