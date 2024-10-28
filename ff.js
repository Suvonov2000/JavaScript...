function loginToFacebook(password, email, callback) {
  console.log("sending request to request");
  setTimeout(() => {
    if (password === "asad" && email === "umed") {
      return callback("welcome");
    } else {
      return callback("wrong");
    }
  }, 3000);
}
loginToFacebook("asad", "email", (data) => {
  console.log(data);
});
