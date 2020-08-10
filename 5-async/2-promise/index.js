function fetchData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // <-- start
    // TODO 22: 通过Promise实现异步请求
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status <= 299) {
        resolve(xhr.responseText);
      } else {
        const error = new Error(xhr.responseText);
        error.responseText = xhr.responseText;
        error.statusText = xhr.statusText;
        reject(error);
      }
    };
    const payload = {};
    payload.name = 'hello';
    xhr.send(JSON.stringify(payload));
    // end -->
  });
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(JSON.parse(result).name);
  })
  .catch(error => {
    console.error(error);
  });
