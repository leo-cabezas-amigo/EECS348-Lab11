function applyChangesToDiv() {
    
    let text = document.getElementById('text');

    let text_R = document.getElementById('text_R').value;
    let text_G = document.getElementById('text_G').value;
    let text_B = document.getElementById('text_B').value;
    let font_size = document.getElementById('font_size').value;

    let border_R = document.getElementById('border_R').value;
    let border_G = document.getElementById('border_G').value;
    let border_B = document.getElementById('border_B').value;
    let border_width = document.getElementById('border_width').value;

    let background_R = document.getElementById('background_R').value;
    let background_G = document.getElementById('background_G').value;
    let background_B = document.getElementById('background_B').value;

    if (text_R && text_G && text_G){
        text.style.color = `rgb(${text_R},${text_G},${text_B})`;
        text.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    }
    if (font_size){
        text.style.fontSize = `${font_size}px`;
    }

    if (border_R && border_G && border_B){
        text.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    }
    if (border_width){
        text.style.borderWidth = `${border_width}px`;
    }

    if (background_R && background_G && background_B){
        text.style.backgroundColor = `rgb(${background_R},${background_G},${background_B})`;
    }
}