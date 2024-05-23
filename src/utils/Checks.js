export function checkLogin() {
    return localStorage.getItem('userId') && localStorage.getItem('userId') !== '';
}