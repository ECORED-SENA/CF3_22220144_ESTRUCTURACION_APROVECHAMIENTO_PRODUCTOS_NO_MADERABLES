<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requisitos normativos y de calidad
    
    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-xl-3.p-0    
        img.mb-3.mb-lg-0(src='@/assets/curso/tema2/img01.png')       
      .col-xl-7.px-5.d-flex.p-3.align-items-center(style="background-color: #F1F6EA")          
        p.mb-0 Para la producción de recursos forestales no maderables, es importante tener en cuenta que para su desarrollo se necesita cumplir ciertos requisitos técnicos, los cuales son de origen natural, con el fin de cuidar y hacer sostenible el ecosistema en general. Estos tienen que ver con el equilibrio del bosque y son los encargados de regular la cantidad de precipitación de agua que se necesita para el cultivo.

    .row.justify-content-center.mb-0(data-aos="fade-right")
      .col-xl-10
        p.mb-0 El ecosistema está conformado por diferentes tipos de vegetación, entre ellos  los arbustos; además, es importante la cantidad de radiación o luz solar dada a la vegetación, por lo que los productos no maderables deben competir por la energía solar. Por otro lado, los suelos son otro factor a tener en cuenta y están definidos por la misma naturaleza y la descomposición de los elementos vegetales y animales.

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Logística de producción

    p.mb-4(data-aos="fade-left") La logística de la producción para los PFNM no existe, ya que son productos que se recogen en el bosque, por la comunidad, y son utilizados para su sustento o su diario vivir. Sin embargo, hoy en día se evidencia que se han abierto algunas empresas que lo hacen de manera más comercial, por lo que ellas tendrían que usar algún tipo de estrategia para la movilidad del producto. A continuación, se presenta una propuesta de logística para este tipo de productos, por lo que se le invita a revisar el siguiente recurso de aprendizaje.

    .titulo-sexto.color-acento-contenido
      span Logística. Proceso de logística en PFNM.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10
        figure 
          img(src='@/assets/curso/tema2/img02.png')       

    p.mb-4(data-aos="fade-left") Este proceso es un conjunto de medios y métodos que permite llevar a cabo la organización de una plantación, y que sirve de puente (nexo) entre la producción y el mercado. Tanto la distancia física como el tiempo separan a la actividad productiva del punto de venta; la logística se encarga de enlazar la producción y el mercado a través de sus técnicas.  

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10
        p.mb-4 Para tener en cuenta…
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4 
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Esta también implica las actividades de planificación y gestión de recursos, su función es implementar y controlar con eficiencia los materiales y los productos, desde el punto de origen hasta el cliente final, con la intención de satisfacer las necesidades del consumidor al menor costo posible. El mensaje clave de la logística empresarial es:  colocar los bienes y servicios en el lugar apropiado, en el momento preciso y bajos las cantidades y calidades adecuadas. 
        
        p.mb-5.text-center La logística en el sector forestal se puede subdividir en las siguientes etapas: 

        .titulo-sexto.color-acento-contenido
          span Logística de producción.
        figure 
          img(src='@/assets/curso/tema2/img04.png')       

    p.mb-4(data-aos="fade-left") Ahora es importante también hablar del examen de la cadena logística actual y los cuellos de botella. Colombia es un país con una topografía variable, que comprende desde relieves planos en zonas bajas o también en alta montaña hasta relieves poco quebrados a muy quebrados en zonas de media y alta montaña.  Las principales áreas con las plantaciones forestales comerciales se encuentran en zonas con las pendientes más pronunciadas.  

    .row.justify-content-center.align-items-center.mb-5.py-5(style="background-color:#F6FAF0" data-aos="fade-right")
      .col-xl-4
        img.mb-3.mb-xl-0(src='@/assets/curso/tema2/img05.png')       
      .col-xl-7.p-0
        p.mb-4 La mayoría de las áreas identificadas como aptas para las plantaciones forestales poseen pendientes que limitan fuertemente cualquier actividad mecanizada, lo que condiciona la construcción de caminos, debido al alto riesgo de erosión, y dificulta la cosecha de los PFNM. Todos estos factores generan costos muy elevados, que reducen la competitividad del sector forestal. 

        .row.justify-content-center
          .col-11.col-md-5.px-3
            a.anexo.mb-4(style="background-color: #F6E8E4 !important" :href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p(style="color: #12263F !important") Anexo. Logística de producción.
            
        p.mb-4 El diseño de los caminos forestales depende del manejo implementado, la silvicultura y principalmente del aprovechamiento.  En las pendientes más empinadas, el aprovechamiento se realiza de manera manual, con herramientas o utensilios sencillos.
        p.mb-0 Cuando el aprovechamiento se realiza con otros sistemas, como la tracción animal, se debe aumentar el ancho de los caminos para reducir los costos de arrastre. 
      .col-xl-1

    p.mb-4(data-aos="fade-left") Las actividades de silvicultura, como la siembra, la fertilización, las limpiezas o las entresacas son también más costosas cuando el ancho de los caminos es menor o el terreno es más inclinado, ya que se dificultan las operaciones y el suministro de los insumos.    
    
    .row.justify-content-center.align-items-center.mb-5(style="background-color: #FFF7E3" data-aos="fade-right")
      .col-12.col-lg-8.px-5.py-3
        p.mb-4 La construcción de caminos forestales es muy costosa en zonas de montaña. Por término medio, se construyen 30 m de camino forestal por hectárea en las zonas con pendientes mayores de 23°, y alrededor de 60 m en las zonas más llanas. Los costos de un camino con un carril (con apartaderos en caso de cruce de vehículos) suponen por término medio 51,000 USD por km, y en las zonas más llanas, 15,000 USD por km para un camino de doble carril. Los costos de acceso equivalen a 1,530 USD ha-1 en el caso de zonas montañosas y a 900 USD ha-1 en las zonas más llanas. Los costos de mantenimiento son del orden de 470 USD km-1 año-1.   
        p.mb-0 Grado de mecanización posible por región y costos de acceso por hectárea. Región potencial de mecanización (% de área) Costos de caminos – valor promedio en función de la pendiente (USD ha-1) Eje Cafetero 20 1,404 Caribe 60 1,152 Orinoquía 90 963 *Montañosa > 23° de pendiente = 30 m ha-1; llana hasta ondulada < 23° de pendiente = 60 m ha. 
      .col-6.col-lg-4.p-0
        img(src='@/assets/curso/tema2/img06.png')       

    p.mb-4(data-aos="fade-left") La construcción de caminos en Colombia es costosa en comparación con otros países. Los prestadores de servicios tienen precios elevados, también debido al hecho de que se utilizan tecnologías de construcción anticuadas. Las máquinas usadas, especialmente en las zonas montañosas, no son las más económicas ni las mejores adaptadas para estos servicios. 
    p.mb-4(data-aos="fade-right") Un problema identificado como grave es la obtención de permisos para la explotación de canteras para balastro. Para tener caminos utilizables todo el año, el uso de balastro es indispensable en el sector forestal. Los permisos tardan un año o más, lo que supone una barrera operacional intolerable.  
    p.mb-5(data-aos="fade-left") Una limitante muy fuerte que influencia en gran medida los costos de transporte son las velocidades medias que pueden alcanzar los camiones en las vías sinuosas de las zonas montañosas, tanto en ascenso como en descenso. Por lo anterior, se le invita a revisar los siguientes enlaces con el fin de acceder a más información sobre el tema.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-8
        .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
          .col-6.col-lg-3
            img.mb-3.mb-lg-0(src="@/assets/curso/tema2/img07.svg")
          .col-12.col-lg-6
            p.mb-3.mb-lg-0 Para profundizar en el tema ¨Situación actual y potencial de fomento de plantaciones forestales con fines comerciales en Colombia¨ en el siguiente enlace, página 57.
          .col-6.col-lg-3
            a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")

    .row.justify-content-center(data-aos="fade-right")
      .col-12.col-lg-8
        .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
          .col-6.col-lg-3
            img(src="@/assets/curso/tema2/img08.svg")
          .col-12.col-lg-6
            p.mb-3.mb-lg-0 Productos forestales no maderables: importancia e impacto de su aprovechamiento.
          .col-6.col-lg-3
            a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo3.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Cadena productiva

    p.mb-4(data-aos="fade-left") La Cadena Productiva Forestal (CPF) tiene la función de consolidar la alianza entre los diversos eslabones del sector forestal, con el fin de obtener beneficios colectivos e individuales y mayor competitividad; esta debe contar con los siguientes eslabones:

    img.mb-5(src="@/assets/curso/tema2/img09.png" data-aos="fade-right")

    p.mb-4.text-center  Para conocer más sobre cada proceso y lo que implica, se le invita a revisar la siguiente figura: 

    .titulo-sexto.color-acento-contenido
      span Modelo de cadena productiva para producción maderera.

    .imagen-adornos-flotantes.mb-5(data-aos="fade-left")
      img(src='@/assets/curso/tema2/img10.svg')            
      .imagen-adornos-flotantes__img1.d-none.d-xl-block: img(src="@/assets/curso/tema2/hojita1.png" style="left: 22% ; top: 5%  ; width: 103px")        
      .imagen-adornos-flotantes__img2.d-none.d-xl-block: img(src="@/assets/curso/tema2/hojita2.png" style="left: ; right: 27% ; top: 40% ; bottom: ; width: 112px ")            
      .imagen-adornos-flotantes__img3.d-none.d-xl-block: img(src="@/assets/curso/tema2/hojita3.png" style="left: 20% ; right: ; top:  ; bottom: 20% ; width: 173px ")            

    p.mb-4.text-center(data-aos="fade-right") En la cadena productiva deben intervenir diferentes actores, los cuales se definen en la siguiente gráfica:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-8
        img(src='@/assets/curso/tema2/img11.svg')            

    p.mb-4(data-aos="fade-right") Todos los actores, los beneficiarios primarios de los recursos y los actores secundarios, como las autoridades, tienen la función de hacer esta actividad sostenible en el tiempo y evitar daños al medio ambiente.

    .row.justify-content-center.align-items-center.mb-4(style="background-color:#FFF7E3" data-aos="fade-left")
      .col-6.col-lg-4.p-0
        img(src='@/assets/curso/tema2/img12.png')            
      .col-12.col-lg-8.p-3
        p.mb-4 Hay un componente muy importante en el establecimiento de la cadena productiva y es la capacitación y formación de los actores primarios; en la medida en que se forme a los beneficiarios de los PFNM con técnicas de aprovechamiento, manejo de los productos, sistemas de empaque y transporte, el daño causado a los bosques será menor.
        p.mb-0 Las autoridades y responsables del manejo de los recursos naturales, como funcionarios públicos y actores sociales, deben legislar para que el aprovechamiento de los PFNM sea con mentalidad empresarial, no solo de sostenibilidad; esto permitirá que se obtengan mayores ingresos, lo que redundará en un manejo sostenible y una mejor calidad de vida de las personas que intervienen en la cadena productiva.

    p.mb-4(data-aos="fade-left") Como ejemplo de una cadena productiva, se estudiará el proceso de la guadua: esta es un bambú espinoso, perteneciente a la familia Poacecae, a la subfamilia Bambusoideae y a la tribu Bambuseae. En 1820, el botánico Kunth constituye este género utilizando el vocablo “guadua” con el que los indígenas de Colombia y Ecuador se referían a este bambú. 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-10
        .cajon.color-secundario.p-4.mb-5 
          p.mb-0 Este reúne aproximadamente 30 especies, se puede distinguir de los demás participantes por los tallos robustos y espinosos, por las bandas de pelos blancos en la región del nudo y por las hojas caulinares en forma triangular.

        p.mb-4.text-center La cadena de la guadua está compuesta principalmente por los siguientes eslabones: 

        .titulo-sexto.color-acento-contenido
          span Cadena productiva de la guadua.

        img(src='@/assets/curso/tema2/img13.png')            

    p.mb-4(data-aos="fade-left") En los diferentes eslabones de la cadena, intervienen los productores, los guadueros, los empresarios de preindustrialización, de secado y preservación, sociedades de ingenieros y arquitectos, artesanos, comercializadores, entre otros, según el ICA en Colombia.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-8
        .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
          .col-6.col-lg-3
            img(src="@/assets/curso/tema2/img07.svg")
          .col-12.col-lg-6
            p.mb-3.mb-lg-0 Para profundizar en la cadena productiva de la guadua en Colombia, se le invita a revisar el enlace .
          .col-12.col-lg-3.d-flex.justify-content-center
            a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo4.pdf')" target="_blank" type="application/pdf")
              span Descarga
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")

    p.mb-4(data-aos="fade-left") El aprovechamiento comercial de los PFNM provenientes de bosques debe seguir una lógica distinta a la de la empresa privada por diferentes razones, por lo que se le invita a revisar el siguiente recurso de aprendizaje:
    img.mb-5(src="@/assets/curso/tema2/img14.svg" data-aos="fade-right")

    p.mb-4(data-aos="fade-left") En contraste, la empresa privada aspira, por lo general, a maximizar sus ganancias netas. Por lo anterior, se hace necesario identificar los diferentes eslabones en la cadena productiva, los cuales se pueden observar en la siguiente figura: 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10
        .row.justify-content-center
          .col-xl-4.d-flex
            .degra1.p-3.py-4.mb-3.mb-xl-0.w-100
              div.px-5
                img.mb-3(src="@/assets/curso/tema2/img15.svg")
              p.mb-0.text-center Producción (producción de planta, mantenimiento y protección) y abastecimiento.
          .col-xl-4.d-flex
            .degra2.p-3.py-4.mb-3.mb-xl-0.w-100
              div.px-5
                img.mb-3(src="@/assets/curso/tema2/img16.svg")
              p.mb-0.text-center Producción, abastecimiento, transformación  y
          .col-xl-4.d-flex
            .degra3.p-3.py-4.w-100
              div.px-5
                img.mb-3(src="@/assets/curso/tema2/img17.svg")
              p.mb-0.text-center Producción, abastecimiento, transformación y comercialización. 

    p.mb-4.text-center(data-aos="fade-left") Se recomienda estudiar la siguiente figura para entender los eslabones de una cadena productiva:

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          span Componentes de la cadena productiva.
        figure 
          img.mb-3(src="@/assets/curso/tema2/img18.svg")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-xl-3.p-0
        img.mb-3(src="@/assets/curso/tema2/img19.png")
      .col-xl-9
        p.mb-3 Por otro lado, a medida que se le da mayor valor agregado al producto forestal, se generan mayores utilidades para los beneficiarios primarios. Por lo anterior, se reconoce que los productos forestales no maderables (PFNM) son importantes para el bienestar de muchas comunidades rurales y contribuyen a los procesos de conservación de los bosques tropicales. Como una aproximación al conocimiento del impacto ocasionado por su aprovechamiento, se deben tener en cuenta las consecuencias de esta actividad en diferentes niveles ecológicos, tales como:
        p.mb-0.px-4.py-1 <span style="color: #FFC846">●</span> El individuo, la población y los ecosistemas; además, 
        p.mb-3.px-4.py-1 <span style="color: #FFC846">●</span> Las formas y los efectos del aprovechamiento que conlleven a un uso y manejo sostenible de 
        p.mb-0 Siguiendo con el tema, se hace prioritario el estudio de estos productos de una manera sistémica, por lo que se debe ir más allá del contexto ecológico y biológico, donde se involucren los componentes sociales, económicos, culturales y políticos, logrando el desarrollo de modelos predictivos que garanticen el no deterioro de estos recursos.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-xl-10
        .bloque-texto-c.p-4(Style="background-color: #F6FAF0")
          i.fas.fa-quote-right
          h4.mb-2 En adición, los bosques tropicales, como el colombiano, en términos de diversidad ecosistémica, riqueza biológica, junto con la oferta de bienes y servicios ambientales, constituyen una parte esencial de los medios de subsistencia de las comunidades que allí habitan, tanto en aspectos de recolección como de consumo de productos vegetales naturales.
          span - Carpentier et al., 2000; Doble, 2003; Tocotín, 2005.

    p.mb-4(data-aos="fade-left") Partiendo de lo anterior, se hace necesario estudiar las perspectivas de aprovechamiento que hoy presentan los PFNM, las cuales pueden ocasionar su sobreutilización o sobreexplotación, conllevando una declinación de las poblaciones nativas, con fuertes implicaciones ecológicas y económicas, por lo que los autores Neumann y Kirsch (2000) documentan a partir de varios estudios de caso que, a medida que aumenta la presión sobre el recurso y el número de actores implicados en su comercialización, hay un desconocimiento de criterios para su aprovechamiento y manejo sobre una base sostenible. Para conocer más sobre el tema, se le invita a revisar los siguientes recursos de aprendizaje.

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-8
        .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
          .col-6.col-lg-3
            img(src="@/assets/curso/tema2/img07.svg")
          .col-12.col-lg-6
            p.mb-3.mb-lg-0 ¨Productos forestales no maderables: importancia e impacto de su aprovechamiento¨ en el siguiente enlace.
          .col-12.col-lg-3.d-flex.justify-content-center
            a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo5.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-8
        .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
          .col-6.col-lg-3
            img(src="@/assets/curso/tema2/img08.svg")
          .col-12.col-lg-6
            p.mb-3.mb-lg-0 Estrategia sectorial de la cadena de productos no maderables del bosque en Guaviare, con enfoque agroambiental y cero deforestación, en el siguiente enlace.
          .col-12.col-lg-3.d-flex.justify-content-center
            a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo6.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")


    p.mb-4(data-aos="fade-right") A continuación, se presenta un cuadro comparativo donde se ejemplifican dos productos forestales no maderables del bosque y cómo es su cadena productiva. Tenga en cuenta que el proceso en general es igual, sin embargo, el cliente final es diferente y el producto final va acorde con sus propios requerimientos e intereses.

    .row.justify-content-center.align-items-end.mb-5(data-aos="fade-left")
      .col-2
      .col-12.col-lg-8
        .tabla-b.color-acento-contenido.mb-lg-0.mb-3
          table        
            tr.tabla-b__header
              th(colspan=2) 
                h4.mb-0 Cadenas productivas de valor          
            tr
              td.border1    
                p.mb-2 <b>Tagua o marfil vegetal</b>
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span Ver imagen
                  .indicador--click(v-if="mostrarIndicador")
              td        
                p.mb-3 <b>Damagua</b>
                a.boton.color-acento-botones(@click="modal2 = true")
                  span Ver imagen                  
            tr
              td.border1    
                p.mb-1 Cadena de valor
                p.mb-0 ● Recolectores que distribuyen a artesanos de manera directa.
                p.mb-0 ● Recolectores que venden a un acopiador, quien distribuye a los artesanos.
              td    
                p.mb-1 Cadena de valor
                p.mb-0 ● Recolectores que distribuyen a artesanos de manera directa.
                p.mb-0 ● Recolectores que venden a un acopiador, quien distribuye a los artesanos.
            tr
              td.border1    
                p.mb-1 Actores
                p.mb-0 1- Recolectores
                p.mb-0 2- Acopiadores
                p.mb-0 3- Artesanos
              td    
                p.mb-1 Actores
                p.mb-0 1- Recolectores
                p.mb-0 2- Acopiadores
                p.mb-0 3- Artesanos
            tr
              td.border1    
                p.mb-0 Sector empresarial demandante
                p.mb-0 Mercado de artesanías y manufacturas.
              td    
                p.mb-0 Sector empresarial demandante
                p.mb-0 Mercado de artesanías y manufacturas.

            tr
              td.border1    
                p.mb-0 Productos
                p.mb-0 Collares, anillos, botones, etc.
              td    
                p.mb-0 Gorros, bolsos, billeteras individuales, flores, correas, zapatos y collares, entre otros.
      


        ModalA(:abrir-modal.sync="modal1")  
          img(src="@/assets/curso/tema2/img20.png")

        ModalA(:abrir-modal.sync="modal2")  
          figure
            img(src="@/assets/curso/tema2/img21.png")
            figcaption Fuente: Imagen tomada de Escuela taller naranja. 
      
      .col-6.col-lg-2
        img(src="@/assets/curso/tema2/img43.svg")
    .fondo1.mb-4
      Separador.
      #t_2_3.titulo-segundo.color-acento-contenido
        h2 2.3. Recursos:  Materiales e insumos

      p.mb-5(data-aos="fade-left") Parte importante de los productos forestales no maderables son recursos, por lo que a continuación se mencionan algunos materiales e insumos de los PFNM. Se pueden dividir en recursos básicos u origen de donde se pueden obtener los productos finales. A continuación se presenta un recurso de aprendizaje que sintetiza algunos de ellos:

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-12.col-lg-8
          .tabla-b.color-acento-contenido
            table        
              tr.tabla-b__header.p-0
                th.p-2(colspan=3 style="height: 10px !important")      
              tr
                td.border1           
                  p.mb-0.text-center <b>Árboles</b>
                td.border1       
                  p.mb-0.text-center <b>Arbustos</b>
                td             
                  p.mb-0.text-center <b>Lianas</b>
              tr
                td.border1           
                  p.mb-0.text-center <b>Bambú</b>
                td.border1       
                  p.mb-0.text-center <b>Palmas</b>
                td             
                  p.mb-0.text-center <b>Hongos</b>
              tr
                td.border1           
                  p.mb-0.text-center <b>Raíces</b>
                td.border1       
                  p.mb-0.text-center <b>Tallos</b>
                td             
                  p.mb-0.text-center <b>Hojas</b>
              tr
                td.border1           
                  p.mb-0.text-center <b>Flores</b>
                td.border1       
                  p.mb-0.text-center <b>Frutos</b>
                td             
                  p.mb-0.text-center <b>Semillas</b>
              tr
                td.border1           
                  p.mb-0.text-center <b>Molienda</b>
                td.border1       
                  p.mb-0.text-center <b>Picado y pelado</b>
                td             
                  p.mb-0.text-center <b>Chancado</b>

      p.mb-0 Por otro lado, entre los productos no maderables que se obtiene del bosque en forma directa o indirecta (transformación), se encuentran los que se mencionan en la siguiente tabla, los cuales cumplen diferentes funciones para la comunidad y los actores que los usan al final de la producción, entre ellos están: 
      
    .row.justify-content-center.mb-5.align-items-end(data-aos="fade-left")
        .col-6.col-lg-2
          img.mb-3.mb-lg-0(src="@/assets/curso/tema2/img23.svg")
        .col-12.col-lg-8
          .tabla-b.color-acento-contenido
            table        
              tr.tabla-b__header.p-0
                th.p-2(colspan=3 style="height: 10px !important")      
              tr(style="background-color: white !important")
                td.border1           
                  p.mb-0.text-center <b>Limpieza </b>
                td.border1       
                  p.mb-0.text-center <b>Artesanías</b>
                td             
                  p.mb-0.text-center <b>Exudados</b>
              tr(style="background-color: #F0F0F0 !important")
                td.border1           
                  p.mb-0.text-center <b>Clasificación</b>
                td.border1       
                  p.mb-0.text-center <b>Especias</b>
                td             
                  p.mb-0.text-center <b>Aceites esenciales</b>
              tr(style="background-color: white !important")
                td.border1           
                  p.mb-0.text-center <b>Conservación</b>
                td.border1       
                  p.mb-0.text-center <b>Materiales de construcción</b>
                td             
                  p.mb-0.text-center <b>Forraje</b>
              tr(style="background-color: #F0F0F0 !important")
                td.border1           
                  p.mb-0.text-center <b>Envasado</b>
                td.border1       
                  p.mb-0.text-center <b>Colorantes</b>
                td             
                  p.mb-0.text-center <b>Envoltura para alimentos</b>
              tr(style="background-color: white !important")
                td.border1           
                  p.mb-0.text-center <b>Alimentos y bebidas</b>
                td.border1       
                  p.mb-0.text-center <b>Insecticidas</b>
                td             
                  p.mb-0.text-center <b>Artículos de limpieza</b>
              tr(style="background-color: #F0F0F0 !important")
                td.border1           
                  p.mb-0.text-center <b>Medicinales </b>
                td.border1       
                  p.mb-0.text-center <b>Recursos ornamentales </b>
                td             
                  p.mb-0.text-center <b>Material de trabajo</b>
        .col-2

    p.mb-4(data-aos="fade-right") En adición, se hace necesario aclarar que los productos forestales no maderables del bosque son los que provienen de otras partes de los bosques, por lo que no son por la tala de árboles. Entre estos últimos, estarían: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-right")  
      .slyderf.p-0.mb-0
        img(src='@/assets/curso/tema2/img24.png')     
        p.my-2.text-center <b>Semillas</b>
      .slyderf.p-0.mb-0
        img(src='@/assets/curso/tema2/img25.png')        
        p.my-2.text-center <b>Hojas</b>
      .slyderf.p-0.mb-0
        img(src='@/assets/curso/tema2/img26.png')        
        p.my-2.text-center <b>Hongos</b>
      .slyderf.p-0.mb-0
        img(src='@/assets/curso/tema2/img27.png')        
        p.my-2.text-center <b>Fibras</b>
      .slyderf.p-0.mb-0
        img(src='@/assets/curso/tema2/img28.png')        
        p.my-2.text-center <b>Frutos</b>
      .slyderf.p-0.mb-0
        img(src='@/assets/curso/tema2/img29.png')        
        p.my-2.text-center <b>Miel de abejas</b>

    .cajon.color-acento-botones.p-4.px-3.mb-5 
      p.mb-0 Se le invita a revisar el siguiente recurso de aprendizaje, donde encontrará otros productos no maderables de los bosques que están siendo usados con diferentes fines:

    .titulo-sexto.color-acento-contenido
      span Insumos.

    SlyderB.mb-5(:datos="datosSlyder1" data-aos="fade-left")

    .row.justify-content-center(data-aos="fade-right")
      .col-12.col-lg-10.p-0
        .tarjeta.degra4.p-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-10.px-0
                .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
                  .col-6.col-lg-2
                    img(src="@/assets/curso/tema2/img08.svg")
                  .col-12.col-lg-7
                    p.mb-3.mb-lg-0 Productos forestales no maderables: importancia e impacto de su aprovechamiento, en el siguiente enlace.
                  .col-12.d-flex.justify-content-center
                    a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo7.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")
            .row.justify-content-center
              .col-10.px-0
                .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
                  .col-6.col-lg-2
                    img(src="@/assets/curso/tema2/img07.svg")
                  .col-12.col-lg-7
                    p.mb-3.mb-lg-0 Productos forestales no maderables asociados a bosques de roble, en el siguiente enlace.
                  .col-12.d-flex.justify-content-center
                    a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo8.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")
            .row.justify-content-center
              .col-10.px-0
                .row.justify-content-center.align-items-center.py-3(Style="background-color: #FFF7E3")
                  .col-6.col-lg-2
                    img(src="@/assets/curso/tema2/img35.svg")
                  .col-12.col-lg-7
                    p.mb-3.mb-lg-0 Manejo forestal comunitario.  Productos forestales no maderables y los artesanos de San Antonio de Yurumanguí, Colombia, en el siguiente enlace.
                  .col-12.d-flex.justify-content-center
                    a.boton.color-acento-botones.me-0(:href="obtenerLink('downloads/anexo9.pdf')" target="_blank" type="application/pdf")
                      span Descargar
                      i.fas.fa-link.p-1(style="background-color:#FFFFFF; color: #942E19")

    Separador
    
    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4. Insumos como productos forestales no maderables del bosque

    p.mb-5(data-aos="fade-left") Los productos forestales no maderables del bosque son recolectados en varias regiones de Colombia con el fin de usarlos de forma natural, en infusiones, o transformarlos para que cumplan una función específica en las comunidades. A continuación, se muestran algunos de ellos en el siguiente recurso de aprendizaje.
    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/tema2/img36.png")              

          .tarjeta.p-3(style="background-color: #F6E8E4" x="53.3%" y="23%" numero="")
            p.mb-0 Formada a partir de la cicatrización de las acacias, es una sustancia que se utiliza en alimentos como chicles, gomas, pasteles y vinos, o en herramientas como tintes o pegamentos.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="59%" y="30%" numero="")
            p.mb-0 Es un producto sacado de la corteza del Alcornoque. Su elasticidad y permeabilidad le dan una vida útil que se evidencia desde las empresas para tapones de vinos hasta de moda y diseño.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="62%" y="42%" numero="")
            p.mb-0 Obtenido de la savia de varias plantas, se utiliza en todas las áreas de diseño, incluyendo la fabricación de llantas para carros.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="62%" y="55%" numero="")
            p.mb-0 El famoso elemento utilizado en los anticonceptivos masculinos o los guantes de cirugía, se adquiere de las grasas, ceras y diversas resinas gomosas de diferentes plantas.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="59%" y="66.5%" numero="")
            p.mb-0 Es una sustancia producida por el hongo <i>Penicillium notatum</i>, utilizada en casi todos los antibióticos humanos, gracias a su eficiente manejo en la eliminación de bacterias.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="53.3%" y="73%" numero="")
            p.mb-0 Los pobladores consumen como alimento productos de origen animal (polen y miel de abejas), hongos silvestres y órganos vegetales como: tallos, hojas, frutos y semillas. El 38,9% de los alimentos de origen forestal se ingiere de forma directa y el 33,3% como ingredientes de comidas tradicionales. El 16,7% de las bebidas son preparados en infusión y el 11,1% en jugos.           
          .tarjeta.p-3(style="background-color: #F6E8E4" x="46.9%" y="73%" numero="")
            p.mb-0 Se emplean hojas de epífitas del género <i>Anthurium</i>, usadas para envolver y conservar los alimentos, entre ellos los denominados popularmente como “envuelto”, preparados a base de maíz o choclo.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="41.2%" y="67%" numero="")
            p.mb-0 Las plantas con agradables fragancias, son usadas en la cocina tradicional para dar aroma a las coladas o para tomar en infusión. Se conoció el uso de Congonilla (<i>Peperomia coquimbensis</i>) y Granizo (<i>Hedyosmum bonplandianum</i>), para aromatizar las bebidas.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="37.7%" y="55%" numero="")
            p.mb-0 Los pobladores utilizan las hojas de Aliso (<i>Alnus acuminata)</i> para alimentar al ganado. La especie habita en potreros adyacentes a los bosques estudiados.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="37.9%" y="42%" numero="")
            p.mb-0 Guambía (<i>Spigelia peduncu-lata</i>), es la planta conocida en la zona para eliminar hongos e insectos, y evitar su aparición y proliferación en cultivos agrícolas.
          .tarjeta.p-3(style="background-color: #F6E8E4" x="41.2%" y="30%" numero="")
            p.mb-0 Se emplean fustes de Helecho Arbóreo (<i>Cyathea sp.</i>), hojas de Palma de Cera (<i>Ceroxylon quindiuense</i>) y bejucos, como materia prima en la construcción de pequeños estaderos para el ganado.
          .tarjeta.p-3(style="background-color: #F6E8E4; width: 350px" x="46.7%" y="23%" numero="")
            p.mb-0 Se encontraron 40 productos usados para elaborar medicamentos o realizar rituales de sanación, de los cuales 2 son de origen animal (<i>propóleo y miel de abejas</i>) y el restante de origen vegetal, principalmente especies herbáceas como: Altamisa Grande (<i>Ambrosia arborescens</i>), Árnica de Páramo (<i>Senecio formosus</i>), Cola de Caballo (<i>Equisetum bogotense</i>), Cuasia (<i>Quassia amara</i>), Hineldo (<i>Anethum graveolens</i>), Orozuz (<i>Lippia dulcis</i>), Palo de Cruz (<i>Brownea ariza</i>), Ruda Castilla (<i>Ruta graveolens</i>), Poleo Grande (<i>Minthostachys tomento-sa</i>), Pronto Alivio (<i>Lippia alba</i>), Sauco (<i>Sambucus sp.</i>), entre otras.

    p.mb-4 Por otro lado, es vital hablar en este componente sobre los materiales de los productos forestales no maderables del bosque que son más usados actualmente, por lo tanto, se le invita a revisar la siguiente figura:

    .row.justify-content-center(data-aos="fade-left")
        .col-lg-10.ps-5.ps-lg-0
          ul.lista-ul--color.lista-ul--separador.position-relative
            li.d-flex.align-items-center 
            li.d-flex.align-items-center 
              img(style="width:63px" src="@/assets/curso/tema2/img37.svg")
              p.mb-0 <b>Plantas y derivados naturales:</b> se usan plantas para arreglos ornamentales, para hacer artesanías y utensilios, además, se utilizan para hacer cuerdas y material para envolver. Por otro lado, se utilizan los tallos para masticar, hojarascas para la cama en la cría de animales o para el cultivo de otros productos, y finalmente la tierra.
            li.d-flex.align-items-center 
              img(style="width:63px" src="@/assets/curso/tema2/img38.svg")
              p.mb-0 <b>Servicios ambientales:</b>  para la protección de la biodiversidad, de los suelos, con el fin de cuidar la calidad y cantidad del agua y para evitar los efectos climáticos.
            li.d-flex.align-items-center  
              img(style="width:63px" src="@/assets/curso/tema2/img39.svg")
              p.mb-0 <b>Servicios sociales y culturales:</b> se utilizan en recreación, para el consumo (pesca y caza), se tienen en cuenta por su importancia histórica y ritual de las comunidades y para fomentar el valor cultural y patrimonial.
            li.d-flex.align-items-center  
              img(style="width:63px" src="@/assets/curso/tema2/img40.svg")
              p.mb-0 <b>Los PFNM son usados en:</b> alimentos y aditivos alimentarios para humanos y algunos para animales, para la elaboración de fibras y sedas,  para hacer fertilizantes y biomasa. También son usados en los productos fotoquímicos y químicos,  así como para hacer aromatizar varios elementos. En la investigación, se encontró el uso en aceites, para la elaboración de látex,  resinas y otros exudados. Adicionalmente, los materiales orgánicos se usan para la construcción  o para hacer artículos decorativos y otros productos  para el uso animal.
            
    Separador 

    #t_2_5.titulo-segundo.color-acento-contenido
      h2 2.5. Manejo de residuos no maderables del bosque

    .row.justify-content-center.align-items-center.mb-4(style="background-color: #F6FAF0" data-aos="fade-right")
      .col-lg-8.ps-5.p-3
        p.mb-4 Sobre el manejo de los residuos no maderables del bosque no existen estudios, en especial porque estas actividades las ejercen las poblaciones que viven del aprovechamiento forestal de estos productos y generalmente estas tareas se realizan de forma individual, nunca como empresa, por lo cual, no se cuenta con registros sobre las partes no utilizadas en el aprovechamiento de los PFNM. La siguiente información corresponde a los residuos forestales que ocasionan la explotación de los bosques bajo el esquema de tala de árboles.
        p.mb-0 El manejo de los residuos no maderables del bosque, especialmente de los residuos del aprovechamiento de los productos no maderables, es mínimo, porque su recolección es selectiva; se puede asegurar que se hace planta por planta, por lo que no es un aprovechamiento sistemático ni mecanizado, así que los desperdicios son mínimos.
      .col-lg-4.p-0
        img(src="@/assets/curso/tema2/img41.png")

    p.mb-4(data-aos="fade-left") Teniendo en cuenta lo anterior, se hace necesario revisar el uso principal de la tierra, porque los bosques realizan diferentes funciones: 

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-6.col-lg-2.p-0
        img.mb-3.mb-lg-0(src="@/assets/curso/tema2/img42.svg")
      .col-12.col-lg-10
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Producción
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Protección (suelos y recursos hídricos)
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Conservación de la diversidad biológica 
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Provisión de servicios sociales (actividades recreativas)
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Turismo
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Educación
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Investigación y/o 
        p.mb-0.px-4.py-0 <span style="color: #942E19">●</span> Conservación de centros de importancia cultural/espiritual) o
        p.mb-4.px-4.py-0 <span style="color: #942E19">●</span> Usos múltiples.  

        .cajon.color-acento-contenido.p-4.px-5.mx-4 
          p.mb-0 Los bosques de producción son destinados para la obtención de productos de madera, fibras, bioenergía y/u otros productos forestales no madereros.  De acuerdo con sus características, los bosques de producción pueden ser primarios, implantados, de regeneración natural o de regeneración con especies introducidas. 

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Alimentos de origen vegetal',
        texto:
          'Entre los alimentos de origen vegetal no maderables, se tiene:<br><br>Flores, cortezas, bulbos, raíces, nueces, hojas, verduras, forrajes, brotes, frutas, semillas, especias y saborizantes.',
        imagen: require('@/assets/curso/tema2/img30.png'),
      },
      {
        titulo: 'Alimentos de origen animal',
        texto:
          'Por otro lado, entre los que se consumen de origen animal, se encuentran: carne de animales del bosque, miel, huevos, insectos, nidos, peces, caracoles, etc.',
        imagen: require('@/assets/curso/tema2/img31.png'),
      },
      {
        titulo: 'Productos medicinales y otros bioactivos',
        texto:
          'Durante mucho tiempo, se han venido utilizando productos no maderables del bosque para preparar medicamentos y otros elementos, entre estos se tienen productos medicinales, como el castaño de indias o la marihuana, insecticidas con hojas de plantas, toxinas y estimulantes.',
        imagen: require('@/assets/curso/tema2/img32.png'),
      },
      {
        titulo: 'Extractos',
        texto:
          'También se encuentra en los bosques la resina, la cual es un producto no maderable que se extrae de los árboles; de igual forma, se encuentran: gomas, látex, aceites fijos y esenciales, colorantes, taninos, lacas y ceras.',
        imagen: require('@/assets/curso/tema2/img33.png'),
      },
      {
        titulo: 'Productos de otros animales y derivados',
        texto:
          'Finalmente, se encuentran en los bosques otros animales y sus derivados, como son: el uso de plumas, pieles, cuernos, dientes, cuero, seda, trofeos y estiércoles, entre otros.',
        imagen: require('@/assets/curso/tema2/img34.png'),
      },
    ],
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
.tema2
  .slyderf
    background-color: #E5EFD4 !important
    border-radius: 20px
    border: 1px solid white !important

  .border1
    border-right: 1px solid #707070 !important

  .lista-ol--separador li, .lista-ul--separador li
    border-bottom: solid 2px #AFAFAF;
    img
      position: relative
      left: -30px

  .degra4
    background: rgba(246,250,240,1);
    background: -moz-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(255,255,255,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(246,250,240,1)), color-stop(100%, rgba(255,255,255,1)));
    background: -webkit-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(255,255,255,1) 100%);
    background: -o-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(255,255,255,1) 100%);
    background: -ms-linear-gradient(top, rgba(246,250,240,1) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(to bottom, rgba(246,250,240,1) 0%, rgba(255,255,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f6faf0', endColorstr='#ffffff', GradientType=0 );

  .fondo1
    .separador-container
      padding-top: 0px
    position: relative
    padding-bottom: 1rem
    p, div
      position: relative
    &::before
      content: ""
      position: absolute
      top: 0
      left: 2.5%
      width: 134%
      height: 100%
      margin: 0 -5rem
      background-image: url("../assets/curso/tema2/img22.png")
      // background-size: contain
      background-repeat: no-repeat

  .modal-a__content
    background-color: #E4ECD6;
  .modal-a__close-btn
    background-color: #942E19;
    border-radius: 6px
    color: white

  .degra1
    border-radius: 20px
    background: rgba(255,240,204,1);
    background: -moz-linear-gradient(45deg, rgba(255,240,204,1) 0%, rgba(255,250,238,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(255,240,204,1)), color-stop(100%, rgba(255,250,238,1)));
    background: -webkit-linear-gradient(45deg, rgba(255,240,204,1) 0%, rgba(255,250,238,1) 100%);
    background: -o-linear-gradient(45deg, rgba(255,240,204,1) 0%, rgba(255,250,238,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(255,240,204,1) 0%, rgba(255,250,238,1) 100%);
    background: linear-gradient(45deg, rgba(255,240,204,1) 0%, rgba(255,250,238,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff0cc', endColorstr='#fffaee', GradientType=1 );
    transition: transform  0.5s;
    &:hover
      cursor: pointer;
      filter: saturate(200%);
      transform: scale(1.10);
  .degra2
    border-radius: 20px
    background: rgba(229,239,212,1);
    background: -moz-linear-gradient(45deg, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(229,239,212,1)), color-stop(100%, rgba(246,250,240,1)));
    background: -webkit-linear-gradient(45deg, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
    background: -o-linear-gradient(45deg, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
    background: linear-gradient(45deg, rgba(229,239,212,1) 0%, rgba(246,250,240,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e5efd4', endColorstr='#f6faf0', GradientType=1 );
    transition: transform  0.5s;
    &:hover
      cursor: pointer;
      filter: saturate(200%);
      transform: scale(1.10);
  .degra3
    border-radius: 20px
    background: rgba(228,226,226,1);
    background: -moz-linear-gradient(45deg, rgba(228,226,226,1) 0%, rgba(255,255,255,1) 100%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(228,226,226,1)), color-stop(100%, rgba(255,255,255,1)));
    background: -webkit-linear-gradient(45deg, rgba(228,226,226,1) 0%, rgba(255,255,255,1) 100%);
    background: -o-linear-gradient(45deg, rgba(228,226,226,1) 0%, rgba(255,255,255,1) 100%);
    background: -ms-linear-gradient(45deg, rgba(228,226,226,1) 0%, rgba(255,255,255,1) 100%);
    background: linear-gradient(45deg, rgba(228,226,226,1) 0%, rgba(255,255,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4e2e2', endColorstr='#ffffff', GradientType=1 );
    transition: transform  0.5s;
    &:hover
      cursor: pointer;
      filter: saturate(200%);
      transform: scale(1.10);
  .imagen-adornos-flotantes
    position: relative
    &__img1
      img
        position: absolute
        z-index: 1000
        animation: float 6s ease-in-out infinite alternate
    &__img2
      img
        position: absolute
        z-index: 1000
        animation: float 8s ease-in-out infinite alternate
    &__img3
      img
        position: absolute
        z-index: 1000
        animation: float 10s ease-in-out infinite alternate

  @keyframes float
    0%
      transform: translateY(150px)

    100%
      transform: translateY(0px)
</style>
