import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dashboard',
}

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div>
            <p>Dashboard</p>
            
            {children}
        </div>
    )
}

export default Layout
