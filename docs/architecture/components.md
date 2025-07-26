# Component Architecture

This document details the component structure, hierarchy, and design patterns used throughout the portfolio application.

## 🏗️ Component Hierarchy

```mermaid
graph TB
    subgraph "Application Root"
        A[App.tsx] --> B[Header]
        A --> C[Router]
        A --> D[Providers]
    end
    
    subgraph "Page Components"
        C --> E[Index/Home]
        C --> F[Projects]
        C --> G[Blog]
        C --> H[About]
        C --> I[Contact]
        C --> J[NotFound]
    end
    
    subgraph "Layout Components"
        B --> K[Navigation]
        B --> L[Mobile Menu]
        E --> M[Hero Section]
        E --> N[Projects Section]
        E --> O[Skills Section]
        E --> P[About Section]
        E --> Q[Contact Section]
    end
    
    subgraph "UI Components"
        R[Button] --> S[Variants]
        T[Card] --> U[Content Areas]
        V[Avatar] --> W[Profile Image]
        X[Badge] --> Y[Skill Tags]
    end
    
    style A fill:#e1f5fe
    style E fill:#f3e5f5
    style R fill:#e8f5e8
```

## 📦 Component Categories

### 1. Page Components
High-level components that represent entire pages and contain business logic.

```mermaid
classDiagram
    class PageComponent {
        +render() JSX.Element
        +handleNavigation() void
        +manageState() void
    }
    
    class Index {
        +heroData object
        +projectsData array
        +skillsData object
        +render() JSX.Element
    }
    
    class Projects {
        +projectsList array
        +filterProjects() array
        +render() JSX.Element
    }
    
    class Blog {
        +blogPosts array
        +categories array
        +render() JSX.Element
    }
    
    PageComponent <|-- Index
    PageComponent <|-- Projects
    PageComponent <|-- Blog
```

### 2. Layout Components
Components responsible for page structure and navigation.

```mermaid
classDiagram
    class Header {
        +navigation array
        +isOpen boolean
        +toggleMenu() void
        +render() JSX.Element
    }
    
    class Navigation {
        +items array
        +activeRoute string
        +isActive() boolean
        +render() JSX.Element
    }
    
    class MobileMenu {
        +isOpen boolean
        +onClose() void
        +render() JSX.Element
    }
    
    Header --> Navigation
    Header --> MobileMenu
```

### 3. UI Components (shadcn/ui)
Reusable, atomic UI components with consistent styling.

```mermaid
classDiagram
    class Button {
        +variant string
        +size string
        +onClick() void
        +children ReactNode
        +render() JSX.Element
    }
    
    class Card {
        +className string
        +children ReactNode
        +render() JSX.Element
    }
    
    class Avatar {
        +src string
        +alt string
        +fallback string
        +render() JSX.Element
    }
    
    class Badge {
        +variant string
        +children ReactNode
        +render() JSX.Element
    }
```

## 🎨 Component Design Patterns

### 1. Compound Components
Components that work together to form a cohesive unit.

```typescript
// Card compound component example
<Card>
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription>Project description</CardDescription>
  </CardContent>
</Card>
```

### 2. Render Props Pattern
Components that share logic through function props.

```typescript
// Example of render prop pattern
<DataProvider>
  {({ data, loading, error }) => (
    loading ? <Skeleton /> : <Content data={data} />
  )}
</DataProvider>
```

### 3. Composition Pattern
Building complex UIs by composing simple components.

```mermaid
graph LR
    A[Simple Components] --> B[Composed Components]
    B --> C[Complex Features]
    
    subgraph "Example"
        D[Button] --> E[ButtonGroup]
        F[Input] --> E
        E --> G[Form Section]
    end
    
    style A fill:#e8f5e8
    style B fill:#fff3e0
    style C fill:#e1f5fe
```

## 🔧 Component Props Interface

### Button Component Props
```typescript
interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'alive' | 'shimmer' | 'bounce'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
}
```

### Card Component Props
```typescript
interface CardProps {
  className?: string
  children: React.ReactNode
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}
```

## 🎯 Component State Management

```mermaid
stateDiagram-v2
    [*] --> Initial
    Initial --> Loading
    Loading --> Success
    Loading --> Error
    Success --> Updated
    Error --> Retry
    Retry --> Loading
    Updated --> Success
    
    note right of Success
        Component rendered
        with data
    end note
    
    note right of Error
        Error state with
        retry mechanism
    end note
```

## 🔄 Component Lifecycle

```mermaid
sequenceDiagram
    participant P as Parent Component
    participant C as Child Component
    participant S as State
    participant D as DOM
    
    P->>C: Mount with props
    C->>S: Initialize state
    C->>D: Render to DOM
    
    P->>C: Update props
    C->>S: Update state
    C->>D: Re-render
    
    P->>C: Unmount
    C->>S: Cleanup
    C->>D: Remove from DOM
```

## 📱 Responsive Component Strategy

```mermaid
graph TD
    A[Component] --> B{Screen Size}
    B -->|Mobile| C[Mobile Layout]
    B -->|Tablet| D[Tablet Layout]
    B -->|Desktop| E[Desktop Layout]
    
    C --> F[Stack Layout]
    D --> G[Grid 2-Col]
    E --> H[Grid 3-Col]
    
    style A fill:#e1f5fe
    style C fill:#ffebee
    style D fill:#f3e5f5
    style E fill:#e8f5e8
```

## 🧪 Component Testing Strategy

```mermaid
graph LR
    A[Unit Tests] --> B[Component Tests]
    B --> C[Integration Tests]
    C --> D[E2E Tests]
    
    A --> E[Props Testing]
    A --> F[State Testing]
    B --> G[Rendering Tests]
    B --> H[Event Testing]
    C --> I[Page Flow Tests]
    D --> J[User Journey Tests]
    
    style A fill:#e8f5e8
    style B fill:#fff3e0
    style C fill:#f3e5f5
    style D fill:#e1f5fe
```

## 🎨 Styling Strategy

### CSS-in-JS vs Utility Classes
```mermaid
graph TB
    A[Styling Approach] --> B[Tailwind Utilities]
    A --> C[CSS Variables]
    A --> D[Component Variants]
    
    B --> E[Responsive Design]
    B --> F[State Variants]
    C --> G[Theme System]
    C --> H[Design Tokens]
    D --> I[Button Variants]
    D --> J[Card Variants]
    
    style A fill:#e1f5fe
    style B fill:#e8f5e8
    style C fill:#fff3e0
    style D fill:#f3e5f5
```

## 🔧 Component Development Guidelines

### 1. Single Responsibility Principle
Each component should have one clear purpose and responsibility.

### 2. Composition over Inheritance
Prefer composing components rather than extending them.

### 3. Props Interface Design
- Use TypeScript interfaces for all props
- Provide sensible defaults
- Make optional props truly optional

### 4. Accessibility First
- Include proper ARIA labels
- Support keyboard navigation
- Maintain semantic HTML structure

### 5. Performance Considerations
- Use React.memo() for expensive components
- Implement proper key props for lists
- Avoid inline functions in render

This component architecture ensures maintainable, reusable, and performant code throughout the portfolio application.