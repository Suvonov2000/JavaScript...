function loginToFacebook(password, email, callback) {
  console.log("Sending request to backend...");
  setTimeout(() => {
    if (password === "samurai" && email === "samurai001@gamil.com") {
      return callback("Wellcome to account!");
    } else {
      return callback("Something is wrong");
    }
  }, 5000);
}
loginToFacebook("samurai", "samurai001@gamil.com", (data) => {
  console.log(data);
});
