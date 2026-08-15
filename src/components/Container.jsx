export default function Container({
  as: Tag = 'div',
  children,
  className = '',
  ...props
}) {
  return (
    <Tag
      className={`mx-auto w-full min-w-0 max-w-6xl px-5 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
