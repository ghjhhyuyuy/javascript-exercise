async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' }
  };
  const response = await fetch(url, options);
  if (response.status >= 200 && response.status <= 299) {
    document.writeln(JSON.parse(await response.text()).name);
  } else {
    const responseText = await response.text();
    const error = new Error(responseText);
    error.responseText = responseText;
    error.statusText = response.statusText;
    throw error;
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
