const managerCard = ({ name, id, email, officeNumber }) => {

    return `
        <div class="cell flex-container">
            <div class="card">
                <div class="card-divider align-center grid-y">
                    <h2>${name}</h2>
                    <h4><i class="fa-solid fa-people-roof"></i> Manager</h4>
                    </div>
                <div class="card-section text-left">
                    <p>ID number: <b>${id}</b></p>
                    <p>E-mail: <a href="mailto: ${email}"><b>${email}</b></a></p>
                    <p>Office Number: <b>${officeNumber}</b></p>
                </div>
            </div>
        </div>
    `;

};

const engineerCard = ({ name, id, email, github }) => {

    return `
        <div class="cell flex-container">
            <div class="card">
                <div class="card-divider align-center grid-y">
                    <h2>${name}</h2>
                    <h4><i class="fa-solid fa-laptop-code"></i> Engineer</h4>
                    </div>
                <div class="card-section text-left">
                    <p>ID number: <b>${id}</b></p>
                    <p>E-mail: <a href="mailto: ${email}"><b>${email}</b></a></p>
                    <p>GitHub: <a href="https://github.com/${github}" target="_blank"><b>${github}</b></a></p>
                </div>
            </div>
        </div>
    `;

};

const internCard = ({ name, id, email, school }) => {

    return `
        <div class="cell flex-container">
            <div class="card">
                <div class="card-divider align-center grid-y">
                    <h2>${name}</h2>
                    <h4><i class="fa-solid fa-user-graduate"></i> Intern</h4>
                    </div>
                <div class="card-section text-left">
                    <p>ID number: <b>${id}</b></p>
                    <p>E-mail: <a href="mailto: ${email}"><b>${email}</b></a></p>
                    <p>School: <b>${school}</b></p>
                </div>
            </div>
        </div>
    `;

};

const selectCard = (teamArray) => {

    // variable containing returned HTML cards code
    let cards = '';

    // sequentially adds cards of the correct role to cards variable
    teamArray.forEach(employee => {

        const employeeRole = employee.getRole();

        switch (employeeRole) {
            case 'Manager':
                cards += managerCard(employee); 
                break;

            case 'Engineer':
                cards += engineerCard(employee);
                break;

            case 'Intern':
                cards += internCard(employee);
                break;
        
            default:
                console.error('Something went wrong creating employee cards');
                break;
        };

    });

    // returns all of the code for the cards to the generateHTML function
    return cards;

};

const generateHTML = (teamArray) => {

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/css/foundation.min.css" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Raleway&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>
   
    <div class="grid-y medium-grid-frame">
        <div class="cell shrink header medium-cell-block-container text-center ">
          <h1>My Team</h1>
        </div>

        <div class="cell grid-container fluid">
          <div class="grid-x grid-margin-x text-center small-up-1 medium-up-2 large-up-3 container">

          ${selectCard(teamArray)}  

          </div>
        </div>
        
    </div>

    <script src="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.4/dist/js/foundation.min.js" crossorigin="anonymous"></script>
</body>
</html>
`;

};

module.exports = generateHTML;
