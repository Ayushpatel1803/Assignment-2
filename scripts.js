document.querySelector('.menu-icon').addEventListener('click', () => {
    const navigation = document.querySelector('.navigation');
    navigation.style.width = navigation.style.width === '100%' ? '0' : '100%';
});