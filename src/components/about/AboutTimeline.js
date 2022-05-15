import projectTimeline from '../../data/projectTimeline.js'

const AboutTimeline = () => {
    return(
      <div className="flex flex-col justify-center py-6 lg:py-12">
        <div className="w-full mx-auto lg:max-w-8xl">

          <div className="relative">
            <div className="absolute hidden w-1 h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
              <div className="space-y-12 lg:space-y-10">
                
              {projectTimeline.map((obj) => {
                  return ( 
                  (obj.id % 2 === 0 ) ? 
                    (
                      (obj.id === 4) ? (
                        /*Right Side Timeline*/
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-end w-full mx-auto">
                            <div className="w-full lg:w-1/2 lg:pl-8">
                              <div className="p-4 shadow-lg bg-indigo-50 dark:bg-ternary-dark rounded text-ternary-dark dark:text-ternary-light">
                              <header class="flex justify-between">
                                <h3 className="font-general-medium font-semibold leading-normal tracking-wider text-lg">{obj.title}</h3>
                                <span className="font-bold tracking-wide text-lg">{obj.date}</span>
                              </header>
                              <div className="grid grid-cols-2 gap-1 mt-2 pt-3 items-center  border-t border-ternary-dark dark:border-ternary-light ">
                                <img src={obj.img} alt="Project" className="scale-50 object-cover rounded-lg sm:col-span-1 col-span-2 animate-spin-slow " ></img>
                                <p className="pl-2 text-base tracking-wider sm:col-span-1 col-span-2">{obj.desc}</p>
                              </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-500 border-2 border-indigo-700 dark:border-indigo-300 rounded-full left-1/2 sm:translate-y-0">
                            <span className="text-white font-semibold">{obj.id}</span>
                          </div>
                        </div>
                      ) : (
                        /*Right Side Timeline*/
                        <div className="flex flex-col items-center">
                          <div className="flex items-center justify-end w-full mx-auto">
                            <div className="w-full lg:w-1/2 lg:pl-8">
                              <div className="p-4 shadow-lg bg-indigo-50 dark:bg-ternary-dark rounded text-ternary-dark dark:text-ternary-light">
                              <header class="flex justify-between">
                                <h3 className="font-general-medium font-semibold leading-normal tracking-wider text-lg">{obj.title}</h3>
                                <span className="font-bold tracking-wide text-lg">{obj.date}</span>
                              </header>
                              <div className="grid grid-cols-2 gap-1 mt-2 pt-3 items-center  border-t border-ternary-dark dark:border-ternary-light ">
                                <img src={obj.img} alt="Project" className="object-cover rounded-lg sm:col-span-1 col-span-2"></img>
                                <p className="pl-2 text-base tracking-wider sm:col-span-1 col-span-2">{obj.desc}</p>
                              </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-500 border-2 border-indigo-700 dark:border-indigo-300 rounded-full left-1/2 sm:translate-y-0">
                            <span className="text-white font-semibold">{obj.id}</span>
                          </div>
                        </div>
                      )
                      
                    ) : (
                      /*Left side timeline */
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-start w-full mx-auto">
                          <div className="w-full lg:w-1/2 lg:pr-8">
                            <div className="p-4 shadow-lg bg-indigo-50 dark:bg-ternary-dark rounded text-ternary-dark dark:text-ternary-light">
                              <header class="flex justify-between">
                                <h3 className="font-general-medium font-semibold leading-normal tracking-wider text-lg">{obj.title}</h3>
                                <span className="font-bold tracking-wide text-lg">{obj.date}</span>
                              </header>
                              <div className="grid grid-cols-2 gap-1 mt-2 pt-3 items-center  border-t border-ternary-dark dark:border-ternary-light ">
                                <img src={obj.img} alt="Project" className="object-cover rounded-lg sm:col-span-1 col-span-2"></img>
                                <p className="pl-2 text-base tracking-wider sm:col-span-1 col-span-2">{obj.desc}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-500 border-2 border-indigo-700 dark:border-indigo-300 rounded-full left-1/2 sm:translate-y-0">
                          <span className="text-white font-semibold">{obj.id}</span>
                        </div>
                      </div>
                      
                    )
                  );
                })
              }

            </div>
          </div>
        </div>
    </div>
    );
};

/* <div className=" bg-indigo-50 shadow-xl dark:bg-ternary-dark rounded-lg text-ternary-dark dark:text-ternary-light">
                              <img src={obj.img} alt="Project" className="object-cover rounded-t-xl"></img>
                              <div className='grid grid-cols-2 p-4'>
                                <h3 className="font-general-medium font-semibold leading-normal tracking-wider text-lg">{obj.title}</h3>
                                <span class="font-bold tracking-wide text-lg text-right">{obj.date}</span>
                                <p className="mt-2 text-center text-base tracking-wider col-span-2">{obj.desc}</p>
                              </div>
                            </div> */

export default AboutTimeline; 