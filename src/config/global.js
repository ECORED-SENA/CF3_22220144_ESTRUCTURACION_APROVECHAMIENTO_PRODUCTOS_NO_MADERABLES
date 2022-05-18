export default {
  global: {
    componenteFormativo:
      'Pautas para crear una propuesta de aprovechamiento según normatividad vigente.',
    descripcionCurso:
      'La biodiversidad es muy importante, ya que constituye una gran variedad de servicios ambientales de los cuales dependen muchas comunidades, pues proporcionan bienes para necesidades básicas, como son: alimentos, elementos para la industria en general, productos para rituales, venenos y medicinas, entre otros; pero todo esto se viene regulando bajo criterios técnicos y de sostenibilidad ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Requisitos normativos y de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manufactura de productos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de producto y métodos de embalaje ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Reglamentos y normatividad aplicada a productos no maderables del bosque ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Licencias y permisos  ',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Requisitos normativos y de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Logística de producción',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cadena productiva',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Recursos:  Materiales e insumos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Insumos como productos forestales no maderables del bosque',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Manejo de residuos no maderables del bosque',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Requisitos normativos y de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Legislación ambiental y requerimientos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aprovechamientos de recursos naturales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Impactos ambientales',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Normatividad internacional de sistemas de gestión de ambientes aplicables',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Sinchi. (s. f.). Asoprocegua. Negocios Amazónicos.',
      link: 'https://sinchi.org.co/negocios/asoprocegua',
    },
    {
      referencia:
        'Ley 165 de 1994. [Ministerio de Ambiente y Desarrollo Sostenible]. Convenio de las Naciones Unidas sobre diversidad biológica.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/12/Ley_165_de_1994_Convenio_Diversidad_Biologica.pdf',
    },
    {
      referencia:
        'López, R. (2008). Productos forestales no maderables: Importancia e impacto de su aprovechamiento. Revista Colombiana Forestal, 11, p. 215-231.',
      link: 'http://www.scielo.org.co/pdf/cofo/v11n1/v11n1a14.pdf',
    },
    {
      referencia:
        'Potosí-Gutiérrez, A., Villalba-Malaver, J. y Arboleda-Pino, L. (2017). Productos forestales no maderables asociados a bosques de roble Quercus humboldtii Bonpl en La Vega, Cauca. Biotecnología en el Sector Agropecuario y Agroindustrial, 15(2), p. 22-29.',
      link: 'http://www.scielo.org.co/pdf/bsaa/v15n2/v15n2a03.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Factores ambientales',
      significado:
        'Un factor ambiental, factor ecológico o eco factor es cualquier factor, abiótico o biótico, que influye en los organismos vivos.  Los factores abióticos incluyen la temperatura ambiente, la cantidad de luz solar y el pH del agua del suelo en el que vive un organismo.',
    },
    {
      termino: 'Manejo sostenible',
      significado:
        'Planificación y ejecución de prácticas sostenibles para el manejo, uso y aprovechamiento de la flora silvestre y de los productos forestales no maderables, que, salvaguardando el equilibrio de los ecosistemas y sus funciones, permitan mejorar la producción de bienes y servicios, apoyadas en la evaluación de su estructura, características intrínsecas y potencial, respetando los usos tradicionales y el valor cultural.',
    },
    {
      termino: 'Producción forestal',
      significado:
        'Proceso en el cual se realiza la preparación y/o acondicionamiento del área de siembra, selección y plantación de semillas, plántulas y árboles, según las necesidades del cultivo, de igual manera, la construcción o adecuación del ambiente de propagación, preparación de sustrato, siembra para enraizamiento.',
    },
    {
      termino:
        'Protocolo para el manejo sostenible de la flora silvestre y de los productos forestales no maderables',
      significado:
        'Documento técnico que contiene los lineamientos para el manejo sostenible de la flora silvestre y de los productos forestales no maderables.',
    },
  ],
  complementario: [
    {
      texto:
        'Instituto Sinchi. (2021). Productos forestales no maderables y cadena de valor [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iUCQcVPjf7k',
    },
    {
      texto:
        'Visión Amazonía. (2021). Aprovechamiento sostenible de productos no maderables del bosque [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=va__ApRQdI0',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
