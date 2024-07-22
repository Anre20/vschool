function sum(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Both arguments must be numbers');
    }

    return x + y;
  }
console.log(sum(9, 5));


var user = {username: "sam", password: "123abc"};
function login(username, password){
  if (username !== user.username || password !== user.password) {
    throw new Error('Invalid username or password');
  }

  console.log('Login successful!');
}
