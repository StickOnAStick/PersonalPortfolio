import projectTimeline from '../../data/projectTimeline.js'

const AboutTimeline = () => {
    return(
      <div class="flex flex-col justify-center py-6 lg:py-12">
        <div class="w-full mx-auto lg:max-w-8xl">

          <div class="relative">

            
            

            <div class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2"></div>
              <div class="space-y-12 lg:space-y-10">
                
              {projectTimeline.map((obj)=>{
                  return ( 
                  (obj.id % 2 === 0 ) ? 
                    (
                      /*Right Side Timeline*/
                        <div class="flex flex-col items-center">
                          <div class="flex items-center justify-end w-full mx-auto">
                            <div class="w-full lg:w-1/2 lg:pl-8">
                              <div class="p-4 bg-white dark:bg-ternary-dark rounded shadow-lg shadow-cyan-300 text-ternary-dark dark:text-ternary-light">
                                <h3>{obj.title}</h3>
                                <p>{obj.desc}</p>
                              </div>
                            </div>
                          </div>
                          <div
                            class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-500 border-2 border-indigo-700 dark:border-indigo-300 rounded-full left-1/2 sm:translate-y-0">
                            <span class="text-white font-semibold">{obj.id}</span>
                          </div>
                        </div>
                    ) : (
                    /*Left side timeline */
                      <div class="flex flex-col items-center">
                        <div class="flex items-center justify-start w-full mx-auto">
                          <div class="w-full lg:w-1/2 lg:pr-8">
                            <div class="p-4 bg-white dark:bg-ternary-dark rounded shadow-lg shadow-cyan-300 text-ternary-dark dark:text-ternary-light">
                                <h3>{obj.title}</h3>
                                <p>{obj.desc}</p>
                            </div>
                          </div>
                        </div>
                        <div
                          class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-indigo-500 border-2 border-indigo-700 dark:border-indigo-300 rounded-full left-1/2 sm:translate-y-0">
                          <span class="text-white font-semibold">{obj.id}</span>
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

export default AboutTimeline; 