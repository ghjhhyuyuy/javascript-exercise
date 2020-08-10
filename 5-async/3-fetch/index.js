function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  const payload = {};
  payload.name = 'hello';
  const options = {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'content-type': 'application/json' }
  };
  return fetch(url, options).then(response => {
    if (response.status >= 200 && response.status <= 299) {
      return response.text().then(responseText => JSON.parse(responseText));
    } else {
      return response.text().then(responseText => {
        const error = new Error(responseText);
        error.responseText = responseText;
        error.statusText = response.statusText;
        throw error;
      });
    }
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
