let myLeads = [];
let inputBtn = document.getElementById("input-btn");
let inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");
let deleteBtn = document.getElementById("delete-btn");
let tabBtn = document.getElementById("tab-btn");
let removeBtn = document.getElementById("remove-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

removeBtn.addEventListener("click", () => {
    myLeads.pop();

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    console.log(localStorage.getItem("myLeads"));
});

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);

    console.log(localStorage.getItem("myLeads"));
});


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
        <a target = "_blank" href = '${leads[i]}'>${leads[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems;
}