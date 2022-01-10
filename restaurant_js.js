var btn = document.getElementById('menu-drop');
var menu = document.getElementById('bar');
var state = {};
window.onload = resize();
function drop() {
    if (menu.style.display == 'none') {
    menu.style.display='flex';
    btn.innerHTML = '&times; Menu';
    btn.style.width = '80px';
    btn.style.height = '35px';
    state.clicked = true;
    }
    else {
        menu.style.display = 'none';
        btn.innerHTML = '&#8801; Menu';
        btn.style.width = '90px';
        btn.style.height = '40px';
        state.clicked = false;
    } 
}
function func(size) {
    if (size < 671) {
        for (i = 1; i < 11; i++) {
            var row_num = 'row' + i;
            var row = document.getElementById(row_num);
            if (row !== null) {
                row.classList.remove('row');
            }
        }
    }
    else if (size > 671) {
        for (j = 1; j < 11; j++) {
            row_num = 'row' + j;
            row = document.getElementById(row_num);
            if (row !== null) {
                row.classList.add('row');
            }
        }
    }
}
function resize() {
    var width = window.innerWidth;
    if (width > 1024) {
        menu.style.display = 'flex';
    }
    else if (width < 1024 && state.clicked == false) {
        menu.style.display = 'none';
    }
    else if (width < 1024 && state.clicked == null) {
        menu.style.display = 'none';
    }
    func(width);
}

