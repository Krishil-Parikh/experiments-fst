Markdown# Commands & Steps – Experiment 3  
Reusable Layout & UI Components for Consistent Design (Next.js + Tailwind)

## Goal
Create atomic and composed reusable components to reduce repetition  
and establish a consistent, maintainable design system across the portfolio.

## 1. Create components folders

```bash
mkdir -p src/components/{ui,sections,layout}
Current structure after this experiment:
textsrc/components/
├── layout/               # global wrappers (already created in Exp 2)
│   ├── Navbar.tsx
│   └── Footer.tsx
├── ui/                   # small, reusable, atomic components ← NEW
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   └── Section.tsx
└── sections/             # bigger composed blocks (optional for now)
    └── (Hero.tsx, ProjectGrid.tsx, etc. - can be added later)
2. Important utility file (cn - classnames merge)
Bashmkdir -p src/lib
touch src/lib/utils.ts
Content of src/lib/utils.ts:
TypeScriptimport { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
Install dependencies if not already present:
Bashnpm install clsx tailwind-merge
# or pnpm add, bun add, yarn add
3. Main reusable components created in Experiment 
| Component  | File location                         | Purpose                                               |
|-----------|----------------------------------------|-------------------------------------------------------|
| Container | src/components/ui/Container.tsx        | Consistent max-width + responsive padding             |
| Section   | src/components/ui/Section.tsx          | Vertical rhythm + section-level spacing               |
| Button    | src/components/ui/Button.tsx           | Consistent buttons (variants, sizes, links)           |
| Card      | src/components/ui/Card.tsx             | Project cards, blog previews, feature blocks          |


4. Pages that were refactored / started using these components
After Experiment 3 we updated / started using the new components in:
textsrc/app/
├── projects/page.tsx     ← Projects                ← fully refactored with Card + Section + Container + Button
└── blog/page.tsx         ← Blog list               ← fully refactored with Card + Section