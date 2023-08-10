import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const RecentTile = () => {

    var items: any[];
    items = ['George', 'Coco', 'Sasha', 'Pumpkin', 'Garfield', 'Mittens']
    var item = items[Math.floor(Math.random() * items.length)];
    return (
        <div className="recent-tile-wrapper">
            <div className="recent-tile-icon">
                <img
                    width={'50px'}
                    src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${item}`}
                    alt="avatar" />
            </div>
            <div className="recent-tile-text">
                Paid to Satya <span>₹ 678
                </span>
            </div>
            <div className="recent-tile-btn">
            <ArrowForwardIosIcon  />
            </div>
        </div>
    )
}

export default RecentTile