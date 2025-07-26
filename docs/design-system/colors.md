# Color System

## 🎨 Color Palette

```mermaid
graph TB
    A[Color System] --> B[Primary Colors]
    A --> C[Semantic Colors]
    A --> D[Neutral Colors]
    
    B --> E[Primary: hsl(222.2 47.4% 11.2%)]
    B --> F[Primary Foreground: hsl(210 40% 98%)]
    
    C --> G[Success: hsl(142.1 76.2% 36.3%)]
    C --> H[Warning: hsl(47.9 95.8% 53.1%)]
    C --> I[Error: hsl(0 84.2% 60.2%)]
    
    D --> J[Background: hsl(0 0% 100%)]
    D --> K[Foreground: hsl(222.2 84% 4.9%)]
    D --> L[Muted: hsl(210 40% 96.1%)]
```

## 🌙 Theme Support
- Light theme (default)
- Dark theme with automatic switching
- High contrast support
- System preference detection

## 📐 Usage Guidelines
- Always use HSL color format
- Reference colors through CSS variables
- Maintain WCAG AA contrast ratios
- Test in both light and dark modes