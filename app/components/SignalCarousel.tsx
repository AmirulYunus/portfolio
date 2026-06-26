"use client";

import type { PointerEvent, WheelEvent } from "react";
import { useEffect, useRef } from "react";

type SignalCard = {
  label: string;
  value: string;
  detail: string;
};

type SignalCarouselProps = {
  items: SignalCard[];
};

const BASE_SPEED = 24;
const MOMENTUM_DECAY = 0.94;
const MAX_RELEASE_SPEED = 900;
const REPEAT_COUNT = 3;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function SignalCarousel({ items }: SignalCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(0);
  const groupWidthRef = useRef(0);
  const lastFrameRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const dragRef = useRef({
    active: false,
    lastTime: 0,
    lastX: 0,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    const group = groupRef.current;
    if (!carousel || !group) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const setGroupWidth = () => {
      groupWidthRef.current = group.getBoundingClientRect().width;

      if (groupWidthRef.current > 0 && carousel.scrollLeft === 0) {
        carousel.scrollLeft = groupWidthRef.current;
      }
    };

    const wrapScroll = () => {
      const width = groupWidthRef.current;
      if (!width) {
        return;
      }

      while (carousel.scrollLeft >= width * 2) {
        carousel.scrollLeft -= width;
      }

      while (carousel.scrollLeft <= 0) {
        carousel.scrollLeft += width;
      }
    };

    let isMounted = true;

    const animate = (time: number) => {
      if (!isMounted) {
        return;
      }

      const lastFrame = lastFrameRef.current ?? time;
      const deltaSeconds = Math.min((time - lastFrame) / 1000, 0.05);
      lastFrameRef.current = time;

      if (!dragRef.current.active) {
        carousel.scrollLeft += (BASE_SPEED + speedRef.current) * deltaSeconds;
        speedRef.current *= Math.pow(MOMENTUM_DECAY, deltaSeconds * 60);

        if (Math.abs(speedRef.current) < 2) {
          speedRef.current = 0;
        }
      }

      wrapScroll();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    setGroupWidth();
    const resizeObserver = new ResizeObserver(setGroupWidth);
    resizeObserver.observe(group);

    if (!prefersReducedMotion) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      isMounted = false;
      resizeObserver.disconnect();
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const updateDragging = (isDragging: boolean) => {
    carouselRef.current?.toggleAttribute("data-dragging", isDragging);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      active: true,
      lastTime: performance.now(),
      lastX: event.clientX,
    };
    speedRef.current = 0;
    updateDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) {
      return;
    }

    const now = performance.now();
    const deltaX = event.clientX - dragRef.current.lastX;
    const deltaMs = Math.max(now - dragRef.current.lastTime, 16);

    event.currentTarget.scrollLeft -= deltaX;
    speedRef.current = clamp(
      (-deltaX / deltaMs) * 1000 * 1.4,
      -MAX_RELEASE_SPEED,
      MAX_RELEASE_SPEED,
    );

    dragRef.current.lastTime = now;
    dragRef.current.lastX = event.clientX;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) {
      return;
    }

    dragRef.current.active = false;
    updateDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
      return;
    }

    event.currentTarget.scrollLeft += event.deltaY;
    event.preventDefault();
  };

  return (
    <div
      ref={carouselRef}
      className="signal-carousel rounded-md border border-white/10 bg-black/25"
      onPointerCancel={stopDragging}
      onPointerDown={handlePointerDown}
      onPointerLeave={stopDragging}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onWheel={handleWheel}
      role="region"
      aria-label="Technology stack carousel"
    >
      <div className="signal-carousel__track">
        {Array.from({ length: REPEAT_COUNT }, (_, group) => (
          <div
            key={group}
            ref={group === 0 ? groupRef : undefined}
            aria-hidden={group > 0}
            className="signal-carousel__group"
          >
            {items.map((item) => (
              <div
                key={`${group}-${item.label}`}
                className="signal-card rounded-md border border-white/10 bg-[#101010] p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#ef4444]">
                    {item.label}
                  </p>
                  <span className="size-2 rounded-full bg-[#ef4444]" />
                </div>
                <h3 className="text-lg font-semibold text-[#fafafa]">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#a1a1aa]">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
