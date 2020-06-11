 function bake(mix, timerSet = false) {
   return new Promise((resolve, reject) => {
     if (timerSet) {
       let meal = mix.cook();
       resolve(meal);
     } else {
       reject("A burnt mess");
     }
   })
 }
