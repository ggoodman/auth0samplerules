function (user, context, callback) {
  // added via github webhook test
  console.log('Hi from github hosted rule');
  callback(null, user, context);
}

