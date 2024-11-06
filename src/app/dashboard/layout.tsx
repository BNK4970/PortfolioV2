export default function Layout({
    children,
    course,
    reduction,
    notification,
    profit,
    user,
  }: {
    children: React.ReactNode
    course: React.ReactNode
    reduction: React.ReactNode
    notification: React.ReactNode
    profit: React.ReactNode
    user: React.ReactNode
  }) {
    return (
      <main className="grid grid-cols-3 grid-rows-3 gap-4">
        {reduction}
        {course}
        {notification}
        {profit}
        {user}
        {children}
      </main>
    )
  }