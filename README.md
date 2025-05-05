# 🚀 Harry Song - Portfolio Website

A clean, modern portfolio website built with Next.js and Tailwind CSS, featuring a responsive design and animated text components.


## ✨ Features

- **Modern UI**: Built with Next.js 15 and TailwindCSS 4
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Animated Components**: Features animated text rendering with React Spring
- **Collapsible Sidebar**: Easy navigation with a toggleable sidebar
- **Interactive Elements**: Tooltip, popover components for enhanced user experience
- **Dark Mode Ready**: Styling configured for both light and dark themes

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Styling**: TailwindCSS 4, with custom theme configuration
- **UI Components**: Radix UI primitives
- **Animations**: React Spring
- **Icons**: Lucide React, React Icons
- **Typography**: Geist font family

## 🏁 Getting Started

### Prerequisites

- Node.js (version 18.18.0 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/codingzilin/harry-portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
portfolio/
├── public/                # Static files
├── src/
│   ├── app/               # Next.js app router files
│   │   ├── components/    # Page-specific components
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Shared UI components
│   │   └── ui/            # Base UI components
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions
├── .gitignore
├── package.json
├── README.md
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## 🎨 Customization

### Adding New Pages

Create new files or folders in the `src/app` directory following Next.js 13+ app router conventions.

### Modifying the Theme

Edit the theme variables in `src/app/globals.css` to change colors, spacing, and other design tokens.

### Adding Content

- **Work Experience**: Edit the `JobCard.tsx` component
- **Contact Information**: Update the `ContactSection.tsx` component
- **Profile Information**: Modify the content in `page.tsx`

### Adding Projects

Create a new Projects component and add it to the main page, following the pattern of existing components.

## 🚀 Deployment

This project can be easily deployed on [Vercel](https://vercel.com/) (recommended for Next.js projects):

```bash
npm install -g vercel
vercel
```

Alternatively, you can deploy to any hosting service that supports Node.js applications.


## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Spring](https://react-spring.dev/)
- [Lucide Icons](https://lucide.dev/)
