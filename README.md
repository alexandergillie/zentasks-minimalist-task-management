# Zen Tasks

[cloudflarebutton]

A modern, responsive task management application built on Cloudflare Workers with a full-stack React frontend. Features a sleek shadcn/ui design system, dark/light theme support, sidebar navigation, and API routes powered by Hono.

## ✨ Key Features

- **Full-Stack Cloudflare Deployment**: React app with Vite bundling and Cloudflare Workers for API routes
- **Modern UI**: shadcn/ui components, Tailwind CSS with custom gradients and animations
- **Theme Support**: Automatic dark/light mode with persistence
- **Responsive Design**: Mobile-first layout with sidebar collapse
- **State Management**: TanStack Query for data fetching, Zustand for client state
- **API Layer**: Hono-based routes in `worker/userRoutes.ts` with CORS and logging
- **Error Handling**: Global error boundaries and client error reporting
- **TypeScript**: Fully typed with Workers types and path mapping
- **Performance**: Optimized with code splitting, lazy loading, and Cloudflare assets

## 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons, Framer Motion |
| **State & Data** | TanStack Query, Zustand, React Hook Form, Zod |
| **Backend** | Cloudflare Workers, Hono, Cloudflare KV/Durable Objects ready |
| **UI Components** | Radix UI primitives, Headless UI, Sonner (toasts), Recharts |
| **Dev Tools** | Bun, ESLint, Wrangler, Cloudflare Vite Plugin |
| **Utilities** | clsx, tailwind-merge, date-fns, uuid |

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed
- [Cloudflare Account](https://dash.cloudflare.com/) and [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) (`bunx wrangler@latest login`)

### Installation

```bash
bun install
```

### Development

Start the development server with hot reload:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) (or `$PORT` in environments like Cloudflare Pages).

### Build for Production

```bash
bun run build
```

Assets are built to `dist/` and ready for Cloudflare deployment.

## 📚 Usage

### Frontend Development

- Edit pages in `src/pages/`
- Add components to `src/components/`
- Customize Tailwind in `tailwind.config.js` or `src/index.css`
- Use hooks like `useTheme()` and `useIsMobile()`
- API calls: Fetch `/api/*` endpoints from the Worker

### Backend Development (Worker)

- Add routes in `worker/userRoutes.ts` (e.g., `app.get('/api/tasks', ...)`)
- Access bindings via `Env` interface in `worker/core-utils.ts`
- Hot reload works in dev mode

### Example API Route

```typescript
// worker/userRoutes.ts
app.get('/api/tasks', async (c) => {
  return c.json({ tasks: [] });
});
```

### Custom Pages

Update `src/main.tsx` router:

```tsx
{
  path: '/tasks',
  element: <TasksPage />,
  errorElement: <RouteErrorBoundary />,
},
```

## ☁️ Deployment

Deploy to Cloudflare Workers with Pages/assets handling:

1. Configure `wrangler.jsonc` with your account ID if needed
2. Run:

```bash
bun run deploy
```

Or manually:

```bash
bun run build
npx wrangler deploy
```

This deploys the Worker (`worker/index.ts`) and serves static assets as a SPA.

[cloudflarebutton]

**Pro Tip**: Use Cloudflare's Git integration or CI/CD for automatic deployments.

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`bun run dev`)
3. Commit changes (`git commit -m 'feat: add tasks page'`)
4. Push and open a PR

Linting runs automatically: `bun run lint`.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🙌 Support

Built with ❤️ for Cloudflare Workers. Questions? Check [Cloudflare Docs](https://developers.cloudflare.com/workers/) or open an issue.