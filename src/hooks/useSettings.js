import { useContext } from "react";
import SettingsContext from "../Context/SettingsContext";


const useSettings = () => useContext(SettingsContext)

export default useSettings
