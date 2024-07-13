function Contact(){
    return(
        <div id="contact" className=" flex flex-col h-44 w-11/12 justify-around items-center my-28 border-t-4
                           xl:flex-row xl:h-16 xl:p-5 xl:mt-60 xl:justify-between">
            <p className="text-white  font-semibold xl:text-3xl xl:font-bold">SATHISHKUMAR</p>
            <p className="text-white  font-semibold xl:text-3xl xl:font-bold">9487118838</p>
            <p className="text-white  font-semibold xl:text-3xl xl:font-bold">sathish.jk2410@gmail.com</p>
          
            <div className="flex w-36   justify-around">
                <a href="https://www.linkedin.com/in/sathishkumar-k-07220b26a/"><img className="h-10" src="../../src/assets/linkedin.svg" alt="linkedin" /></a>
                <a  href="https://github.com/jk-sathish"><img className="h-10"src="../../src/assets/github.svg" alt="github" /></a>
            </div>
        </div>
    );
};

export default Contact;