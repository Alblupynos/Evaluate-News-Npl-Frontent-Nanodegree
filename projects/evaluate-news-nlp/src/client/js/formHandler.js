let agreement = document.getElementById('agreement');
let subjectivity = document.getElementById('subjectivity');

const postData = async (url = "", data = "") => {
    let jsonBody = {
        'url': data
    }
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonBody),
    });
    try {
        return await response.json();
    } catch (error) {
        console.log("error", error);
    }
}

function handleSubmit(event) {
    event.preventDefault()

    let userUrl = document.getElementById('url').value

    if (Client.checkForUrl(userUrl)) {

        //fetch data from the server
        postData('http://localhost:8081/api', userUrl)
            .then(function (res) {
                //update UI
                console.log(res);
                agreement.innerHTML = "Polarity: <p class=\"result\" >" + res.agreement + "</p>";
                subjectivity.innerHTML = "Subjectivity: <p class=\"result\"> " + res.subjectivity + "</p>";
            })
    } else {
        alert("Please enter a valid URL")
    }
}

export { handleSubmit }
