# Table component for React

## What & Why

Displays a customizable table with a data set

## Author

- Alexandre Charlier

## Technologies

- [![made-with-JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-green)](https://shields.io)
- [![made-with-React](https://img.shields.io/badge/react-v%2017.0.2-blue)](https://fr.reactjs.org/)


## Installation 

### Prerequisites

[![npm](https://img.shields.io/badge/npm-v%208.1.3-blue)](https://www.npmjs.com)
[![NodeJs](https://img.shields.io/badge/NodeJs-v%2016.13.0-yellow)](https://nodejs.org)



### Installing react-table-charlier with npm.
```shell
npm install -g react-table-charlier
```

## USE

Feature of react-table-charlier
* Data adaptive table
* Filter data by ascending or descending order
* Alphanumeric search by column
* Visual indication of the pages and the current
* Page change by button or page number
* Select number of lines per page

Options
* Customization of the number of lines per page.
* Change the column name
* Modify theme color

Things the react-table-charlier **doesn't** do:
* react-table-charlier does not fetch the data 


implement the table with a single component of type - `<Table/>`.

```javascript
<Table bodyElements={Array<object>} optionsTable={<object>} headerElements={<object>} />

```

### The properties 
* bodyElements
* headerElements 
* optionsTable


Body element is an array of objects representing the keys and values to display.

```javascript
//exemple
 const myDataItems =[
     {
        firstName: 'George',
        lastName: 'Washington',
        dateOfBirth: '22/02/1732',
    },
    {
        ...
    } 
];


<Table bodyElements={myDataItems}  />
```

headerElement by default takes the name of the keys of the table.
If you want to customize the name of each column in the header, create an object with the same key as your dataset and the value of your choice.

```javascript
// by default
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth'

//exemple customize
 const myHeaderItems ={
     firstName: 'First name',
     lastName: 'Last name',
     dateOfBirth: 'Date of birth',
     ...
 }

<Table bodyElements={myDataItems} headerElements={myHeaderElements} />
 ```

Options, such as color or number of lines and possible selections are set in an object.
```javascript
// by default
    nbRows:[10, 20],
    color:"grey"

//exemple customize
const myOptions={
    nbRows:[5,10,20,50],
    color: "blue"
  }

<Table bodyElements={myDataItems} optionsTable={myOptions} />
 ```


### Code sample

 ```javascript
 //
import React from 'react';
import {Table} from 'react-table-charlier';

function App (){
    const myOptions={
        nbRows:[10,20,50],
        color: "grey"
    };

    const myHeaderItems ={
        firstName: 'First name',
        lastName: 'Last name',
        dateOfBirth: 'Date of birth'
    };

    const myDataItems =[
        { firstName: "George", lastName: "Washington", dateOfBirth: "22/02/1732" },
        { firstName: "John", lastName: "Adams", dateOfBirth: "30/10/1735" },
        { firstName: "Thomas", lastName: "Jefferson", dateOfBirth: "13/04/1743" }
    ];


    return (
        <div className="App">
            <Table bodyElements={myDataItems} headerElements={myHeaderItems} optionsTable={myOptions} />
        </div>
    );
 }
 ```




