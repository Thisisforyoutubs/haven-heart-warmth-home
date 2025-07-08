
# Heart to Home Haven

A beautiful web application built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live application: [Heart to Home Haven](https://thisisforyoutubs.github.io/heart-to-home-haven/)

## 🛠️ Development

This project uses:
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** for components
- **React Router** for navigation
- **Tanstack Query** for data fetching

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Thisisforyoutubs/heart-to-home-haven.git
cd heart-to-home-haven
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## 📦 Building for Production

```bash
npm run build
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment Setup

If you want to set this up for your own repository:

1. Go to your GitHub repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will handle the rest

### Local Preview of Production Build

```bash
npm run preview
```

## 🔧 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx            # Application entry point
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
