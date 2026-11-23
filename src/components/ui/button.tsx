import { Slot } from "@radix-ui/react-slot";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  asChild?: boolean;
  variant?: "default" | "hero" | "soft" | "forest";
  size?: "default" | "xl";
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  hero: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90",
  soft: "border border-border bg-background text-primary hover:bg-card",
  forest: "bg-foreground text-primary-foreground hover:bg-foreground/90",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  default: "h-10 px-4 py-2",
  xl: "min-h-12 px-6 py-3 text-base",
};

export function Button({
  asChild = false,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
