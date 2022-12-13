import run from "aocrunner"

const parseInput = (rawInput) => rawInput

const part1 = (rawInput) => {
  const input = parseInput(rawInput)
  const rucksack = input.split("\n")

  let matchingChars = []

  // use Array.find instead?
  rucksack.forEach((sack) => {
    const compartmentOne = sack.slice(0, sack.length / 2)
    const compartmentTwo = sack.slice(sack.length / 2, sack.length)

    for (let i = 0; i < compartmentOne.length; i++) {
      for (let e = 0; e < compartmentTwo.length; e++) {
        if (compartmentOne.charAt(i) === compartmentTwo.charAt(e)) {
          // remove? stopping loop from finding same letter twice
          matchingChars.includes(compartmentOne.charAt(i))
            ? null
            : matchingChars.push(compartmentOne.charAt(i))
        }
      }
    }
    return matchingChars
  })

  console.log("matching chars", matchingChars)

  let AOCValues = [] // will hold numerical values for matching chars

  // determines whether char is upper or lowercase
  matchingChars.forEach((char) => {
    if (char === char.toUpperCase()) {
      char = char.charCodeAt(0) - 38 // subtracts from the ASCII value to give the AOC value - uppercase
      AOCValues.push(char)
    } else if (char === char.toLowerCase()) {
      char = char.charCodeAt(0) - 96 // subtracts from the ASCII value to give the AOC value - lowercase
      AOCValues.push(char)
    }
  })
  console.log("values", AOCValues)

  // sum the final values and return
  const sumOfChars = AOCValues.reduce((acc, currentVal) => acc + currentVal, 0)
  console.log("sum", sumOfChars)

  return sumOfChars
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
