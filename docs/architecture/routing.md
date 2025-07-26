# Routing Architecture

This document outlines the routing structure, navigation patterns, and URL management strategy for the portfolio application.

## 🗺️ Route Structure

```mermaid
graph TB
    A[App Root] --> B[BrowserRouter]
    B --> C[Layout Component]
    C --> D[Header Navigation]
    C --> E[Routes]
    E --> F["Route <br/> Path: / <br/> Element: Home"]
    E --> G["Route <br/> Path: /projects <br/> Element: Projects"]
    E --> H["Route <br/> Path: /blog <br/> Element: Blog"]
    E --> I["Route <br/> Path: /about <br/> Element: About"]
    E --> J["Route <br/> Path: /contact <br/> Element: Contact"]
    E --> K["Route <br/> Path: * <br/> Element: NotFound"]

    style A fill:#e1f5fe
    style F fill:#e8f5e8
    style K fill:#ffebee
```

## 📋 Route Configuration

### Primary Routes
```typescript
const routes = [
  {
    path: "/",
    component: Index,
    name: "Home",
    description: "Portfolio landing page with hero, projects, and contact"
  },
  {
    path: "/projects",
    component: Projects,
    name: "Projects",
    description: "Detailed project showcase and case studies"
  },
  {
    path: "/blog",
    component: Blog,
    name: "Blog",
    description: "Technical articles and thoughts"
  },
  {
    path: "/about",
    component: About,
    name: "About",
    description: "Personal background and professional journey"
  },
  {
    path: "/contact",
    component: Contact,
    name: "Contact",
    description: "Contact form and professional links"
  },
  {
    path: "*",
    component: NotFound,
    name: "404",
    description: "Fallback page for unmatched routes"
  }
];
```

## 🧭 Navigation Flow

```mermaid
flowchart TD
    A[User Lands on Site] --> B{Entry Point}
    B -->|Direct URL| C[Specific Page]
    B -->|Home Page| D[Landing Page]
    
    D --> E[Hero Section]
    E --> F[View Projects CTA]
    F --> G[Projects Page]
    
    C --> H[Navigation Menu]
    H --> I[Any Page]
    
    I --> J{User Action}
    J -->|Read More| K[Blog]
    J -->|View Work| G
    J -->|Learn About| L[About]
    J -->|Get in Touch| M[Contact]
    
    style A fill:#e3f2fd
    style D fill:#e8f5e8
    style G fill:#fff3e0
```

## 🔄 Route Transitions

```mermaid
sequenceDiagram
    participant U as User
    participant N as Navigation
    participant R as React Router
    participant C as Component
    participant B as Browser
    
    U->>N: Click navigation link
    N->>R: Navigate to route
    R->>B: Update URL
    R->>C: Load new component
    C->>U: Render new page
    
    Note over R,C: Route transition
    Note over C,U: Page rendered
```

## 📱 Mobile Navigation

```mermaid
stateDiagram-v2
    [*] --> Closed
    Closed --> Opening : User taps menu
    Opening --> Open : Animation complete
    Open --> Closing : User taps close/link
    Closing --> Closed : Animation complete
    
    Open --> Navigate : User selects route
    Navigate --> Closing : Navigation triggered
    
    note right of Open
        Mobile menu is visible
        with navigation options
    end note
```

## 🔗 Link Management

### Internal Navigation
```typescript
// Using React Router Link component
<Link to="/projects" className="nav-link">
  Projects
</Link>

// Programmatic navigation
const navigate = useNavigate();
navigate('/contact');
```

### External Links
```typescript
// External links with security
<a 
  href="https://github.com/username" 
  target="_blank" 
  rel="noopener noreferrer"
>
  GitHub
</a>
```

## 🎯 Active Route Detection

```mermaid
graph LR
    A[useLocation Hook] --> B[Current Pathname]
    B --> C[Compare with Route]
    C --> D{Match?}
    D -->|Yes| E[Active State]
    D -->|No| F[Inactive State]
    
    E --> G[Active Styling]
    F --> H[Default Styling]
    
    style E fill:#e8f5e8
    style F fill:#f5f5f5
```

### Implementation
```typescript
const location = useLocation();

const isActive = (path: string) => location.pathname === path;

// Usage in navigation
<Link
  to="/projects"
  className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
>
  Projects
</Link>
```

## 🛡️ Route Protection & Error Handling

```mermaid
graph TB
    A[Route Request] --> B{Valid Route?}
    B -->|Yes| C[Load Component]
    B -->|No| D[404 Not Found]
    
    C --> E{Component Error?}
    E -->|Yes| F[Error Boundary]
    E -->|No| G[Render Success]
    
    F --> H[Error Page]
    G --> I[Display Content]
    
    style B fill:#fff3e0
    style E fill:#ffebee
    style G fill:#e8f5e8
```

## 📊 SEO & Meta Management

```mermaid
graph LR
    A[Route Change] --> B[Update Document Title]
    A --> C[Update Meta Description]
    A --> D[Update Open Graph Tags]
    
    B --> E[Browser Tab Title]
    C --> F[Search Engine Description]
    D --> G[Social Media Preview]
    
    style A fill:#e1f5fe
    style E fill:#e8f5e8
    style F fill:#fff3e0
    style G fill:#f3e5f5
```

### Meta Tags per Route
```typescript
const routeMeta = {
  '/': {
    title: 'Djoko Waluyo - AI Engineer & Data Analyst',
    description: 'Portfolio of Djoko Waluyo, showcasing AI engineering projects and data analysis expertise.',
    keywords: 'AI Engineer, Data Analyst, Machine Learning, Portfolio'
  },
  '/projects': {
    title: 'Projects - Djoko Waluyo',
    description: 'Explore my latest projects in AI, machine learning, and data analysis.',
    keywords: 'AI Projects, Machine Learning, Data Science, Software Development'
  },
  '/blog': {
    title: 'Blog - Djoko Waluyo',
    description: 'Technical articles and insights on AI, data science, and software development.',
    keywords: 'Tech Blog, AI Articles, Data Science, Programming'
  }
};
```

## 🔍 URL Structure Strategy

```mermaid
graph TD
    A[Clean URLs] --> B[No Hash Routing]
    A --> C[Descriptive Paths]
    A --> D[SEO Friendly]

    B --> E[Example: /projects vs /#/projects]
    C --> F[Example: /about vs /page1]
    D --> G[Benefit: Keywords in URLs]

    style A fill:#e1f5fe
    style E fill:#e8f5e8
    style F fill:#e8f5e8
    style G fill:#e8f5e8
```

### URL Patterns
- **Home**: `/` - Clean root for landing page
- **Projects**: `/projects` - Clear project showcase
- **Blog**: `/blog` - Simple blog section
- **About**: `/about` - Personal information
- **Contact**: `/contact` - Contact form and links

## 🔄 Browser History Management

```mermaid
sequenceDiagram
    participant U as User
    participant B as Browser
    participant R as Router
    participant H as History API
    
    U->>R: Navigate to new route
    R->>H: pushState()
    H->>B: Update URL without reload
    
    U->>B: Click back button
    B->>H: popstate event
    H->>R: Navigate to previous route
    R->>U: Render previous page
```

## 📱 Responsive Navigation Patterns

```mermaid
graph TB
    subgraph "Desktop Navigation"
        A[Horizontal Menu Bar] --> B[Always Visible]
        B --> C[Hover Effects]
    end
    
    subgraph "Mobile Navigation"
        D[Hamburger Menu] --> E[Slide-out Panel]
        E --> F[Full-screen Options]
    end
    
    subgraph "Tablet Navigation"
        G[Compact Horizontal] --> H[Responsive Text]
        H --> I[Touch-friendly Targets]
    end
    
    style A fill:#e8f5e8
    style D fill:#fff3e0
    style G fill:#f3e5f5
```

## 🎨 Navigation Animation Strategy

```mermaid
graph LR
    A[Route Change] --> B[Exit Animation]
    B --> C[Component Unmount]
    C --> D[New Component Mount]
    D --> E[Enter Animation]
    
    A --> F[Loading State]
    F --> G[Content Fade In]
    
    style A fill:#e1f5fe
    style E fill:#e8f5e8
    style G fill:#e8f5e8
```

## 🔧 Performance Considerations

### Route-based Code Splitting
```typescript
// Lazy loading for better performance
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));

// Wrapped with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/projects" element={<Projects />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>
```

### Preloading Strategy
```mermaid
graph LR
    A[Current Page] --> B[Preload Critical Routes]
    B --> C[/projects on hover]
    B --> D[/contact on scroll]
    
    E[User Intent] --> F[Predictive Loading]
    F --> G[Faster Navigation]
    
    style A fill:#e1f5fe
    style G fill:#e8f5e8
```

This routing architecture ensures smooth navigation, optimal performance, and excellent user experience across all devices and platforms.
