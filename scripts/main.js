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

doGET("http://127.0.0.1:8000/foo.txt", getFileData);