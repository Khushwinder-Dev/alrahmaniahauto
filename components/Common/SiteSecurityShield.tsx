"use client";

import { useEffect } from "react";

/**
 * SiteSecurityShield
 * 
 * Provides client-side defense against content scraping, bulk image saving,
 * offline archiving shortcuts (Ctrl+S, Ctrl+U), and unauthorized asset dragging.
 * Form inputs, textareas, and buttons remain fully functional for real users.
 */
export default function SiteSecurityShield() {
  useEffect(() => {
    // 1. Prevent "Save Page As" (Ctrl+S / Cmd+S) and "View Source" (Ctrl+U / Cmd+U)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const isControlKey = isMac ? e.metaKey : e.ctrlKey;

      // Ctrl+S or Cmd+S (Save Page)
      if (isControlKey && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl+U or Cmd+U (View Page Source)
      if (isControlKey && (e.key === "u" || e.key === "U")) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 2. Prevent right-click context menu on images and media
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Allow right-click on input, textarea, and editable content
      const tagName = target.tagName?.toLowerCase();
      if (
        tagName === "input" ||
        tagName === "textarea" ||
        target.isContentEditable ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        return;
      }

      // If user right-clicks on an image, video, canvas, or protected card, block it
      if (
        tagName === "img" ||
        tagName === "video" ||
        tagName === "canvas" ||
        target.closest("img") ||
        target.closest("picture") ||
        target.closest("[data-protected]")
      ) {
        e.preventDefault();
        return false;
      }
    };

    // 3. Prevent dragging images to desktop or folder
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tagName = target.tagName?.toLowerCase();
      if (tagName === "img" || target.closest("img")) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });
    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("dragstart", handleDragStart, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("dragstart", handleDragStart, { capture: true });
    };
  }, []);

  return null;
}
