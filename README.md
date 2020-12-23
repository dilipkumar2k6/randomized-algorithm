# Fixed-Range Sampling
- input of size n items
- get random number between 0 to n -1
- return the item as per input[index]
# Reservoir sampling
## Summary
- Stream of `n` items
- `n` is not known advance
- Probability of each item outcome is equal
## Algorithm
- The reservoir sampling algorithm is intended to sample k elements from an population of unknown size. 
## Algorithm R Variant
```
# S has items to sample, R will contain the result
def ReservoirSample(S[1..n], R[1..k])
    # fill the reservoir array
    for i := 1 to k
        R[i] := S[i]    
    # replace elements with gradually decreasing probability
    for i := k+1 to n
        # randomInteger(a, b) generates a uniform integer from the inclusive range {a, ..., b} *)
        j := randomInteger(1, i)
        if j <= k
            R[j] := S[i]
```
We summarize the main idea of the algorithm as follows:
- Initially, we fill up an array of reservoir R[] with the heading elements from the pool of samples S[]. 
    - At the end of the algorithm, the reservoir will contain the final elements we sample from the pool.
- We then iterate through the rest of elements in the pool. 
    - For each element, we need to decide if we want to include it in the reservoir or not. 
    - If so, we will replace an existing element in reservoir with the current element.
- One important question that one might have is that how we can ensure that each element has an equal probability to be chosen.
    - Given the above algorithm, it is guaranteed that at any moment, for each element scanned so far, it has an equal chance to be selected into the reservoir.

# Problems
https://leetcode.com/problems/linked-list-random-node/

https://leetcode.com/problems/random-pick-index/

https://leetcode.com/problems/random-pick-with-blacklist/

https://leetcode.com/problems/shuffle-an-array/


https://leetcode.com/discuss/interview-question/algorithms/124759


https://leetcode.com/problems/random-pick-with-weight/


https://leetcode.com/problems/random-flip-matrix/

https://leetcode.com/discuss/interview-question/451431/facebook-onsite-generate-random-max-index


https://leetcode.com/problems/new-21-game/

https://www.careercup.com/question?id=5764338593824768

Refer https://robinliu.gitbooks.io/leetcode/content/reservoir_sampling.html

https://leetcode.com/tag/reservoir-sampling/


## Reference 
https://www.youtube.com/watch?v=8Xj0ODE9mW0

https://en.wikipedia.org/wiki/Reservoir_sampling