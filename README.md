# Dyne

Dyne is a web application built using Angular and NgRx for state management. It allows users to browse restaurants, view menus, and manage a shopping cart.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [State Management](#state-management)
- [Responsive Design](#responsive-design)

## Features

- Browse restaurants
- View restaurant menus
- Add items to the shopping cart
- Remove items from the shopping cart
- Checkout

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YousraRaed/dyne.git
   cd dyne
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

To run the application locally:

```bash
ng serve
```

## Running Tests

To run the application locally:

```bash
ng test
```

## State Management

The application uses NgRx for state management. The state is divided into different slices for restaurants, items, and the shopping cart.

### Hydration

State hydration is implemented to persist the cart state across page reloads. This is achieved using meta-reducers for syncing the state with `localStorage`.

- **hydrationMetaReducer**: Rehydrates the state from `localStorage` on application initialization.
- **localStorageSyncReducer**: Saves the state to `localStorage` on state changes.

## Responsive Design

The application is designed to be responsive, ensuring a seamless experience across various devices and screen sizes. This is achieved through:

- **SCSS Flexbox and Grid**: Utilized for creating flexible and adaptive layouts.
- **Media Queries**: Applied to adjust styles based on device characteristics, such as width, height, and orientation.
- **Angular Material**: Components from Angular Material are used to provide a consistent and responsive user interface.
