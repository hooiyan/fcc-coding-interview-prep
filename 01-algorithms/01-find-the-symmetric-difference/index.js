function sym(...args) {
  let outerArray = args
  let outerArrayLength = args.length
  let outerArray1Index = 0
  let outerArray2Index = 1
  let innerArray1Index = 0;
  let innerArray2Index = 0;
  let finalResult = []
  
  // Testing code
  console.log(outerArrayLength)

  while (innerArray2Index < outerArray[outerArray2Index].length) {
    if (outerArray[outerArray1Index][innerArray1Index] === outerArray[outerArray2Index][innerArray2Index]) {
      console.log(`${outerArray[outerArray1Index][innerArray1Index]} is equal to ${outerArray[outerArray2Index][innerArray2Index]}`)
      // outerArray2Index++
    } else {
      finalResult.push(outerArray[outerArray1Index][innerArray1Index])
      // outerArray2Index++
    }
    innerArray2Index++
  }

  console.log(`innerArray2Index: ${innerArray2Index}`)

  while (true) {
    if (outerArray[outerArray1Index][innerArray1Index] === outerArray[outerArray2Index][innerArray2Index]) {
      console.log(`${outerArray[outerArray1Index][innerArray1Index]} is equal to ${outerArray[outerArray2Index][innerArray2Index]}`)
      // outerArray2Index++
    } else {
      finalResult.push(outerArray[outerArray1Index][innerArray1Index])
      // outerArray2Index++
    }
    innerArray2Index++
  }

  // do {
  //   if (outerArray[outerArray1Index][innerArray1Index] === outerArray[outerArray2Index][innerArray2Index]) {
  //     console.log(`${outerArray[outerArray1Index][innerArray1Index]} is equal to ${outerArray[outerArray2Index][innerArray2Index]}`)
  //     // outerArray2Index++
  //   } else {
  //     finalResult.push(outerArray[outerArray1Index][innerArray1Index])
  //     // outerArray2Index++
  //   }
  //   innerArray2Index++
  // }
  // while (innerArray2Index < outerArray[outerArray2Index].length)

  console.log(`innerArray2Index: ${innerArray2Index}`)
  console.log(`finalResult: ${finalResult}`)
}

sym([1, 2, 3], [5, 2, 1, 4], [4, 2, 6], [1, 9, 7]);