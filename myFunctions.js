function toggleDetails(id) {
    $("#" + id).fadeToggle();
}

function showForm() {
    $("#orderForm").slideDown();
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const bank = document.getElementById("bank").value.trim();
    const date = document.getElementById("date").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const nameRegex = /^[A-Za-z]+\s+[A-Za-z]+$/;
    const bankRegex = /^\d{6}$/;
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;
    const phoneRegex = /^(09[3-6]|09[8-9])\d{7}$/;

    if (!bankRegex.test(bank)) {
        alert("رقم الحساب المصرفي يجب أن يكون مكوناً من 6 أرقام.");
        return false;
    }
    if (name && !nameRegex.test(name)) {
        alert("الاسم الكامل يجب أن يكون باللغة الإنجليزية ويتضمن اسم وكنية مع فراغ واحد.");
        return false;
    }
    if (date && !dateRegex.test(date)) {
        alert("التاريخ يجب أن يكون بالشكل dd-mm-yyyy.");
        return false;
    }
    if (phone && !phoneRegex.test(phone)) {
        alert("رقم الموبايل غير صحيح. يجب أن يبدأ بـ 093-096 أو 098-099 ويتكون من 10 أرقام.");
        return false;
    }

    calculateTotal();
    return false;
}

function calculateTotal() {
    const prices = document.querySelectorAll(".price");
    const checks = document.querySelectorAll(".check");
    let total = 0;
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            total += parseInt(prices[i].innerText, 10);
        }
    }
    const tax = Math.round(total * 0.1);
    const finalAmount = total + tax;
    alert(
        "المبلغ الإجمالي: " + total + " ل.س\n" +
        "ضريبة 10%: " + tax + " ل.س\n" +
        "المبلغ مع الضريبة: " + finalAmount + " ل.س"
    );
}