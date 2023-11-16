const myName = {"firstName": "Steven", "Location": "Goerlitz", "Age": 32};

function getThisShit(nameObj) {
    for (const key in nameObj) {
        console.log(`${key} : ${nameObj[key]}`);
    }
}

console.log(getThisShit(myName));
