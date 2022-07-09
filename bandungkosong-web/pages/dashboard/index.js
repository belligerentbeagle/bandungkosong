import { useEffect, useState } from "react";
import Breakdown from "../../components/ui/Breakdown.component";
import Data from "../../components/ui/Data.component";
import Dishes from "../../components/ui/Dishes.component";
import Sidebar from "../../components/ui/Sidebar.component";

const Dashboard = () => {
  // I forgot how to do proper dynamic components
  const [currentComponent, setCurrentComponent] = useState(
    <Breakdown></Breakdown>
  );

  const [currentSlug, setCurrentSlug] = useState("breakdown");

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

  const changeRouteHandler = (slug) => setCurrentSlug(slug);

  return (
    <div className="w-full h-screen flex">
      <Sidebar changeRouteHandler={changeRouteHandler}></Sidebar>
      <main className="p-8 h-full w-full">{currentComponent}</main>
    </div>
  );
};

export default Dashboard;
