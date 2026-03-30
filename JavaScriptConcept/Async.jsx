function registration(callback) {
  setTimeout(() => {
    console.log("Registration successful");
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log("Login successful");
    callback();
  }, 2000);
}

function otp(callback) {
  setTimeout(() => {
    console.log("OTP sent successfully");
    callback();
  }, 2000);
}

function success(callback) {
  setTimeout(() => {
    console.log("All operations completed successfully");
    callback();
  }, 2000);
}

registration(() => {
  login(() => {
    otp(() => {
      success(() => {
        console.log("Done");
      });
    });
  });
});
// ===========================================================================================
async function registration(callback) {
  setTimeout(() => {
    console.log("Registration successful");
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log("Login successful");
    callback();
  }, 2000);
}

function otp(callback) {
  setTimeout(() => {
    console.log("OTP sent successfully");
    callback();
  }, 2000);
}

function success(callback) {
  setTimeout(() => {
    console.log("All operations completed successfully");
    callback();
  }, 2000);
}

registration(() => {
  login(() => {
    otp(() => {
      success(() => {
        console.log("Done");
      });
    });
  });
});


// ===============================================================================================
function registration() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Registration successful");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Login successful");
      resolve();
    }, 2000);
  });
}

function otp() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("OTP sent successfully");
      resolve();
    }, 2000);
  });
}

function success() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("All operations completed successfully");
      resolve();
    }, 2000);
  });
}

// Promise chaining
registration()
  .then(() => login())
  .then(() => otp())
  .then(() => success())
  .then(() => console.log("Done"))
  .catch((err) => console.log(err));


//   =================================================================================================
function registration() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Registration successful");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Login successful");
      resolve();
    }, 2000);
  });
}

function otp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("OTP sent successfully");
      resolve();
    }, 2000);
  });
}

function success() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("All operations completed successfully");
      resolve();
    }, 2000);
  });
}

// Async/Await Execution
async function runFlow() {
  try {
    await registration();
    await login();
    await otp();
    await success();
    console.log("Done");
  } catch (error) {
    console.log("Error:", error);
  }
}

runFlow();