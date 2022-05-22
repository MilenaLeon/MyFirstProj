function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function multi() {
    const lesson_record = {
        name: '',
        surname: '',
        age: '',
        english_level: '',
        rate: '',
        date: ''
    };


    lesson_record.name = document.getElementById('name').value;
    lesson_record.surname = document.getElementById('surname').value;
    lesson_record.age = document.getElementById('age').value;
    lesson_record.english_level = document.getElementById('english_level').value;
    lesson_record.rate = document.getElementById('rate').value;
    lesson_record.date = document.getElementById('date').value;

    console.warn(lesson_record);

    const users_data = JSON.stringify(lesson_record, null, "\t");
    console.warn(users_data);
    downloadFile("hello.json", users_data);
}

function upload() {
    document.getElementById("file_input").click();

    var control = document.getElementById("file_input");
    control.addEventListener("change", function(event) {
        var i = 0,
        files = control.files,
        len = files.length;
        new_data = JSON.stringify(files, null, "\t");

    for (; i < len; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
        console.log("Data: " + new_data);
        alert("Файл был успешно загружен.");
    }
 
}, false);
};