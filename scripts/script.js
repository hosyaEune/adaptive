window.onload = () => {
    const menuBlock = document.querySelector('.menuSection');
    const union = menuBlock.querySelector('.union')
    
    const toggleActiveMenu = () => {
        menuBlock.classList.toggle('active')
    }

    union.addEventListener('click', () => toggleActiveMenu())
} 