function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  // TODO 21: 通过XMLHttpRequest实现异步请求
  xhr.open('POST', url);
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status <= 299) {
      successCallback({ responseText: xhr.responseText, statusText: xhr.statusText });
    } else {
      errorCallback({ responseText: xhr.responseText, statusText: xhr.statusText });
    }
  };
  const payload = { name: 'hello' };
  xhr.send(JSON.stringify(payload));
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
