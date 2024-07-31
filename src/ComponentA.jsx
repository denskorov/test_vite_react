import ComponentB from "./ComponentB.jsx";
import {createContext, useEffect, useState} from "react";

export const UserContext = createContext();

function ComponentA() {

    const [user, setUser] = useState("Denys");

    useEffect(()=>{
        setTimeout(()=>{
            setUser('TEst')
        }, 2000)
    }, [])

    return (<>
        <div className="box">
            <h1>Component A</h1>
            <h2>Hi {user}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    </>)
}

export default ComponentA