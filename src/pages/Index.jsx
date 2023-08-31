import Banner from "../component/banner/Banner";

function Index() {
  return (
    <div className="Index">
        <Banner 
        titulo="Bienvenido a Eve dreams"
        subTitulo="Un lugar donde cumpliras tus sueños"
        tieneBoton={true}
        textoBoton={"comprar"}
        nameImage="https://angel.iamabdus.com/v1.3/wp-content/uploads/2022/04/home-slider-1-1.jpg"></Banner>
    </div>
  );
}

export default Index;
