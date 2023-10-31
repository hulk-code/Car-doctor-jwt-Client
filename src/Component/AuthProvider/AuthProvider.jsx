

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import app from "../../FireBase/Firebase.config";




 export const AuthContext=createContext('')
 const auth=getAuth(app)
 
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user ,setUser]=useState('')
    
         
    const [loading ,setloading]=useState(true)
    const createUser=(email ,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn=(email ,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth ,email,password)
    }
    const LogOut=()=>{
        setloading(true)
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };
    
  useEffect(() =>{
     const unSubscribe=onAuthStateChanged(auth , currentUser =>{
        setUser(currentUser)
        setloading(false)
     })
     return()=>{
        unSubscribe();
     }
  },[])


    const authInfo={
        user,
        createUser,
        LogOut,
        logIn,
        loading,
        updateUserProfile
    }
    return (
      <AuthContext.Provider value={authInfo}>
       {children}
      </AuthContext.Provider>  
    );
};

export default AuthProvider;