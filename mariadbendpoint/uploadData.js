import { useEffect, useState } from 'react';


// Component
export function usePostData(api, n_data) {
    const [data, setData] = useState([]);
    const url = 'http://51.137.122.136:1337/' + api;
    fetch(url,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(n_data),
        })
        .then(response => response.json())
        .then((json) => setData(json))
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => setLoading(false));
    return data;
}
