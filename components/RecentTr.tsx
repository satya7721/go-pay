'use clent'

import React from 'react'
import RecentTile from './ui/recentTile'
 

const RecentTr = () => {
    return (
        <div className="recent-wrapper">
            <div className="recent-heading">
                Recent Transactions :
            </div>
            <div className="recent-list">
                <RecentTile />
                <RecentTile />
                <RecentTile />
            </div>
        </div>
    )
}

export default RecentTr