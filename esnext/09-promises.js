function promises() {
  $.ajax(
    url,
    (response) => {},
    (error) => {},
  );

  fs.readFile(path, (error, file) => {
    if (error) {
      // process error
      return;
    }

    // process file
  });

  // Problem 1: unstructured programming
  $.ajax(
    url,
    (response) => {
      console.log("Done.");
    },
    (error) => {},
  );
  console.log("Yay!");

  // Problem 2: callback hell (hadouken code)
  $.ajax(
    url1,
    (response1) => {
      $.ajax(
        url2,
        (response2) => {
          console.log(response1, response2);
        },
        (error2) => {
          console.error(error2);
        },
      );
    },
    (error1) => {
      console.error(error1);
    },
  );

  // Problem 3: concurrency / parallelism
  const responses = [null, null];

  $.ajax(
    url1,
    (response1) => {
      responses[0] = response1;
    },
    (error1) => {
      console.error(error1);
    },
  );

  $.ajax(
    url2,
    (response2) => {
      responses[1] = response2;
    },
    (error2) => {
      console.error(error2);
    },
  );

  setTimeout(() => {
    console.log(responses);
  }, 3000);

  // Solution 2: naming callbacks (does not solve problem 1)
  const handleResponse2 = (response2) => {
    console.log(response1, response2);
  };

  const handleError2 = (error2) => {
    console.error(error2);
  };

  const handleResponse1 = (response1) => {
    $.ajax(url2, handleResponse2, handleError2);
  };

  const handleError1 = (error1) => {
    console.error(error1);
  };

  $.ajax(url1, handleResponse1, handleError1);

  // solution to all: promises

  const promise = $.ajax(url); // promise is 'pending'

  promise.then((response) => console.log(response)); // promised is 'resolved' / 'fulfilled'
  promise.catch((error) => console.error(error)); // promise is 'rejected'
  promise.finally(() => {}); // promise is 'settled'

  // Fix to problem 2: callback hell (not solved)
  $.ajax(url1)
    .then((response1) => {
      $.ajax(url2)
        .then((response2) => {
          console.log(response1, response2);
        })
        .catch((error2) => {
          console.error(error2);
        });
    })
    .catch((error1) => {
      console.error(error1);
    });

  // promise chaining
  // 1. solves 1 (structured programming)
  // 2. solves 2 (callback hell)
  // 3. introduces new problem: variables not globally available

  $.ajax(url1)
    .then((response1) => $.ajax(url2))
    .then((response2) => console.log(response2))
    .catch((error) => console.error(error))
    .finally(() => {});

  // Fix to problem 3: parallelism
  Promise.all([$.ajax(url1), $.ajax(url2)])
    .then(
      ([response1, response2]) => console.log(response1, response2), // all resolved
    )
    .catch((error) => console.error(error)); // at least one rejected

  Promise.allSettled([$.ajax(url1), $.ajax(url2)]).then(
    ([result1, result2]) => console.log(result1, result2), // all resolved or rejected
  );

  Promise.race([$.ajax(url1), $.ajax(url2)]).then((firstResponse) =>
    console.log(firstResponse),
  );
}

function withFetch() {
  fetch("https://www.swapi.tech/api/people/1/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });

  fetch("https://www.swapi.tech/api/people/", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function withAxios() {
  axios.get(url).then(({ data }) => console.log(data));
  axios.post(url, {}).then(({ data }) => console.log(data));
}

new Promise((resolve, reject) => {
  if (true) {
    resolve("Success!");
  } else {
    reject("Uh-oh...");
  }
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

// promisify

setTimeout(() => {
  console.log("Three seconds have passed!");
}, 3000);

const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Timeout!");
  }, 3000);
});

const requestWithTimeout = Promise.race([fetch("hello"), timeout])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
