import { useRoutes } from "react-router-dom";
import { SettingsProvider } from "./Context/SettingsContext";
import Apptheme from "./components/AdminLayout/SidenavTheme/Apptheme";
import { AuthProvider } from "./Context/JWTAuthContext";
import { Store } from "./redux/Store";
import { Provider } from "react-redux";
import routes from "./routes";

function App() {
  const content = useRoutes(routes);

  return (
    <Provider store={Store}>
      <SettingsProvider>
        <Apptheme>
          <AuthProvider>{content}</AuthProvider>
        </Apptheme>
      </SettingsProvider>
    </Provider>
  );
}

export default App;
