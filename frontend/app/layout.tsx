export const metadata = {
  title: 'Mi App FastAPI + Next.js',
  description: 'Aplicación fullstack con FastAPI y Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}