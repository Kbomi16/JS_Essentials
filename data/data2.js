import _ from 'lodash'
import checkType from '../basic/getType'
import {random, user} from '../basic/getRandom'

console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
console.log(random(), random())
console.log(user)