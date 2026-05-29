//Cotação de moedas do dia.
const USD = 5.32
const EUR = 6.12
const GBP = 7.22


// Obtendo os elemntos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")


// Manipulando o input amount para receber somente numeros.
amount.addEventListener("input", () => {
   const hasCharactersRegex = /\D+/g 
   amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando o evento de submit (enviar) do formulário.
form.onsubmit = (event) => {
   event.preventDefault()

   switch (currency.value) {
      case "USD":
         convertCurrency(amount.value, USD, "US$")
         break;
      case "EUR":
         convertCurrency(amount.value, EUR, "€")
         break;
      case "GBP": 
         convertCurrency(amount.value, GBP, "£")
         break;
   }
}

//Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
   try {
      //Exibindo a cotação da moeda selecionada.
      description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

      // Calcula o total.
      let total = amount * price

      // Exibe o resultado total.
      result.textContent = `${amount} ${symbol} = ${formatCurrencyBRL(total)}`


      // Aplica a classe que axibe o footer.
      footer.classList.add("show-result")
   } catch (error) {
      // Remove a classe footer ocultando ele.
      console.log(error)
      footer.classList.remove("show-result")
      alert("Não foi possivel converter. Tente novamente mais tarde.")
   }
}

// Formata a moeda em real brasileiro.
function formatCurrencyBRL(value){
   return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
   })
}