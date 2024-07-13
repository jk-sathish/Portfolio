function Skills(){
    return(
        <div  id="skills" className="flex flex-col w-11/12  justify-between items-center">
            <p className="text-white font-bold text-3xl mb-5 xl:text-6xl xl:mb-14">MY TECH STACK</p>
            <div className="flex w-full justify-around mb-10 xl:mb-24 ">
                <img className="h-14 xl:h-36" src="../../src/assets/html.svg" alt="html" />
                <img className="h-14 xl:h-36" src="../../src/assets/css.svg" alt="html" />
                <img className="h-14 xl:h-36" src="../../src/assets/js.svg" alt="html" />
                <img className="h-14 xl:h-36" src="../../src/assets/react.svg" alt="html" />
                <img className="h-14 xl:h-36" src="../../src/assets/tailwind.svg" alt="html" />
            </div>
            <div className="flex w-full justify-around ">
                <img className="h-14 xl:h-36" src="../../src/assets/bootstrap.svg" alt="bootstrap" />
                <img className="h-14 xl:h-36" src="../../src/assets/sass.svg" alt="sass" />
                <img className="h-14 xl:h-36" src="../../src/assets/git.svg" alt="git" />
                <img className="h-14 xl:h-36" src="../../src/assets/github.svg" alt="github" />
                <img className="h-14 xl:h-36" src="../../src/assets/vscode.svg" alt="vscode" />
            </div>
        </div>
    );
}

export default Skills;