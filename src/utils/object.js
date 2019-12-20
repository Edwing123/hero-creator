
// just for public properties ? 
function checkForFalsyObjectValues(object) {
  let objectValues = Object.values(object)
  
  let index = 0
  for (index; index < objectValues.length; index++) {
    if (!objectValues[index]) {
      return {
        hasFalsy: true
      }
    }
  }

  return {
    hasFalsy: false
  }
}


export {checkForFalsyObjectValues}