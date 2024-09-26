function changeBackgroundColor() {

    const selectedColor = document.getElementById("colors").value;

    document.body.style.backgroundColor = selectedColor;
}

const image = document.getElementById('image');

    document.addEventListener('mousemove', (e) => {
     
      image.style.left = `${e.pageX}px`;
      image.style.top = `${e.pageY}px`;
    });