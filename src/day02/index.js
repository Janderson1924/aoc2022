import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const eachRound = input.split(/\r?\n/) // split by each new line

  let arrayOfScores = [] // will store scores from each round

  // loop through each round and score it accordingly
  eachRound.forEach((round) => {
    let scoreTotal = 0
    if (round === "A X") {
      scoreTotal += 4
    } else if (round === "A Y") {
      scoreTotal += 8
    } else if (round === "A Z") {
      scoreTotal += 3
    } else if (round === "B X") {
      scoreTotal += 1
    } else if (round === "B Y") {
      scoreTotal += 5
    } else if (round === "B Z") {
      scoreTotal += 9
    } else if (round === "C X") {
      scoreTotal += 7
    } else if (round === "C Y") {
      scoreTotal += 2
    } else if (round === "C Z") {
      scoreTotal += 6
    }
    // push each round score into new array
    arrayOfScores.push(scoreTotal)
    return
  })

  // sum up all scores
  const finalScore = arrayOfScores.reduce(
    (acc, currentScore) => acc + currentScore,
    0,
  )

  return finalScore
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const testInput = `
  A Y
  B X
  C Z
`

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 15,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true, // comment out this line to submit answer
})
