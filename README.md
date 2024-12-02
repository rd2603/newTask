# This only contain frontend part.

1. Prerequisites
Install Node.js (v16 or later recommended).
Install npm (comes with Node.js).

2. Clone the Repository
git clone <repository-url>
cd <project-directory>

3. Install Dependencies
npm install

4. Start the Development Server
npm start

The application will be accessible at http://localhost:3000 in your web browser.\



Project Structure

The project follows a component-based architecture, with a clear separation of concerns for reusability and maintainability. Below is an overview of the project structure:

src/
├── assets/                # Contains images (e.g., card thumbnails).
├── components/            # Reusable components.
│   ├── Card/              # Card Component
│   │   ├── Card.tsx       # Card structure and layout.
│   │   ├── Card.module.css# Styles specific to the Card component.
│   ├── Modal/             # Modal Component
│   │   ├── Modal.tsx      # Modal logic and rendering.
│   │   ├── Modal.module.css # Styles specific to the Modal.
├── pages/                 # Page-level components.
│   ├── Dashboard.tsx      # Main dashboard component (drag-and-drop layout).
│   ├── Dashboard.module.css      # Dashboard component css
├── styles/                # Global styles.
│   ├── index.css          # Styles applied globally across the app.
├── data.json              # Static JSON data for initial card content.
├── App.tsx                # Entry point for the app, integrates routes/pages.
├── index.tsx              # Renders the app into the root DOM node.



Components

1. Card Component
Purpose: Displays individual cards with a thumbnail and title.
Props:
title (string): The title of the card.
thumbnail (string): The URL/path of the card's thumbnail.
onClick (function): Click handler for triggering modal display.
Styles: Defined in Card.module.css


2. Modal Component
Purpose: Displays an enlarged image in a modal when a card is clicked.
Props:
isVisible (boolean): Controls the visibility of the modal.
image (string): The URL/path of the image to display.
onClose (function): Callback to close the modal.
Styles: Defined in Modal.module.css.

3. Dashboard Page
Purpose: Implements the drag-and-drop layout and integrates the Card and Modal components.
Features:
Displays cards in a responsive grid layout.
Drag-and-drop functionality to reorder cards.
Triggers the modal to show the clicked card's image.
Styles: Defined in Dashboard.module.css.


Features
Responsive Layout: Cards adjust dynamically based on the screen size.
Drag-and-Drop: Reorder cards with drag-and-drop functionality.
Modal Display: Double Click on a card to open an enlarged image in a modal.