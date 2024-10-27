import React from "react";

export function Card({ className, children, ...props }) {
  return (
    <div
      className={`bg-inherit  rounded-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
