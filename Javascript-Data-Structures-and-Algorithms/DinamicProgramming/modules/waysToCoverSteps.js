'use static'

function waysToCoverSteps(step) {
  if(step < 0) return 0;
  if(step == 0) return 1;

  return waysToCoverSteps(step - 1) 
  + waysToCoverSteps(step - 2)
  + waysToCoverSteps(step - 3);
}

function waysToCoverStepsDP(step) {
  let cahe = {};  

  if(step < 0) return 0;
  if(step == 0) return 1;

  if(cahe[step]) {
    return cahe[step];
  } else {
    cahe[step] = waysToCoverStepsDP(step - 1) 
    + waysToCoverStepsDP(step - 2)
    + waysToCoverStepsDP(step - 3);
    return cahe[step];
  }

}

console.log(waysToCoverStepsDP(12));