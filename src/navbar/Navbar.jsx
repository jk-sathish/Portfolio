

function Navbar(){
    function myFunction() {
        let x = document.getElementById("nav");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      } 
    return(
        <div className="fixed flex justify-between items-center w-11/12 h-14 bg-back px-4 ">
            <div>
                <p className='text-white text-4xl'>&lt;Developer/&gt;</p>
            </div>
            <img className='block xl:hidden' onClick={myFunction} src="../../src/assets/menu.svg" alt="menu" />
            <div id="nav" className ="absolute flex-col justify-evenly items-center w-32 h-48 right-7 top-16 bg-back hidden
                                     xl:flex xl:flex-row  xl:justify-between xl:w-3/5 xl:h-auto xl:static ">
                <a className ="text-white font-semibold xl:text-xl" href="#about">Home</a>
                <a className ="text-white font-semibold xl:text-xl" href="#skills">Skills</a>
                <a className ="text-white font-semibold xl:text-xl" href="#project">Projects</a>
                <a className ="text-white font-semibold xl:text-xl"href= "#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;