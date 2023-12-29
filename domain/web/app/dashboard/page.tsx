import React, { Suspense } from 'react'
import Loading from './loading'

const Table = React.lazy(() => import('@/widgets/dashboard/table'))

const Page = () => {
    return (
        <div>
            <div className='dashboard-container'>
                Table
                
                <Suspense fallback={<Loading />}>
                    <Table />
                </Suspense>
            </div>
        </div>
    )
}

export default Page
