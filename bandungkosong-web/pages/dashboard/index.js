import { useContext, useEffect, useState } from "react";
import Breakdown from "../../components/Breakdown.component";
import Data from "../../components/sales/SalesData.component";
import Dishes from "../../components/Dishes.component";
import Sidebar from "../../components/ui/Sidebar.component";
import Toast from "../../components/ui/Toast.component";
import AppContext from "../../store/context";

const Dashboard = () => {
  // I forgot how to do proper dynamic components
  const [currentComponent, setCurrentComponent] = useState(
    <Breakdown></Breakdown>
  );

  const appContext = useContext(AppContext);
  const currentSlug = appContext.currentSlug;
  const isToastShown = appContext.isToastShown;

  useEffect(() => {
    let newComponent;

    switch (currentSlug) {
      case "breakdown":
        newComponent = <Breakdown></Breakdown>;
        break;
      case "data":
        newComponent = <Data></Data>;
        break;
      case "dishes":
        newComponent = <Dishes></Dishes>;
        break;
      default:
        newComponent = <div>Error, currerntSlug incompatible</div>;
    }

    setCurrentComponent(newComponent);
  }, [currentSlug]);

  return (
    <div className="w-full h-screen flex">
      <Sidebar></Sidebar>
      <main className="p-8 h-full w-full">{currentComponent}</main>
      {isToastShown && <Toast></Toast>}
    </div>
  );
};

export default Dashboard;
