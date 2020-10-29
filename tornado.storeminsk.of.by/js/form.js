let name = document.getElementById("name");
let phone = document.getElementById("phone");

function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

$("#order_form").on("submit", function (e) {
    let formData = {
        name: name.value,
        phone: phone.value,
    };

    setWithExpiry("myKey", formData, 20000);
});
