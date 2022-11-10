export default {
  global: {
    componenteFormativo: 'La organización y su naturaleza',
    descripcionCurso:
      'Este componente se centra en identificar los procesos administrativos, planeación estratégica, sus características y elementos en la organización. Asimismo, conceptos y normativas de responsabilidad social, desarrollo sostenible, identificación de partes interesadas para la organización y técnicas de diagnóstico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
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
        titulo: 'Procesos administrativos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Responsabilidad social empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Partes interesadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desarrollo sostenible',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Diagnóstico y técnicas de recolección organizacional',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
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
  complementario: [
    {
      tema: 'Procesos administrativos',
      referencia:
        '<em>Lifeder Education. </em> (2022) ¿Qué es el Proceso Administrativo y cuáles son sus etapas? [Video]. YouTube. ',
      tipo: 'Video      ',
      link: 'https://www.youtube.com/watch?v=QqcjI-zZyb8',
    },
    {
      tema: 'Responsabilidad Social Empresarial',
      referencia:
        '<em>Lifeder Education.</em> (2021) ¿Qué es la Responsabilidad Social? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L7SDdGAImsA',
    },
    {
      tema: 'Responsabilidad Social Empresarial',
      referencia:
        'Pérez, M.,  Espinoza, C. y Peralta, B. (2016). La responsabilidad social empresarial y su enfoque ambiental: una visión sostenible a futuro. Revista Universidad y Sociedad, 8(3), p. 169-178. ',
      tipo: 'Artículo',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2218-36202016000300023&lng=es&tlng=es',
    },
    {
      tema: 'Partes interesadas',
      referencia:
        'Lteam Training. (2016). Partes Interesadas <em>Stakeholders</em> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AtaIAZEu0c',
    },
    {
      tema: 'Desarrollo sostenible',
      referencia:
        'KanelaMental. (2021). El Desarrollo Sostenible y sus pilares fundamentales [Video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OZlUTG07XFQ',
    },
    {
      tema: 'Diagnóstico y técnicas de recolección organizacional',
      referencia:
        'Lifeder Education. (2022) ¿Qué es el Diagnóstico organizacional y para qué sirve? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SnJz_2__fC0',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado:
        'rivales a nivel de empresa. Investigar sobre quiénes son la competencia permitirá la identificación de amenazas y tener una estrategia para la reacción a dicha amenaza.',
    },
    {
      termino: 'Control',
      significado:
        'consiste en que la organización mida los resultados de cómo se hicieron las actividades planteadas y efectuadas, con el objetivo de generar mejoras continuas.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'recoge y analiza la información o datos para tomar decisiones frente a diferentes problemas de la organización.',
    },
    {
      termino: 'Dirección',
      significado:
        'consiste en que la organización verifique que se hagan las actividades o tareas propuestas para el logro de los objetivos, mediante el liderazgo, la motivación y la comunicación de los involucrados.',
    },
    {
      termino: 'Estrategia',
      significado:
        'es un proceso que busca dirigir o trazar un objetivo propuesto.',
    },
    {
      termino: 'Indicador',
      significado:
        'brinda la información cualitativa o cuantitativa conformada por varios datos.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'son las habilidades para dirigir, acompañar a un equipo de personas o trabajo.',
    },
    {
      termino: 'Organización',
      significado:
        'grupo de personas que se asocian para desarrollar una actividad económica y utilizar diversos recursos para lograr objetivos o metas.',
    },
    {
      termino: 'Planeación',
      significado:
        'consiste en que la organización determine qué se va a hacer, de forma anticipada, para lograr los objetivos propuestos de manera eficiente.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'gestionar los recursos para satisfacer las necesidades actuales, sin poner en riesgo las necesidades futuras.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'son el público de interés que se relaciona con las actividades y decisiones de una organización.',
    },
    {
      termino: 'Valores',
      significado:
        'son aquellos principios, normas o creencias que caracterizan una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Benavides, C. (2016). Definiendo las partes interesadas en ISO 9001:2015. Calidad para Pymes.  ',
      link:
        'https://calidadparapymes.com/definiendo-las-partes-interesadas-en-iso-90012015/',
    },
    {
      referencia:
        'Business at Speed. (2018). ¿Qué indicadores miden la sostenibilidad de tu empresa? PHC <em> Software.</em> ',
      link:
        'https://phcsoftware.pe/business-at-speed/indicadores-sostenibilidad-empresa/',
    },
    {
      referencia:
        'Calvo, E. (s. f.). Influencia de <em> Stakeholders</em> en el Proyecto. BSG Institute.  ',
      link:
        'https://bsginstitute.com/bs-campus/blog/influencia-de-stakeholders-en-el-proyecto-69',
    },
    {
      referencia:
        'Conexión ESAN. (2016)¿Qué es el mapa de procesos de la organización?. ESAN Graduate School of Business.  ',
      link:
        'https://www.esan.edu.pe/conexion-esan/que-es-el-mapa-de-procesos-de-la-organizacion',
    },
    {
      referencia:
        'Duque, Y., Cardona, M. y Rendón, J. (2014). Responsabilidad Social Empresarial: Teorías, índices, estándares y certificaciones. Cuadernos de administración, 29(50), p. 196–206. ',
      link:
        'https://www.academia.edu/71951475/Responsabilidad_Social_Empresarial_Teor%C3%ADas_%C3%ADndices_est%C3%A1ndares_y_certificaciones',
    },
    {
      referencia:
        'Editorial Grudemi. (2018). Organización. Enciclopedia Económica.  ',
      link: 'https://enciclopediaeconomica.com/organizacion/',
    },
    {
      referencia:
        'Enciclopedia Concepto. (s. f.). Proceso administrativo. Concepto ',
      link: 'https://concepto.de/proceso-administrativo/',
    },
    {
      referencia:
        'ISOTools. (2016). Mapa de procesos según la nueva ISO 9001 2015.  ',
      link:
        'https://www.isotools.org/2016/05/11/mapa-procesos-nueva-iso-9001-2015/',
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
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'May Stefanny González Verjel',
        cargo: 'Experta Temática',
        centro:
          'Centro de Industria, Empresa y Servicios Regionales - Regional Norte de Santander ',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora Instruccional',
        centro: ' Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: ' Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo ',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital  ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
