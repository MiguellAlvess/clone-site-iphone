const buttons = document.querySelectorAll("#img-picker li")
const image = document.querySelector("#product-image")


buttons.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{

    // removendo todos os botôes da classe selecionada

    buttons.forEach(btn =>{
        btn.querySelector(".color").classList.remove("selected")
    })

    // adicionar a classe no botão correto

    const button = e.target

    const id = button.getAttribute("id")

    button.querySelector(".color").classList.add("selected")

    // mudando imagem

    image.classList.add("changing")
    image.setAttribute("src", `img/iphone_${id}.jpg`)


    setTimeout(() =>{
        image.classList.toggle("changing")
    }, 200)

    })
})