function myAge() {
  let DOB = document.getElementById("age").value;
  let result = document.getElementById("result");
  let date = new Date();

  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();

  let InputDOB = DOB.split("-");
  result.textContent = `Years ${y - InputDOB[0]},Months ${
    m - InputDOB[1]
  }, Days ${d - InputDOB[2]}`;

  //   console.log(InputDOB);
  //   console.log(h);
}
