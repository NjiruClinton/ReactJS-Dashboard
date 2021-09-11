import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContiner">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/156964273_271741740990557_7638442370444725124_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEEGp4YBNcq_ujIX2UVePa9hRdC7-0v7ICFF0Lv7S_sgCj1tfTQfK8CBE81M0rqQvOMYPvUmnyIWrJrnX8aQupO&_nc_ohc=HreAkjQLbTkAX-PAePP&_nc_ht=scontent-mba1-1.xx&oh=fe82b25a833b9a883e78f0c27e412669&oe=61385DD1" alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowUserTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span> 
                        <div className="userShowInfo">
                        <PermIdentity classname="userShowIcon" style={{fontSize:"16px"}}/>
                        <span className="userShowInfoTitle">annabeck99</span>
                        </div>
                        <div className="userShowInfo">
                        <CalendarToday classname="userShowIcon" style={{fontSize:"16px"}}/>
                        <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                        <PhoneAndroid classname="userShowIcon" style={{fontSize:"16px"}}/>
                        <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                        <MailOutline classname="userShowIcon" style={{fontSize:"16px"}}/>
                        <span className="userShowInfoTitle">annabeck99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                        <LocationSearching classname="userShowIcon" style={{fontSize:"16px"}}/>
                        <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annabeck99" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Becker" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 234 567 67" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                            <img className="userUpdateImg" src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/156964273_271741740990557_7638442370444725124_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEEGp4YBNcq_ujIX2UVePa9hRdC7-0v7ICFF0Lv7S_sgCj1tfTQfK8CBE81M0rqQvOMYPvUmnyIWrJrnX8aQupO&_nc_ohc=HreAkjQLbTkAX-PAePP&_nc_ht=scontent-mba1-1.xx&oh=fe82b25a833b9a883e78f0c27e412669&oe=61385DD1" alt="" />
                            <label htmlFor="file">
                                <Publish className="userUpdateIcon"/>
                                </label>
                            <input type="file" id="file" style={{display:"none"}} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
