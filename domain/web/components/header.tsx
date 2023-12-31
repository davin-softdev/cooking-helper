'use client'
import { UserServices } from '@/hooks/user'
import { IUser } from '@/types/user'
import Link from 'next/link'

const Header = () => {
    const { data, loading, error } = UserServices.useFetchUser<IUser>('http://localhost:8000/users/u001')

    console.log(data)
    
    return (
        <div className="header">
            <div className="sides">
                <Link href='/'>Home</Link>
                <Link href='/dashboard'>Dashboard</Link>
            </div>
            <div className="sides"> <a href="#" className="menu"> </a></div>
                <div className="info">
                    <h4><a href="#category">{`${data?.role as string}`}</a></h4>
                    <h1>THIS IS THE COOKING SUPPORTING WEBPAGE FOR MYSELF</h1>
                <div className="meta">
                    <Link  href={`${data?.social_media[0].url as string}`} target="_b" className="author"></Link><br/>
                    By <Link href={`${data?.social_media[0].url as string}`} target="_b">{`${data?.name as string}`}</Link> on Dec 30, 2023
                </div>
            </div>
      </div>
    )
}

export default Header
