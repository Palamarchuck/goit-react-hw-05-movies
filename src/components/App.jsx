import Menu from "./Menu/menu";
import UserRoutes from "../UserRoutes";
import '../shared/styles/style.css';


export const App = () => {
  return (
    <div className="App">
      <Menu />
      <UserRoutes />
    </div>
  );
};
