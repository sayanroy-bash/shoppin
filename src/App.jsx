import google from "./assets/googlelogo.png"

function App() {

  return (
    <>
      <div id="container" style={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",height:"100vh"}}>
        <nav style={{display:"flex",justifyContent:'end',gap:10}}>
          <p>Gmail</p>
          <p>Images</p>
          <button className="signin">SignIn</button>
        </nav>
        <main >
          <img src={google} alt="" style={{display:"block",margin:"auto"}}/>
          <div style={{border:"1px solid black",display:"flex",alignItems:"center"}}>
            <span className="material-symbols-outlined" style={{display:"block"}}>search</span>
            <input type="search" name="" id="search" style={{display:"block"}}/>
            <svg style={{display:"block"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/></svg>
            <svg style={{display:"block"}} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z"/></svg>
          </div>
          <div>
            <button className="button1">Google Search</button>
            <button className="button2">I am feeling lucky</button>
          </div>
        </main>
        <footer>
          <div style={{background:"#C1BAA1"}}>
            <p>India</p>
          </div>
          <div style={{display:"flex",background:"#ECEBDE",gap:10}}>
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p>How search works</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
