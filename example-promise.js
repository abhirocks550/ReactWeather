// function getTempLocation(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempLocation('Pune', function (err,  temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('Success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }

// getTempPromise('Pune').then(function (temp) {
//   console.log('Promise Success', temp);
// },
//
// function (err) {
//   console.log('Promise error', err);
// });

function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Please enter numbers only');
      }
    });
}

addPromise(1, 5).then(function (add) {
  console.log('Addition', add);
},

function (err) {
  console.log('Error', err);
});

addPromise(1, 'String').then(function (add) {
  console.log('Addition', add);
},

function (err) {
  console.log('Error', err);
});
