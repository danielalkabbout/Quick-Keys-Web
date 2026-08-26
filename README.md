# QuickKeys

QuickKeys is a real estate listing website built with React. It showcases property listings, pricing plans, and company information through a set of themed pages, with a client-side login/sign-up screen for user accounts.

## Features

- **Home** — hero banner, featured listings, recently added properties, price overview, awards, and team sections
- **Listing** — browsable property listings with price range filtering
- **About** — company/team information
- **Services** — overview of services offered
- **Pricing** — pricing plans and cards
- **Contact** — contact form/page
- **Login** — animated sign-in / sign-up panel with social login placeholders

## Tech Stack

- [React 18](https://react.dev/)
- [React Router v5](https://v5.reactrouter.com/) for client-side routing
- [Fluent UI React](https://developer.microsoft.com/en-us/fluentui) for UI components
- [react-slick](https://react-slick.neostack.com/) / [slick-carousel](https://kenwheeler.github.io/slick/) for carousels
- [Font Awesome](https://fontawesome.com/) for icons
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (`react-scripts`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (bundled with Node.js)

### Installation

```bash
git clone https://github.com/<your-username>/QuickKeys.git
cd QuickKeys
npm install
```

### Running the app

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page reloads automatically on edits.

### Running tests

```bash
npm test
```

Launches the test runner in interactive watch mode.

### Building for production

```bash
npm run build
```

Builds the app for production to the `build` folder, bundled and minified for the best performance.

## Project Structure

```
public/                 Static assets and index.html
src/
├── App.js              Root application component
├── index.js            Application entry point
└── components/
    ├── pages/          Router setup (Pages.jsx)
    ├── common/          Shared Header and Footer components
    ├── home/            Home page sections (hero, featured, recent, price, awards, team, location)
    ├── about/           About page
    ├── services/        Services page
    ├── listing/         Property listing page
    ├── pricing/         Pricing page
    ├── contact/         Contact page
    ├── login/           Login / sign-up page
    ├── data/            Static data used across pages
    └── images/          Local image assets
```

## Routes

| Path         | Page     |
| ------------ | -------- |
| `/`          | Home     |
| `/about`     | About    |
| `/services`  | Services |
| `/listing`   | Listing  |
| `/pricing`   | Pricing  |
| `/contact`   | Contact  |

## Available Scripts

| Command         | Description                                  |
| --------------- | --------------------------------------------- |
| `npm start`     | Runs the app in development mode              |
| `npm test`      | Runs the test suite in watch mode             |
| `npm run build` | Builds the app for production                |
| `npm run eject` | Ejects the Create React App configuration     |

## License

This project currently has no license specified.
