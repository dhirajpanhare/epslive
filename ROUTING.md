# React Router Configuration

This project uses **React Router DOM v6** for client-side routing. Here's how it's set up:

## Routes

The application has the following routes configured:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `HomePage` | Main landing page with all sections |
| `/about` | `AboutPage` | About Velocity AI page |
| `/features` | `FeaturesPage` | Features overview with tabs |
| `/pricing` | `PricingPage` | Pricing plans comparison |
| `/contact` | `ContactPage` | Contact form and information |
| `*` | `NotFoundPage` | 404 Not Found page |

## Project Structure

```
src/
├── router.tsx              # Router configuration
├── main.tsx                # Entry point with RouterProvider
├── pages/                  # Page components
│   ├── HomePage.tsx        # Home/landing page
│   ├── AboutPage.tsx       # About page
│   ├── FeaturesPage.tsx    # Features page
│   ├── PricingPage.tsx     # Pricing page
│   ├── ContactPage.tsx     # Contact page
│   └── NotFoundPage.tsx    # 404 page
├── components/
│   ├── Navigation.tsx      # Updated with React Router links
│   └── ...                 # Other components
└── ...
```

## Key Files

### `src/router.tsx`
Defines all routes using `createBrowserRouter`:

```typescript
export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  // ... more routes
])
```

### `src/main.tsx`
Renders the router:

```typescript
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
```

### `src/components/Navigation.tsx`
Uses `Link` component from React Router instead of anchor tags:

```typescript
import { Link } from 'react-router-dom'

// Instead of <a href="/about">About</a>
<Link to="/about">About</Link>
```

## Adding New Routes

To add a new route:

1. Create a new page component in `src/pages/` (e.g., `BlogPage.tsx`)
2. Import it in `src/router.tsx`
3. Add a new route object to the router configuration:

```typescript
{
  path: "/blog",
  element: <BlogPage />,
}
```

4. Update the Navigation component to include a link to the new route

## Navigation Usage

Use the `Link` component for internal navigation instead of `<a>` tags:

```typescript
import { Link } from 'react-router-dom'

// Good ✓
<Link to="/about">About</Link>

// Avoid ✗
<a href="/about">About</a>
```

For programmatic navigation, use the `useNavigate` hook:

```typescript
import { useNavigate } from 'react-router-dom'

export function MyComponent() {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/about')
  }
  
  return <button onClick={handleClick}>Go to About</button>
}
```

## URL Parameters and Query Strings

To use URL parameters:

1. Define route with parameter:
```typescript
{ path: "/posts/:id", element: <PostPage /> }
```

2. Use `useParams` hook to access parameters:
```typescript
import { useParams } from 'react-router-dom'

export function PostPage() {
  const { id } = useParams()
  return <div>Post: {id}</div>
}
```

3. Link to parameterized routes:
```typescript
<Link to={`/posts/${postId}`}>View Post</Link>
```

## Helpful Hooks

- **`useNavigate()`** - Programmatic navigation
- **`useLocation()`** - Get current location object
- **`useParams()`** - Get URL parameters
- **`useSearchParams()`** - Get query string parameters
- **`useMatch()`** - Check if current location matches a pattern

## Resources

- [React Router Documentation](https://reactrouter.com/en/main)
- [API Reference](https://reactrouter.com/en/main/api-reference)
- [Migration from v5](https://reactrouter.com/en/main/start/migration-guide)
