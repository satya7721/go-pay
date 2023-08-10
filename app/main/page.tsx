"use client"
import React from 'react'
import MenuIcon from '@/assets/icons/menu'
import Image from 'next/image'
import mainLogo from '../../assets/images/logo.png'
import UserLogo from '@/assets/icons/user'
import SearchBar from '@/components/ui/searchBar'
import ButtonGroupCustom from '@/components/ui/buttonGroup'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RecentTr from '@/components/RecentTr'
function mainPage() {
    return (
        <div className='main-page-container'>
            <div className="main-page-header">
                <div className="first-row">
                    <MenuIcon />
                    <Image src={mainLogo} priority alt="logo" width={'45'} height={'45'} />
                    <UserLogo />
                </div>
                <div className="sec-row">
                    <SearchBar />
                </div>
                <div className="third-row">
                    <ButtonGroupCustom />
                </div>
            </div>
            <div className="main-page-mid">
                <div className="copy-text-wrapper">
                    <div className="copy-text">
                        My UID: satyam@oksbi
                    </div>
                    <ContentCopyIcon />
                </div>
            </div>
            <div className="main-page-bottom">
                <RecentTr/>
            </div>
            <div className="main-page-fotter">
                
            </div>
        </div>
    )
}

export default mainPage
