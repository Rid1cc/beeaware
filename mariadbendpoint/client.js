import React, { useEffect, useState } from 'react';

export function client(api: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://51.137.122.136:1337/' + api)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return data;
}

export function postData (api: string, n_data: json) {
  console.log("This is our data", n_data);
  const url = "http://51.137.122.136:1337/" + api;
  fetch(url,
    {
      method: 'POST', // or 'PUT'
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(n_data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

test_data = {
  user_login: 'Blitq',
  user_email: 'blitq@gmail.com',
  user_password: 'test666'
}

postData('register', test_data);
