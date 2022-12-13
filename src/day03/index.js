import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)

  const rucksack = input.split("\n")

  let matchingChars = []

  rucksack.forEach((sack) => {
    const compartmentOne = sack.slice(0, sack.length / 2)
    const compartmentTwo = sack.slice(sack.length / 2, sack.length)

    for (const charX of compartmentOne) {
      for (const charY of compartmentTwo) {
        if (charX === charY) {
          return matchingChars.push(charX)
        }
      }
    }
  })

  // will hold numerical values for characters, according to the AoC puzzle
  let adventValues = []

  // determines whether character is upper or lowercase and subtracts from its ASCII value to give AoC Value
  matchingChars.forEach((char) => {
    if (char === char.toUpperCase()) {
      char = char.charCodeAt(0) - 38
      adventValues.push(char)
    } else {
      char = char.charCodeAt(0) - 96
      adventValues.push(char)
    }
  })

  // sum the final values and return
  const sumOfValues = adventValues.reduce(
    (acc, currentVal) => acc + currentVal,
    0,
  )
  return sumOfValues
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  return
}

const testInput = `
  vJrwpWtwJgWrhcsFMMfFFhFp
  jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
  PmmdzqPrVvPwwTWBwg
  wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
  ttgJtRGJQctTZtZT
  CrZsJsPPZsGzwwsLwLmpwMDw
`

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 157,
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
