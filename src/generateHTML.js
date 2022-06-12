const generateHTML = (data) => {

  return `

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body class="bg-light">
    
<div class="jumbotron pb-2">
    <h1 class="display-4 text-center mt-2">Hello, my name is ${data.name}!</h1>
    <p class="lead text-center">I am currently in ${data.location}.</p>
    <hr class="my-4">
    <p class="mx-5"><b>A bit about me:</b> ${data.bio}</p>
    <div class="text-center">
        <p class="lead">
            <div class="btn-group" role="group" aria-label="Button links">
                <a class="btn btn-primary btn-lg" href="https://www.${data.linkedIn}" role="button">LinkedIn</a>
                <a class="btn btn-primary btn-lg" href="https://${data.gitHub}" role="button">GitHub</a>
            </div>
        </p>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>

</html>

`;

};

module.exports = generateHTML;
