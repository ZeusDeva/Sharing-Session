import AuthStorage from "src/utils/auth-storage";
import { useEffect } from "react";
import Login from "../Login";
import Dashboard from "../Dashboard";
import { useSession } from "next-auth/client";

export default function Home() {

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

  return <>{AuthStorage.loggedIn ? <Dashboard /> : <Login/>}</>;
}
