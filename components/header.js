import Link from 'next/link'

const Header = () => {
  return(
    <header>
      <Link href="/works">
        <a>Works</a>
      </Link>
      <Link href="/skills">
        <a>Skills</a>
      </Link>
    </header>
  )
}

export default Header