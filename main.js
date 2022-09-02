// GERAÇÃO DINÂMICA DOS CARDS DO PORTFOLIO
function geraPortfolio() {

  const portfolio = [
    {
      image: "./assets/img/AdoPet _ Inicial.gif",
      title: 'AdoPet | Challenge Alura',
      content: "Layout de site responsivo desenvolvido durante o Challenge Front-end 4 da Alura",
      github: 'https://github.com/smaileyb/AdoPet'

    },
    {
      image: "./assets/img/Portfolio_React.gif",
      title: 'Portfolio em React - Tutorial EGATOR',
      content: "Portfolio desenvolvido com base em tutorial feito pelo youtuber EGATOR para estudo de React",
      github: 'https://github.com/smaileyb/portfolio-react'
    },
    {
      image: "./assets/img/construcao.png",
      title: 'Futuros projetos',
      content: "A definir",
      github: '#'
    },
    {
      image: "./assets/img/construcao.png",
      title: 'Futuros projetos',
      content: "A definir",
      github: '#'
    }
  ]

  portfolio.map(({ image, title, content, github }) => {
    const abaPortfolio = document.getElementById("cartoes-projetos")
    abaPortfolio.innerHTML += `<div class="card mb-5"
    style="width: 18rem; background-color: transparent; border: 2px solid var(--azul-principal);">
    <img src='${image}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title titulo lh-base" style="font-size: 1rem;">${title}</h5>
      <p class="card-text lh-base mb-3" style="font-size: 0.75rem;">${content}
      </p>
    </div>
    <a href=${github} class="btn btn-danger mx-auto"> <i class="bi bi-github"></i>
      Repositório</a>
  </div>`
  })

}

geraPortfolio()

// FORMULÁRIO COM ENVIO AUTOMÁTICO AO E-MAIL E AVISO DINÂMICO

const form = document.getElementById("FormContato")
const aviso = document.getElementById('liveToast')

form.addEventListener("submit", (e) => {
  e.preventDefault()
  emailjs.sendForm('service_p860eg7', 'template_zv8bpw5', '#FormContato', 'dNISW2dklRw30Ihzj')
    .then((result) => {
      console.log(result.text)
      const toast = new bootstrap.Toast(aviso)
      toast.show()
    }, (error) => {
      console.log(error.text)
    })
  e.target.reset()
})

