 function About(){
    return(
        <div id="about" className="xl:flex xl:flex-row xl:w-11/12 xl:h-96xl: bg-back xl:my-36 xl:justify-around 
                         flex flex-col-reverse items-center justify-between my-5">
            <div className="xl:w-6/12 xl:flex xl:flex-col xl:justify-evenly w-4/5 my-4" >
                <p className="text-white xl:mb-8 xl:text-6xl xl:font-bold text-2xl font-bold">Hi I'm Sathish</p>
                <p className="text-white xl:text-2xl xl:font-semibold">Welcome to my portfolio! I am a passionate Frontend Developer dedicated to crafting beautiful, responsive web experiences. 
                    Explore my latest projects and discover how my skills and creativity can bring value to your team. 
                    Let's connect and create something amazing together!</p>
            </div>
            <div className="xl:w-1/4 xl:h-96 rounded-full w-3/4">
                <img className="xl:w-full xl:h-full rounded-full " src="../../src/assets/profile.jpg" alt="profile" />
            </div>
        </div>
    );
 }

 export default About;