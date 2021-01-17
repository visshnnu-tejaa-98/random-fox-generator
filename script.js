
let button = document.getElementById("submit")
let output = document.getElementById("result")

button.addEventListener("click",function(e){
    e.preventDefault()
    async function getData(){
        let apiResponse = await fetch(`https://randomfox.ca/floof/`)
        let apiData = await apiResponse.json()
        // console.log(apiData)
        // console.log(output)
        output.innerHTML = `<img class="mt-4" src="${apiData.image}" alt="" id="img">`
    }
    getData()
})






