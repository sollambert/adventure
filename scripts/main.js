var text;


function doGET(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // The request is done; did it work?
            if (xhr.status == 200) {
                // ***Yes, use `xhr.responseText` here***
                callback(xhr.responseText);
            } else {
                // ***No, tell the callback the call failed***
                callback(null);
            }
        }
    };
    xhr.open("GET", path);
    xhr.send();
}

function getFileData(fileData) {
    if (!fileData) {
        // Show error
        return;
    }
    console.log(fileData);
    text = fileData;
    const output = document.getElementById("output");
    output.insertAdjacentText('beforeend', text);
}

async function loadJson() {
    const {default:jsonContents} = await import("./assets/test.json",{
        assert:{
            type:"json"
        }
    });
    console.log(jsonContents);
}

doGET("./assets/foo.txt", getFileData);
