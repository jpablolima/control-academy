const currentPage = location.pathname;

for (item of menuItems) {
    if (currentPage.includes(item.getAttibute('href'))) {
        item.classList.add('active')
    }
}