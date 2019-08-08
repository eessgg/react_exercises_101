import foods from './foods'
import { choice, remove } from './helpers'


let fruit = choice(foods)
console.log(fruit)

//remove
let remain = remove(foods, fruit)
console.log(remain)