<template lang="pug">
.curso-main-container.pb-3.sintesis
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4(data-aos="fade-left") El presente documento permite comprender los diferentes pasos para la manufactura de los PFNM que comprende: extracción, producción, transformación, procesamiento y comercialización de los productos no maderables.
    p.mb-5(data-aos="fade-right") Para realizar el embalaje de los productos obtenidos, se debe tener en cuenta primero las características del producto y, en segundo lugar, el tipo de empaque que se va a utilizar para conservar el producto en buenas condiciones hasta entregarlo al consumidor final.

    .row.align-items-center.justify-content-center.mb-5(style="background-color: #F6FAF0" data-aos="fade-left")
      .col-12.col-lg-8.ps-5.py-4
        p.mb-4 El presente documento permite comprender los diferentes pasos para la manufactura de los PFNM que comprende: extracción, producción, transformación, procesamiento y comercialización de los productos no maderables.
        p.mb-4 Para realizar el embalaje de los productos obtenidos, se debe tener en cuenta primero las características del producto y, en segundo lugar, el tipo de empaque que se va a utilizar para conservar el producto en buenas condiciones hasta entregarlo al consumidor final.
        p.mb-0 En todos los procedimientos de la cadena de producción hasta la comercialización, hay que considerar los reglamentos y normatividad aplicables a los PFNM; igualmente, para su extracción y comercialización, por lo que se deben obtener los permisos que las autoridades exigen para estas actividades.
      .col-8.col-lg-4.p-0
        img(src="@/assets/curso/img01.png", alt="alt")
      
    p.mb-4(data-aos="fade-left") Los requerimientos técnicos que necesitan los PFNM son los mismos que requiere un árbol dentro del bosque, estos son de origen natural y aportados por el mismo ecosistema del bosque. Con relación a la logística de la producción, solo se da para plantaciones de árboles con carácter comercial; sin embargo, se debe aclarar que la producción de los PFNM es de origen vegetal, como tal, no existe ninguna logística de producción,  por lo que existe un cuello de botella dentro del transporte de los PFNM, como la falta de caminos y carreteras para su extracción. 

    .cajon.color-acento-botones.p-4.px-5.mb-4(data-aos="fade-right")
      p.mb-0 Los residuos no maderables del bosque son mínimos, por lo que, si se analizan los sistemas de extracción, los residuos que deja el aprovechamiento no son causa de preocupación, diferente a los residuos que deja la tala de bosques.

    p.mb-4(data-aos="fade-left") Con relación a los requerimientos ambientales del producto, estos están directamente relacionados con el sistema de aprovechamiento, en toda la cadena se debe conocer y aplicar la legislación ambiental existente en cada región, la cual es emitida por cada corporación regional, por ejemplo, la CAR en Cundinamarca. 

    .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-10
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/img02.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Por otro lado, para el aprovechamiento de los recursos naturales, ha sido necesario transmitir el conocimiento y las prácticas para recoger los productos finales del bosque de generación en generación, de forma oral, por lo que el conocimiento de los ancestros se hace importante para continuar con esta tradición dentro de la comunidad para su subsistencia.  Así que no se trata solo de obtener los productos, esta práctica se debe realizar sin causar daños en el ambiente y realizar un aprovechamiento sostenible, no solo para hoy, sino que se hace necesario pensar en el mañana.

    p.mb-4 Por esta razón, las ISO son las normas internacionales que regulan la gestión ambiental a nivel internacional y son las empresas dedicadas a la industrialización de los productos del bosque quienes las deben aplicar y cumplir para el bienestar de todos.

    .titulo-segundo.color-acento-contenido
      h2 Mapa conceptual

    .row.justify-content-center
      .col-lg-10.mb-5
        figure(data-aos="fade-left")
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank" data-aos="fade-right")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.sintesis
  .cajon.color-acento-botones
    background-color: #FFF7E3

  .cajon.color-acento-botones:before
    background-color: #FFC846

  .anexo
    background-color: #F3F9FF !important;
    *
      color: #85B2F5 !important
</style>
