"use client";

export default function Button({ style, children, ...props }) {
  return (
    <button className={`${style} cursor-pointer rounded-full transition`} {...props}>{children}</button>
  )
}
