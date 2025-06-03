//javascript
window.onload = function(){
    //boton y contenedor son las clases definidas en html en div y span
    document.querySelector('.boton').addEventListener('click', function(){
        document.querySelector('.contenedor').classList.toggle(invisible);//Aqui utilizamos la clase definida en CSS
        this.classList.toggle('mif-chevron-right');
    });
}  