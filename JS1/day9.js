function fetchData() {
    return new Promise((resolve, reject) => {
        let timedOut = false;


        const timeoutId = setTimeout(() => {
            timedOut = true;
            reject(new Error('Unable to fetch data '));
        }, 1000); // Adjust the timeout duration (in milliseconds) as per your requirement

        fetch('https://catfact.ninja/fact')
            .then(response => {

                if (!response.ok) {
                    throw new Error('Error fetching data');
                }
                return response.json();
            })
            .then(data => {
                if (!timedOut) {
                    resolve(data); // Resolve the promise only if it hasn't already timed out
                }
            })
            .catch(error => {
                if (!timedOut) {
                    reject(error); // Reject the promise only if it hasn't already timed out
                }
            });
    });
}

async function main() {
    try {
        const data = await fetchData();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();