import run from "aocrunner"
import { chunk_ } from "@arrows/array"

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
  let itemValues = []

  // determines whether character is upper or lowercase and subtracts from its ASCII value to give AoC Value
  matchingChars.forEach((char) => {
    if (char === char.toUpperCase()) {
      char = char.charCodeAt(0) - 38
      itemValues.push(char)
    } else {
      char = char.charCodeAt(0) - 96
      itemValues.push(char)
    }
  })

  // sum the final values and return
  const sumOfValues = itemValues.reduce(
    (acc, currentVal) => acc + currentVal,
    0,
  )
  return sumOfValues
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput)

  const lines = input.split("\n")
  const groups = chunk_(3, lines)

  let matchingBadges = []

  groups.forEach((group) => {
    for (let charX of group[0]) {
      for (let charY of group[1]) {
        for (let charZ of group[2]) {
          if (charX === charY && charX === charZ) {
            return matchingBadges.push(charX)
          }
        }
      }
    }
  })

  let badgeValues = []

  matchingBadges.forEach((badge) => {
    if (badge === badge.toUpperCase()) {
      badge = badge.charCodeAt(0) - 38
      badgeValues.push(badge)
    } else {
      badge = badge.charCodeAt(0) - 96
      badgeValues.push(badge)
    }
  })

  const sumOfBadges = badgeValues.reduce((acc, val) => acc + val, 0)
  return sumOfBadges
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
      {
        input: testInput,
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true, // comment out this line to submit answer
})
