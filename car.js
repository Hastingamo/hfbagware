 if(document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded", ready)
 }else{
    ready()
 }

 function ready() {
    let removeChart = document.getElementsByClassName("remove");
    let purchases = document.getElementsByClassName("purchase");

    console.log(removeChart)
    for (let i = 0; i < removeChart.length; i++){
       const buttons = removeChart[i]
       buttons.addEventListener("click", removeButtonss)
    }
    for (let i = 0; i < purchases.length; i++){
      const buttonss = purchases[i]
      buttonss.addEventListener("click", purchaseButtons)
   }
    let quantInput = document.getElementsByClassName("quant")
    for(i = 0; i < quantInput.length; i++){
        let input = quantInput[i]
        input.addEventListener("change", quantitychan)
    }
    let addToChart = document.getElementsByClassName("rent")
    for(i = 0; i < addToChart.length; i++){
      let buttioning =  addToChart[i]
      buttioning.addEventListener("click", addToChartClicked)
    }
   // document.getElementsByClassName("purchased")[0].addEventListener("clicked", purchasedClicked)

}
function purchasedClicked() {
   alert("thank for patronizing dams store")
   let charts =  document.getElementsByClassName("conting")[0]
   while(charts.hasChildNodes()){
      charts.removeChild(charts.firstChild)
   }
   updateChart()
}
function quantitychan(event){
   input = event.target
   if(isNaN(input.value) || input.value <= 0){
       input.value = 1
   }
   updateChart()
} 
function addToChartClicked(event){
   let buttioning = event.target 
   let item =  buttioning.parentElement.parentElement
   let title = item.getElementsByClassName("name")[0].innerText 
   let pricess = item.getElementsByClassName("prs")[0].innerText 

   let imagess = item.getElementsByClassName("imgs1")[0].src
   console.log(title, imagess, pricess) 
   addToChartClck(title, pricess, imagess)
   updateChart()
   quantitychan()
 }
function addToChartClck(title, pricess, imagess){
   let cartRow = document.createElement("div")
   cartRow.innerText = title
   let cartItem = document.getElementsByClassName("conting")[0]
   let contingContent = `
      <div class="sub">
         <div class="item">
            <img src="${imagess}" alt="" height="50px" width="50px">
            <h1>${title}</h1>
         </div>
         <div class="pr">
            <h3>${pricess}</h3>

         </div>
         <div class="d">
            <input type="number" id="quantity" class="quant" value="1">
            <h2 class="remove">delete</h2>    
         </div>
      </div>
   `
   cartRow.innerHTML = contingContent
   cartItem.append(cartRow)
   cartRow.getElementsByClassName("remove")[0].addEventListener("click", removeButtonss )
   cartRow.getElementsByClassName("quant")[0].addEventListener("changed", quantitychan)
   let cartName =  cartItem.getElementsByClassName("titless")
   for(let i = 0; i < cartName.length; i++){
      if(cartName[i].innerText == title){
         alert("this item is already in your chart")
         return
      }
   }

 
}

 function  removeButtonss(event){
    const buttonsClicked = event.target
    buttonsClicked.parentElement.parentElement.remove()
    updateChart()
 }
 function  purchaseButtons(event){
   const buttonsClicked = event.target
   buttonsClicked.parentElement.parentElement.purchases()
   updateChart()
}
  

 function updateChart(){
    let names = document.getElementsByClassName("containers")[0]
    let now = names.getElementsByClassName("sub")
    let total = 0

    for(let i = 0; i < now.length; i++){
        let nows = now[i] 
        let price = nows.getElementsByClassName("pricess")[0]
        let quans = nows.getElementsByClassName("quant")[0]
        console.log(price, quans)
        let prices = parseFloat(price.innerText.replace('$', ''))
        console.log(prices)
        let quansing = quans.value
        console.log(prices * quansing)
        total = total + (prices * quansing)
        console.log(total)
    }
    document.getElementsByClassName("prss")[0].innerText = '$' + total

 }
// let icon  = document.querySelector(".shops");
// let body = document.querySelector("body");
// icon.addEventListener("clicked", () => {
//    body.classList.toggle("showShoppingChart")
// }) 