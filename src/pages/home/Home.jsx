import Chart from "../../components/charts/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetsSm from "../../components/widgetSm/WidgetSm";
import WidgetsLg from "../../components/widgetLg/WidgetLg";
export default function home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetsSm/>
                <WidgetsLg/>
            </div>
        </div>
    );
}
