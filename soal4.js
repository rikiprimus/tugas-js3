fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const names = data.map(item => item.name);
    names.forEach((name, index) => {
      console.log(`${index + 1}. ${name}`);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation: ', error);
  });
