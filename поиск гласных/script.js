const find = str =>{
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ю', 'и', 'о', 'у', 'э', 'ы', 'я']
  
  for(let char of str.toLowerCase()) {
    if(vowels.includes(char)) {
      count++
    }
  }
  
  return count
  
}
console.log(find('ЯблОко')) \\ можноо вводить любое слово ru or en
