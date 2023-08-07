import Banner from "../component/banner/Banner";

function Index() {
  return (
    <div className="Index">
        <Banner 
        titulo="Bienvenido a Eve dreams"
        subTitulo="Un lugar donde cumpliras tus sueños"
        tieneBoton={true}
        textoBoton={"comprar"}
        click={(()=>alert("Hizo click"))}
        nameImage="https://angel.iamabdus.com/v1.3/wp-content/uploads/2022/04/home-slider-1-1.jpg"></Banner>
       <div className="presentacion d-flex flex-column align-items-center justify-content-center my-5">
       <h1>Yo soy Evelin</h1>
<p className="text-center">Soy una mujer emprendedora, comenze con esta estilista para poder renovar y entregar toda mi pasion y creatividad en cada corte que hago, no somos una peluqueria, entregamos sueños</p>


       </div>

     
       <div className="">
        Productos
       </div>
       <div className="">
        Contacto
       </div>
       <div className="">
        Testimonios
       </div>
    </div>
  );
}

export default Index;
