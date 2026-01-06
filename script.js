// function saveLoad(){
//     console.log("clicked")
// }

let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

//tab button function
// const tabs = [
//     {url:"oirinfoqenro"}

// ]

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

//delete button function
deleteBtn.addEventListener("dblclick", function () {
    console.log("button clicked")
    localStorage.clear()
    ulEl.innerText = "Leads deleted."
    myLeads = []
    render(leads)
})

deleteBtn.addEventListener("click", function () {
    ulEl.innerText = "Double click on delete button to confirm"
})

//input button function
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)

    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)
})

