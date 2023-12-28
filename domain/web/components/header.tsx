import Link from 'next/link'

const Header = () => {
    return (
        <div className="header-container">
            <Link href='/'>Home</Link>
            <Link href='/dashboard'>Dashboard</Link>
        </div>
    )
}

export default Header
