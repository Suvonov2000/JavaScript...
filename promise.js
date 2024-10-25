var password = "1234";
var email = "baby@gmail.com";

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (password === "123" && email === "baby@gmail.com") {
      resolve("You can enter the website");
    } else {
      reject("Oops something wrong.!!!");
    }
  }, 3000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
