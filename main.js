const question_text_element = document.getElementById("question_text")
const no_button = document.querySelector("#no_button")
const yes_button = document.querySelector("#yes_button")
const indicator = document.querySelector("#indicator")

let current_question = 0
let negative_answers = 0

const questions = [
    {
        text: "tror du jeg elsker deg?",
        on_yes: () => {
            alert("mer enn noe annet❤️")
            next_question()
        },
        on_no: () => {
            if(no_button.style.scale == "") { no_button.style.scale = 0.9 }
            else {no_button.style.scale = +no_button.style.scale / 1.1}
            negative_answers++
        }
    },
    {
        text: "tror du jeg savner deg?",
        on_yes: () => {
            alert("hvert sekund jeg er uten deg❤️")
            next_question()
        },
        on_no: () => {
            if(no_button.style.scale == "") { no_button.style.scale = 0.9 }
            else {no_button.style.scale = +no_button.style.scale / 1.1}
            negative_answers++
        }
    },
    {
        text: "tror du jeg vil deg vondt?",
        on_yes: () => {
            if(yes_button.style.scale == "") { yes_button.style.scale = 0.9 }
            else {yes_button.style.scale = +yes_button.style.scale / 1.1}
            negative_answers++
        },
        on_no: () => {
            alert("aldri❤️")
            next_question()
        }
    },
    {
        text: "vil du være min valentines?",
        on_yes: () => {
            alert("elsker deg ❤️")
            finish()
        },
        on_no: () => {
            if(no_button.style.scale == "") { no_button.style.scale = 0.9 }
            else {no_button.style.scale = +no_button.style.scale / 1.1}
            negative_answers++
        }
    },
]

function load_question() {
    question_text_element.innerText = questions[current_question].text
    update()
}

function get_emoji(n) {
    if(n < 2) {
        return "🥰"
    } else if(n < 4) {
        return "😊"
    } else if(n < 6) {
        return "🙂"
    } else if(n < 8) {
        return "😥"
    } else if(n < 10) {
        return "😓"
    } else {
        return "😭"
    }
}

function next_question() {
    reset_scales()
    current_question += 1
    load_question()
}

function prev_question() {
    reset_scales()
    current_question -= 1
    load_question()
}

function reset_scales() {
    no_button.style.scale = 1
    yes_button.style.scale = 1
}

function update() {
    indicator.innerText = get_emoji(negative_answers)
}

function answer_yes() {
    questions[current_question].on_yes()
    update()
}

function answer_no() {
    questions[current_question].on_no()
    update()
}

function finish() {
    yes_button.remove()
    no_button.remove()
    question_text_element.remove()
    indicator.remove()
    document.querySelector(".card").remove()

    const images = [
        "https://i.pinimg.com/originals/99/4a/fa/994afa7e36fbeea7a5f6c5357584400c.jpg",
        "https://www.sleepy-teepee.com/wp-content/uploads/IMG_20210314_150256-1536x2048.jpg",
        "https://c.pxhere.com/images/d7/3b/2023f089c1125af2616970ec65dd-1446199.jpg!d",
        "https://preview.redd.it/zp816fyny6j51.jpg?auto=webp&s=394db053aca7e0bbca4c6bb2dc698e2384cdd015",
        "https://s3-media3.fl.yelpcdn.com/bphoto/XkBAa8cc2kMOMcPmAA1W7g/o.jpg",
        "https://static01.nyt.com/images/2022/11/13/fashion/TOI-ET-MOI-RINGS/merlin_216238245_a57c0ada-1a78-4e81-bef6-883434c76b44-superJumbo.jpg?quality=75&auto=webp",

    ]

    let el = document.createElement("h1")
    el.innerText = "Jeg vil gjøre alt med deg❤️"
    document.body.appendChild(el)

    for(let image of images) {
        let el = document.createElement("img")
        el.src = image
        el.style.width = "50%"
        document.body.appendChild(el)
    }
}