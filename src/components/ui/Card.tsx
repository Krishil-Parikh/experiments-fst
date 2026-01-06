// src/components/ui/Card.tsx
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className, hoverable = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
        hoverable && "transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}

// Optional sub-components
Card.Header = function CardHeader({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6 pb-4 border-b border-gray-100", className)}>{children}</div>;
};

Card.Content = function CardContent({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("p-6", className)}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("px-6 py-4 border-t border-gray-100 bg-gray-50", className)}>{children}</div>;
};