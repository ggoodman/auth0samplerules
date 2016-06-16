function (user, context, callback) {
  console.log("Awesome rule from github");
  callback(null, user, context);
}
