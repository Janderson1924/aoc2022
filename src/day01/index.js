import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  let elfItems = [] // will contain calorie totals for each elf

  const splitItemsByElf = input.split("\n\n")
  splitItemsByElf.forEach((item) => {
    let totalCaloriesAsStrings = item.split("\n")
    let totalCaloriesAsNumbers = []
    totalCaloriesAsStrings.forEach((item) =>
      totalCaloriesAsNumbers.push(Number(item)),
    )

    const sumOfCalories = totalCaloriesAsNumbers.reduce(
      (acc, currentValue) => acc + currentValue,
    )
    elfItems.push(sumOfCalories)
  })

  const highestCalorieCount = elfItems.sort((a, b) => b - a)[0] // find the highest number in list of calorie sums
  return highestCalorieCount
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const testInput = `
  1000
  2000
  3000

  4000

  5000
  6000

  7000
  8000
  9000

  10000
`

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 24000,
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
  // onlyTests: true, // comment out this line to submit answer
})
