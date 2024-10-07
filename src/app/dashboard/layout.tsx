export default function Layout({
    children,
    course,
    reduction,
    notification,
    admin,
    user,
  }: {
    children: React.ReactNode
    course: React.ReactNode
    reduction: React.ReactNode
    notification: React.ReactNode
    admin: React.ReactNode
    user: React.ReactNode
  }) {
    return (
      <main>
        {children}
        {course}
        {reduction}
        {notification}
        {admin}
        {user}
      </main>
    )
  }