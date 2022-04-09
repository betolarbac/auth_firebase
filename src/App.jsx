import { authentication } from './firebase';
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styles from './login.module.scss';

function App() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re)=>{
      console.log(re)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
   <div className={styles.login}>
      <button 
      onClick={signInWithGoogle}
    >google</button>
   </div>
  )
}

export default App
