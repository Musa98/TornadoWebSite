function openModalView() {
    Swal.fire({
      title: "Оставьте отзыв",
      html:
        '<div > <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input>' +
        '<input  class="swal2-input" placeholder="Введите сообщение"></input> <p>Выберите фото</p> <input type="file" ></input></div>',
      confirmButtonText: "Отправить отзыв",
    }).then(() => {
      Swal.fire("Спасибо!", "Ваш отзыв был отправлен.", "success");
    });
  }