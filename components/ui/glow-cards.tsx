"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  hoverEffect?: boolean;
}

export interface GlowingCardsProps {
  children: React.ReactNode;
  className?: string;
  enableGlow?: boolean;
  glowRadius?: number;
  glowOpacity?: number;
  animationDuration?: number;
  enableHover?: boolean;
  gap?: string;
  maxWidth?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  responsive?: boolean;
  customTheme?: {
    cardBg?: string;
    cardBorder?: string;
    textColor?: string;
    hoverBg?: string;
  };
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = "hsl(var(--primary))",
  hoverEffect = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex-1 min-w-[14rem] p-6 rounded-2xl text-black",
        "bg-background border",
        hoverEffect && "transition-all duration-400 ease-out",
        className
      )}
      style={{
        // CSS variable for children overlay to consume
        ["--glow-color" as any]: glowColor,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </div>
  );
};

export const GlowingCards: React.FC<GlowingCardsProps> = ({
  children,
  className,
  enableGlow = true,
  glowRadius = 25,
  glowOpacity = 1,
  animationDuration = 400,
  enableHover = true,
  gap = "2.5rem",
  maxWidth = "75rem",
  padding = "3rem 1.5rem",
  backgroundColor,
  borderRadius = "1rem",
  responsive = true,
  customTheme,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay || !enableGlow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      overlay.style.setProperty("--x", x + "px");
      overlay.style.setProperty("--y", y + "px");
      overlay.style.setProperty("--opacity", String(glowOpacity));
      setShowOverlay(true);
    };

    const handleMouseLeave = () => {
      setShowOverlay(false);
      overlay.style.setProperty("--opacity", "0");
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enableGlow, glowOpacity]);

  const containerStyle = {
    ["--gap" as any]: gap,
    ["--max-width" as any]: maxWidth,
    ["--padding" as any]: padding,
    ["--border-radius" as any]: borderRadius,
    ["--animation-duration" as any]: animationDuration + "ms",
    ["--glow-radius" as any]: glowRadius + "rem",
    ["--glow-opacity" as any]: glowOpacity,
    backgroundColor: backgroundColor || undefined,
    ...customTheme,
  } as React.CSSProperties;

  return (
    <div className={cn("relative w-full", className)} style={containerStyle}>
      <div
        ref={containerRef}
        className={cn("relative max-w-[var(--max-width)] mx-auto px-6 py-2")}
        style={{ padding: "var(--padding)" }}
      >
        <div
          className={cn(
            "flex items-stretch justify-center flex-wrap gap-[var(--gap)]",
            responsive && "flex-col sm:flex-row"
          )}
        >
          {children}
        </div>

        {enableGlow && (
          <div
            ref={overlayRef}
            className={cn(
              "absolute inset-0 pointer-events-none select-none",
              "opacity-0 transition-all duration-200 ease-out"
            )}
            style={{
              WebkitMask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              mask:
                "radial-gradient(var(--glow-radius) var(--glow-radius) at var(--x, 0) var(--y, 0), #000 1%, transparent 50%)",
              opacity: showOverlay ? "var(--opacity)" : "0",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            <div
              className={cn(
                "flex items-stretch justify-center flex-wrap gap-[var(--gap)] max-w-[var(--max-width)] center mx-auto",
                responsive && "flex-col sm:flex-row"
              )}
              style={{ padding: "var(--padding)" }}
            >
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === GlowingCard) {
                  const glow = (child.props as any).glowColor || "hsl(var(--primary))";
                  return React.cloneElement(child as React.ReactElement<any>, {
                    className: cn(
                      (child.props as any).className,
                      "bg-opacity-15 border-opacity-100"
                    ),
                    style: {
                      ...(child.props as any).style,
                      backgroundColor: glow + "15",
                      borderColor: glow,
                      boxShadow: "0 0 0 1px inset " + glow,
                    },
                  });
                }
                return child as React.ReactElement;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlowingCards;


