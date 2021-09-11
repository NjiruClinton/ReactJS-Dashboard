import "./widgetLg.css";

export default function WidgetsLg() {

    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/156964273_271741740990557_7638442370444725124_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEEGp4YBNcq_ujIX2UVePa9hRdC7-0v7ICFF0Lv7S_sgCj1tfTQfK8CBE81M0rqQvOMYPvUmnyIWrJrnX8aQupO&_nc_ohc=HreAkjQLbTkAX-PAePP&_nc_ht=scontent-mba1-1.xx&oh=fe82b25a833b9a883e78f0c27e412669&oe=61385DD1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/156964273_271741740990557_7638442370444725124_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEEGp4YBNcq_ujIX2UVePa9hRdC7-0v7ICFF0Lv7S_sgCj1tfTQfK8CBE81M0rqQvOMYPvUmnyIWrJrnX8aQupO&_nc_ohc=HreAkjQLbTkAX-PAePP&_nc_ht=scontent-mba1-1.xx&oh=fe82b25a833b9a883e78f0c27e412669&oe=61385DD1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/156964273_271741740990557_7638442370444725124_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEEGp4YBNcq_ujIX2UVePa9hRdC7-0v7ICFF0Lv7S_sgCj1tfTQfK8CBE81M0rqQvOMYPvUmnyIWrJrnX8aQupO&_nc_ohc=HreAkjQLbTkAX-PAePP&_nc_ht=scontent-mba1-1.xx&oh=fe82b25a833b9a883e78f0c27e412669&oe=61385DD1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://scontent-mba1-1.xx.fbcdn.net/v/t1.6435-9/156964273_271741740990557_7638442370444725124_n.jpg?_nc_cat=1&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeEEGp4YBNcq_ujIX2UVePa9hRdC7-0v7ICFF0Lv7S_sgCj1tfTQfK8CBE81M0rqQvOMYPvUmnyIWrJrnX8aQupO&_nc_ohc=HreAkjQLbTkAX-PAePP&_nc_ht=scontent-mba1-1.xx&oh=fe82b25a833b9a883e78f0c27e412669&oe=61385DD1" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}