function sym(...args) {
  const outerArray = args
  const outerArrayLength = args.length
  let outerArray1Index = 0
  let outerArray2Index = 1
  let finalResult = []
  
  for(let i = 0; i < outerArrayLength; i++) {
    
    const innerArray = outerArray[i]
    console.log(`array ${i + 1}`)
    
    for (let j = 0; j < innerArray.length; j++) {

      // 1. Check if the first index in array1 matches with
      //    all indices in array2
      if (outerArray[outerArray1Index][j] === outerArray[outerArray2Index][j]) {
        console.log('true');
      } else {
        console.log('false');
        finalResult.push(outerArray[outerArray1Index][j])
      }
    }

    console.log("---")
    console.log(finalResult)
  }
}

sym([1, 2, 3], [5, 2, 1, 4], [4, 2, 6], [1, 9, 7]);