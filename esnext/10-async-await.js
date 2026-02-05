async function fetchDataInSeries() {
  try {
    const response1 = await fetch("https://www.swapi.tech/api/people/1/");
    const data1 = await response1.json();

    const response2 = await fetch("https://www.swapi.tech/api/people/2/");
    const data2 = await response2.json();

    console.log(data1, data2);

    return 42;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("All done.");
  }
}

// fetchDataInSeries().then((num) => {
//   console.log(num);
// });

async function fetchDataInParallel() {
  const [response1, response2] = await Promise.all([
    fetch("https://www.swapi.tech/api/people/1/"),
    fetch("https://www.swapi.tech/api/people/2/"),
  ]);

  const [data1, data2] = await Promise.all([
    response1.json(),
    response2.json(),
  ]);

  console.log(data1, data2);

  return 42;
}

// fetchDataInParallel().then((num) => {
//   console.log(num);
// });

async function fetchPerson(id) {
  const response = await fetch(`https://www.swapi.tech/api/people/${id}/`);
  const data = await response.json();
  return data;
}

fetchPerson(1).then((person) => {
  console.log(person);
});

async function fetchPeople(...ids) {
  const people = await Promise.all(ids.map(fetchPerson));
  console.log(people);
}

fetchPeople(1, 2, 3);
