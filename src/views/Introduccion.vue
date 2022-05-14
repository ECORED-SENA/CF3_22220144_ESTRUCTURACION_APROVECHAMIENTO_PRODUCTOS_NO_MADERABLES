<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    
    .fondo1.pt-5.mb-4
      p.mb-5(data-aos="fade-right") El siglo XXI trajo consigo grandes cambios en diferentes áreas, tales como: la incorporación de la ciencia, la tecnología y la investigación en la economía, la salud, la educación y la conciencia ciudadana, con énfasis en ser un ser social global.  En noviembre del 2021, Colombia participó en el evento mundial denominado COP26, el cual reunió a más de 100 presidentes con sus delegaciones, quienes buscaban generar conciencia por el cuidado del medio ambiente y las consecuencias en el cambio climático. 
      .row.align-items-center.mb-4(data-aos="fade-left")
        .col-xl-3
          figure
            img(src='@/assets/curso/intro/img02.png')              
        .col-xl-9
          p.mb-0 El presidente colombiano representó a más de 30 países latinoamericanos en dicho evento, con su liderazgo, convocó a la ciudadanía mundial a pensar en los objetivos E 2050, lo que necesariamente incluye el cuidado de los ríos, océanos, bosques y todo terreno que se constituya como patrimonio cultural y que esté conformado por comunidades que tengan conocimientos ancestrales que puedan ser sistematizados por investigadores, con el fin de buscar solucionar problemas actuales en temas de salud, industria, alimentación y protección de plantas que formen parte de los productos forestales no maderables del bosque. Por lo anterior, se le invita a ver el siguiente recurso de aprendizaje.
      
      .imagen-adornos-flotantes.mb-lg-0(data-aos="fade-right")      
        img(src='@/assets/curso/intro/img03.png')    
        figcaption Fuente: Imagen tomada de Wikimedia.     
        .imagen-adornos-flotantes__img1.d-none.d-xl-block: img(src="@/assets/curso/intro/hoja1.png" style="left: 22% ; bottom: 50%  ; width: 71px")        
        .imagen-adornos-flotantes__img2.d-none.d-xl-block: img(src="@/assets/curso/intro/hoja2.png" style="left: ; right: -2% ; top: -10px ; bottom: 0% ; width: 98px ")            

    figure(data-aos="fade-left")
      .video      
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/ie4xZxgBJ6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.introduccion
  .fondo1
    position: relative
    padding-bottom: 1rem
    img, p
      position: relative
    &::before
      content: ""
      position: absolute
      top: 0
      left: 2.5%
      width: 108%
      height: 100%
      margin: 0 -5rem
      background-image: url("../assets/curso/intro/img01.png")
      // background-size: contain
      background-repeat: no-repeat

  .imagen-adornos-flotantes
    position: relative
    &__img1
      img
        position: absolute
        z-index: 1000
        animation: float 3s ease-in-out infinite alternate
    &__img2
      img
        position: absolute
        z-index: 1000
        animation: float 4s ease-in-out infinite alternate

  @keyframes float
    0%
      transform: translateY(30px)

    100%
      transform: translateY(0px)
</style>
