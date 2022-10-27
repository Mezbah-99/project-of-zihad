
// Mega Menu
const megaBtn = document.getElementById("megaBtn");
const megaSection = document.getElementById('megaMenuSection');
const megaChangBtn = document.getElementById('megaChangBtn');

const barButton = () => {
    const node = document.createElement('i');
    node.classList.add("fa-solid", 'fa-bars');
    megaChangBtn.appendChild(node);
}

const closeButton = () => {
    const node = document.createElement('i');
    node.classList.add("fa-solid", 'fa-xmark');
    megaChangBtn.appendChild(node);
}

megaSection.style.display = 'none';

megaBtn.addEventListener('click', () => {
    if(megaSection.style.display === 'none'){
        megaChangBtn.innerHTML = "";
        megaSection.style.display = 'grid'
        closeButton()
    }else{
        megaChangBtn.innerHTML = "";
        megaSection.style.display = 'none';
        barButton();
    }
})
