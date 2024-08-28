import AuthStorage from "src/utils/auth-storage";
import { useEffect } from "react";
import Login from "../Login";
import Dashboard from "../Dashboard";
import { useSession } from "next-auth/client";
import ExampleTab from "../ExampleTab";
import { useSelector } from "react-redux";
import DateTab from "../ExampleTab/DateTab";
import InputTab from "../ExampleTab/InputTab";
import OptionTab from "../ExampleTab/OptionTab";
import ViewTab from "../ExampleTab/ViewTab";

export default function Home() {
    // //for change view
    // const stateMenuSidebar = useSelector((state) => state.setMenu);
    // const selectedKey = stateMenuSidebar.selectedKey;

    const [session, setSession] = useSession();

    useEffect(()=>{
      if(session){
        const token = session.jwt

          AuthStorage.value = {
            "firstName": "Hafid",
            "gender": "Male",
            "token": token
          }  
      }

    },[session])

    // //tab and subtab
    // // return <>{AuthStorage.loggedIn ? <ExampleTab/> : <Login/>}</>;

    // //sidebar
    // return <>{AuthStorage.loggedIn ? (
    //   <>
    //   {selectedKey == "1" && <Dashboard/>}
    //   {selectedKey == "2" && <DateTab/>}
    //   {selectedKey == "3" && <InputTab/>}
    //   {selectedKey == "4" && <OptionTab/>}
    //   {selectedKey == "5" && <ViewTab/>}
    //   </>
    // ) : <Login/>}</>;

    // //nb: these 2 types can be combined according to needs

    return <>{AuthStorage.loggedIn ? <Dashboard/> : <Login/>}</>;
}
