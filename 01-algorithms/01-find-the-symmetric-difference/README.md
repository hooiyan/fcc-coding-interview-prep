# Find the Symmetric Difference

The mathematical term symmetric difference (`△` or `⊕`) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets `A = {1, 2, 3}` and `B = {2, 3, 4}`, `A △ B = {1, 4}`.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (`A △ B △ C`), you must complete one operation at a time. Thus, for sets `A` and `B` above, and `C = {2, 3}`, `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}`.

## Instruction

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

## My logic

1. Check if the first index in `outerArray1` matches the first index in `outerArray2`
2. Proceed to the next index in `outerArray2`
3. Repeat the comparison of each remaining index in `outerArray2`
4. When the comparison is done, return the `finalResult` of the first round
5. If there are more arrays, more comparisons need to be done. Take the previous `finalResult` and repeat the comparison with the next array
6. Repeat the steps until no more arrays left
7. The `finalResult` is the last result that we get from the last round of comparison