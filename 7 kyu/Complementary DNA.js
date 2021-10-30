// Complementary DNA
let complements = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

function DNAStrand(dna) {
  let dnaArray = [...dna]

  let complementArray = dnaArray.map(x => complements[x])
  console.log(complementArray)

  return arrayJoinded = complementArray.join("")
}

function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);
