import Link from "next/link"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-light-primary/40 bg-dark-primary">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-white">1 Step Ahead</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium text-light-primary">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <Link href="/programs" className="transition-colors hover:text-white">Programs</Link>
          <Link href="/contact" className="transition-colors hover:text-white">Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}
