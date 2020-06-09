document.addEventListener("DOMContentLoaded", function () {
    const myTabs = document.querySelector('.tabs');
    M.Tabs.init(myTabs, {
        swipeable: true,
    });
})