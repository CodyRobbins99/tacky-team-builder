function generateCode(teamArray) {
    let emptyString = ''
    const manager = teamArray.filter(employee => {
        return employee.role === 'Manager'
    });
    const engineer = teamArray.filter(employee => {
        return employee.role === 'Engineer'
    });
    const intern = teamArray.filter(employee => {
        return employee.role === 'Intern'
    });
    manager.forEach(manager => {
        emptyString += 
        `<div class="background card col-lg-4 col-sm-12 mt-2">
            <div class="card-header">
                <h2 class="card-title">${manager.name}</h2>
                <h4 class="card-subtitle mb-2"><span class="oi oi-person"></span> ${manager.role}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: <span class="employee-content">${manager.id}</span></li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number: <span class="employee-content">${manager.officeNumber}</span></li>
            </ul>
        </div>`
    });
    engineer.forEach(engineer => {
        emptyString += 
        `<div class="background card col-lg-4 col-sm-12 mt-2">
            <div class="card-header">
                <h2 class="card-title">${engineer.name}</h2>
                <h4 class="card-subtitle mb-2"><span class="oi oi-terminal"></span> ${engineer.role}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: <span class="employee-content">${engineer.id}</span></li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a class="employee-content" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul>
        </div>`
    });
    intern.forEach(intern => {
        emptyString += 
        `<div class="background card col-lg-4 col-sm-12 mt-2">
            <div class="card-header">
                <h2 class="card-title">${intern.name}</h2>
                <h4 class="card-subtitle mb-2"><span class="oi oi-briefcase"></span> ${intern.role}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: <span class="employee-content">${intern.id}</span></li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: <span class="employee-content">${intern.school}</span></li>
            </ul>
        </div>`
    });
    return emptyString;
}

module.exports = teamArray => {
return `
<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Tacky Team Builder</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div class="row no-gutters">
            <header class="col-12">
                <h1 class="text-center title">Tacky Team Generator</h1>
            </header>
        </div>

        <div class="container">
            <div class ="employee-container row">
                ${generateCode(teamArray)}
            </div>
        </div>
    </body>
`    
}