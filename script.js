// ///Upload Image/////
let img = document.querySelector('.img');
let image = document.querySelector('.image');
let el = document.querySelector('#el');
let label = document.querySelector('label');

let caption = document.querySelector('#caption');


let arr = ["أختي يا أجمل من في هذا العالم، أحبك كثيرًا، فأنتِ جعلتيني أفتخر بكِ دائمًا", "أحبك يا غاليتي الله يبارك لي في عمرك ويجعل أيامك كلها فرح، مبروك التخرج."
    ,"مبارك التخرج يا حبيبة القلب، ويا ابنتي التي لم أنجبها بعد، دائمًا فخورة بالمكانة التي تصلي إليها وأتمنى لكِ المزيد من التفوق والنجاح في حياتك"
    ," التخرج مملكة لأختي عظيمة الأركان بهية الألوان فيها التألق مكنون كاللؤلؤ والمرجان."
    ," نجاحكِ وتخرجكِ شمس لصباحنا الربيعيّ يا أختي فتعبك ودراستك لم تَضِع يا عزيزتي."
    ," مبارك لك التفوّق يا أختي الجميلة البهية التي في عينيها يجتمع البهاء والألق والطموح."
    ,"مبارك لنا نجاحك يا أختي الحبيبة فهذا وسام نعتزّ به ونفتخر فالنجوم كثيرة والقمر واحد"
    ," في كل سنة يتخرج الطلاب ويفرحون مع أسرهم إلا هذه السنة فقد كان بينهم أروع خرّيجة وهي أختي العزيزة."
    ," إن كان تخرج الطلاب سيلًا جارفًا فتخرجك يا أختي إعصارًا هدم كل التوقعات"
    ," يا من تخرجتِ بقوة إرادتك وعزيمتك بارك الله بكل حلم وطموح تحلقين نحوه يا أختي."
    ," الأخت الأجمل عل الإطلاق هي التي تهمّش النجوم لتكون القمر المنير فمبارك ياعزيزتي"
]
let index = Math.floor(Math.random() * arr.length);
el.innerHTML = arr[index];
caption.innerHTML = arr[index -2];

img.onchange = function () {
    if(img.files[0].size < 1000000) {
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            imgUrl = e.target.result;
            image.src = imgUrl;
            label.style.display = 'none';
            image.style.display = 'block';
        }

        fileReader.readAsDataURL(img.files[0])
    }
    else{
        alert('حجم الصورة كبير')
    }
}

let obj = {
    image: image.src
}
let audio = document.querySelector("audio")
let btn = document.querySelector('#btn')
let oo = document.querySelector('.oo');
let image2 = document.querySelector('#image2');
btn.addEventListener('click',(e) => {
    oo.style.top = "20%";
    let obj = {
        image: image.src
    }
    image2.src = obj.image
    audio.play()
})