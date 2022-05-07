import Chart from "../../components/chart/Chart";
import Featuredinfo from "../../components/featuredInfo/Featuredinfo";
import "./home.css";
import { userData } from "../../dummydata";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Widgetsm from "../../components/widgetSm/Widgetsm";



export default function Home() {
  return (
    <div className="home">
<Featuredinfo/>
<Chart data={userData} title="User Analytics" grid dataKey="Activeuser"/>
<div className="HomeWigets">
  <WidgetLg/>
  <Widgetsm/>
</div>
    </div>
  )
}
