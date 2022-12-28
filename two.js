const userIvanov = {
   name: 'Ivan',
   surname: 'Ivanov',
   age: '25'}

function proverka(str, obj) {
 console.log(str in obj);
};
proverka('surname', userIvanov);