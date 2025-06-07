# Edore Luxe Webshop

A modern, full-stack e-commerce platform built with React, Express, MongoDB, JWT authentication, and Stripe integration.

## Features
- User authentication (JWT-based)
- Product catalog, search, and filtering
- Shopping cart and wishlist
- Secure checkout with Stripe payments
- Order history and tracking
- Admin and user account management

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, JWT, Stripe

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Setup
1. Clone the repo:
   ```bash
   git clone https://github.com/vimal0156/edore-luxe-webshop.git
   cd edore-luxe-webshop
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd edore-luxe-webshop-project-main
   npm install
   cd server
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env` in both root and `/server` folders, and fill in your secrets (MongoDB URI, JWT secret, Stripe keys, etc.)

### Running the App
- **Frontend:**
  ```bash
  npm start
  ```
- **Backend:**
  ```bash
  cd server
  npm start
  ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
This project is licensed under the MIT License.

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project on platforms like **Vercel**, **Netlify**, or your own server.

### Deploying on Vercel/Netlify
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/) and import your repository.
3. Follow the prompts to deploy. For full-stack deployment, deploy the frontend and backend separately.

### Custom Domain
Both Vercel and Netlify allow you to add a custom domain in their dashboard under project settings. Follow their documentation to connect your domain.
