// скрипт выполняется после загрузки страницы
  window.onload = function() {
    // Контейнер карточек
    let card_container = document.querySelector('.cards-block');
    let loading = document.querySelector('.loading');

    loading.classList.add('active');
    // Функция запроса к API
    async function fetchdataJSON() {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        return data;
    }

    // Функция, которая выполняется, когда приходит ответ с сервера
    fetchdataJSON().then(data => {
        loading.classList.remove('active');
        let persons = data.results;
        createdCardsPerson(persons);
    });

    // Функция вывода данных в html
    function createdCardsPerson(persons){
        //перебор массива
        persons.map(function(person) {

            // создание карточки
            let card_item = document.createElement('div');
            card_item.className = "card-item";
            
            // Добавлние блока картинки
            let card_img_container = document.createElement('div');
            let card_img = document.createElement('img');
            //добавление атрибута
            card_img.src = person.picture.large;
            card_img_container.appendChild(card_img);
            card_img_container.className = "card-item__image";
            card_item.appendChild(card_img_container);

            // Добавление текстовых данных
            
                // Добавление имени и фамилии --->
                let card_fio = document.createElement('div');
                card_fio.className = "card-item__fio";
                // Добавление фамилии
                let card_last_name = document.createElement('div');
                card_last_name.innerHTML = "<span>Фамилия: </span>" + person.name.title + " " + person.name.last;
                // Добавление имени
                let card_first_name = document.createElement('div');
                card_first_name.innerHTML = "<span>Имя: </span>" + person.name.first;
                card_fio.appendChild(card_last_name);
                card_fio.appendChild(card_first_name);
                card_item.appendChild(card_fio);

                // Добавление пола
                let genders = {
                    female: "Женский",
                    male: "Мужской"
                }
                let current_gender;
                // Заменяем английское название пола на русское
                if (person.gender == 'male') {
                    current_gender = genders.male;
                } else {
                    current_gender = genders.female;
                }
                let card_gender = document.createElement('div');
                card_gender.innerHTML = "<span>Пол: </span>" + current_gender;
                card_item.appendChild(card_gender);

                // Добавление адреса --->
                let card_address = document.createElement('div');
                card_address.className = "card-item_address";
                card_address.innerHTML = "<span>Адрес: </span>" + person.location.country + ", " + person.location.street.name + ", " + person.location.street.number;
                card_item.appendChild(card_address);

                // Добавление email --->
                let card_email = document.createElement('div');
                card_email.className = "card-item__email";
                card_email.innerHTML = "<span>Email: </span>" + person.email;
                card_item.appendChild(card_email);

                // Добавление дня рождения --->
                let card_birthday = document.createElement('div');
                card_birthday.className = "card-item__birthday";
                
                // Преобразование даты полученной с сервера в обычный вид
                let date = new Date(person.dob.date) 
                let date_parse = ('0'+(date.getDate())).slice(-2) + "." + ('0'+(date.getMonth()+1)).slice(-2) + "." + date.getFullYear();
                card_birthday.innerHTML = "<span>Дата рождения: </span>" + date_parse;
                card_item.appendChild(card_birthday);

                // Добавление возраста --->
                let card_age = document.createElement('div');
                card_age.className = "card-item__age";
                card_age.innerHTML = "<span>Возраст: </span>" + person.dob.age;
                card_item.appendChild(card_age);

                // Добавление телефона --->
                let card_phone = document.createElement('div');
                card_phone.className = "card-item__cell";
                card_phone.innerHTML = "<span>Телефон: </span>" + person.phone;
                card_item.appendChild(card_phone);


            card_container.appendChild(card_item);
        });
    }
 };
 
