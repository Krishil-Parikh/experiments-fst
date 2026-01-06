// src/components/ui/Section.tsx
import Container from "./Container";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  size?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  size = "lg",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-20 lg:py-24", className)}>
      <Container size={size} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}