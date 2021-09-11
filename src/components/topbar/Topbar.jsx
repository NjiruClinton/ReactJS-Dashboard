import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Clinton</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div><div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/156964273_271741740990557_7638442370444725124_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEEGp4YBNcq_ujIX2UVePa9hRdC7-0v7ICFF0Lv7S_sgCj1tfTQfK8CBE81M0rqQvOMYPvUmnyIWrJrnX8aQupO&_nc_ohc=HreAkjQLbTkAX-PAePP&_nc_ht=scontent-mba1-1.xx&oh=fe82b25a833b9a883e78f0c27e412669&oe=61385DD1" alt="avatar" className="topAvatar" />
                    
                </div>

            </div>
            
        </div>
    )
}

