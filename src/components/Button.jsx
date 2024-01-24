"use client";

export default function Button({ style, children, ...props }) {
  return (
    <button className={`${style} cursor-pointer rounded-full px-6 py-2 transition`} {...props}>{children}</button>
  )
}
