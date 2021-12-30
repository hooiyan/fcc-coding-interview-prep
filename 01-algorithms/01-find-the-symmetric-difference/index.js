function sym(...args) {
  let outerArray = args
  let outerArrayLength = args.length

  let outerArrayStartingIndex = 0

  let innerArray1NextIndex = 0;
  let innerArray2NextIndex = 0;

  let finalResult = []
  
  // while (outerArrayStartingIndex < outerArrayLength) {
  //   while (outerArray[outerArrayStartingIndex + 1][innerArray2NextIndex] < outerArray[outerArrayStartingIndex + 1].length) {
  //     if (outerArray[outerArrayStartingIndex][innerArray1NextIndex] === outerArray[outerArrayStartingIndex + 1][innerArray2NextIndex]) {
  //       innerArray2NextIndex++
  //       console.log(innerArray2NextIndex)
  //     } else {
  //       finalResult.push(outerArray[outerArrayStartingIndex][innerArray1NextIndex])
  //       innerArray2NextIndex++
  //       console.log(innerArray2NextIndex)
  //     }
  //   }
  // }

  if (outerArray[outerArrayStartingIndex][innerArray1NextIndex] === outerArray[outerArrayStartingIndex + 1][innerArray2NextIndex]) {
    innerArray2NextIndex++
    console.log(innerArray2NextIndex)
  } else {
    finalResult.push(outerArray[outerArrayStartingIndex][innerArray1NextIndex])
    innerArray2NextIndex++
    console.log(innerArray2NextIndex)
  }

  console.log(`finalResult: ${finalResult}`)
}

sym([1, 2, 3], [5, 2, 1, 4], [4, 2, 6], [1, 9, 7]);