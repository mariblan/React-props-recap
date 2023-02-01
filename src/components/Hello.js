import React from 'react';
// Injecting js into jsx
// 1. Using {} - expression
// 2. Using {} - object
// 3. Using {} - array
// 4. Using {} - array of objects
// 5. Using {} - array of objects with map
// 6. Using {} - array of objects with map and key

function Hello(props) {
    console.log(props);
  const name = 'Harry';
  return (
        <>
            <div>Hello {name}</div>
            <div>Hello {props.name}</div>
            <div>Hello {props.person.fname} {props.person.lname}</div>
            <div>Hello {props.persons[0].fname} {props.persons[0].lname}</div>
            <div>Hello {props.persons[1].fname} {props.persons[1].lname}</div>
            <div>Hello {props.persons[2].fname} {props.persons[2].lname}</div>
            {props.persons.map((person, index) => <div key={index}>Hello {person.fname} {person.lname}</div>)}
        </>
  )
}

export default Hello;
