
const userIvanov = function(a) {
   a = {name: 'Ivan',
   surname: 'Ivanov',
   age: '25'}
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
   console.log(key+ ': ' + a[key]);
      }
   }
  }
  userIvanov();