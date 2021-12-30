function sym(...args) {
  const argsLength = args.length
  const outerArray = args
  let outerArray1Index = 0;
  let outerArray2Index = 1;
  let outerArrayCount = argsLength - 1

  for(let i = 0; i < argsLength; i++) {

    console.log(`array ${i}`)
    for (let j = 0; j < outerArray[i].length; j++) {
      // const innerArr = outerArray[i][j]
      // console.log(innerArray)

      // 1. Check if the first index in array1 matches with
      //    all indices in array2
      // if (outerArray[array1Index][j] === outerArray[array2Index][j]) {

      // } 

      console.log(outerArray[outerArray1Index][j])
      console.log(outerArray[outerArray2Index][j])
    }

    console.log("---")
  }

  // console.log(argsLength, count)
  return args
}

sym([1, 2, 3], [5, 2, 1, 4], [4, 2, 6], [1, 9, 7]);