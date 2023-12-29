import Link from 'next/link'

const Header = () => {
    return (
        <div className="header">
            <div className="sides">
                <Link href='/'>Home</Link>
                <Link href='/dashboard'>Dashboard</Link>
            </div>
            <div className="sides"> <a href="#" className="menu"> </a></div>
                <div className="info">
                    <h4><a href="#category">FULL STACK DEVELOPER</a></h4>
                    <h1>THIS IS THE COOKING SUPPORTING WEBPAGE FOR MYSELF</h1>
                <div className="meta">
                    <Link  href="https://www.facebook.com/kuZinBeo" target="_b" className="author"></Link><br/>
                    By <Link href="https://www.facebook.com/kuZinBeo" target="_b">Davin Ly</Link> on Dec 30, 2023
                </div>
            </div>
      </div>
    )
}

export default Header
