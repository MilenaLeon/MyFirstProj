function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function apply() {
    const lesson_record = {
        name: '',
        surname: '',
        age: '',
        english_level: '',
        rate: '',
        date: ''
    };


    lesson_record.name = document.getElementById("name").value;
    lesson_record.surname = document.getElementById("surname").value;
    lesson_record.age = document.getElementById("age").value;
    lesson_record.english_level = document.getElementById("english_level").value;
    lesson_record.rate = document.getElementById("rate").value;
    lesson_record.date = document.getElementById("date").value;

    console.warn(lesson_record);

    const users_data = JSON.stringify(lesson_record, null, "\t");
    console.warn(users_data);
    downloadFile("hello.json", users_data);
}

function load_file() {
    var input, file, fr;

    input = document.getElementById("fileinput");

    if (!input) {
      alert("Не удалось найти элемент ввода файла.");
    }
    else if (!input.files) {
      alert("Этот браузер, похоже, не поддерживает свойство ввода файлов.");
    }
    else if (!input.files[0]) {
      alert("Пожалуйста, выберите файл, прежде чем нажимать «Загрузить свои данные».");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      lines = e.target.result;
      var newArr = JSON.parse(lines);

      document.getElementById("name").value = newArr.name;
      document.getElementById("surname").value = newArr.surname;
      document.getElementById("age").value = newArr.age;
      document.getElementById("english_level").value = newArr.english_level;
      document.getElementById("rate").value = newArr.rate;
      document.getElementById("date").value = newArr.date;

      return newArr;
    }
  }