fetch("https://jsonplaceholder.typicode.com/users");


const getData = async() => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await data.json();
    console.log(result);
}

getData();


// using the .then() method
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))