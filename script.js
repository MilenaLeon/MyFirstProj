
function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    //document.body.removeChild(element);
}

function multi() {
    const lessonRecord = {
        name: '',
        age: '',
        englishLevel: '',
        rate: '',
        date: ''
    };
    // const name = '';
    // const age = '';


    lessonRecord.name = document.getElementById('inp_1').value;
    lessonRecord.age = document.getElementById('inp_2').value;
    lessonRecord.englishLevel = document.getElementById('inp_3').value;
    lessonRecord.rate = document.getElementById('inp_4').value;
    lessonRecord.date = document.getElementById('inp_5').value;

    console.warn(lessonRecord);

    const qwe = JSON.stringify(lessonRecord, null, "\t");
    console.warn(qwe);
    const aaa = JSON.parse(qwe);
    console.warn(aaa);
    downloadFile("hello.json", qwe);
}
