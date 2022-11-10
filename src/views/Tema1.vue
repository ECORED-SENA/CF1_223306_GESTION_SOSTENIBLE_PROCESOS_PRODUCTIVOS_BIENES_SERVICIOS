<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Procesos administrativos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(data-aos='zoom-in')(src='@/assets/curso/temas/tema1/1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .cajon-b-editado
          .cajon-b.color-acento-contenido.p-3.mb-5.arriba-derecha
            p.mb-0 Los procesos administrativos están compuestos por una serie de actividades o funciones administrativas que buscan aprovechar al máximo los recursos que tiene una organización y lograr los objetivos trazados de manera eficaz. La importancia de implementar un proceso administrativo en la dirección de una organización permite establecer una ruta a seguir mediante diferentes actividades en periodos determinados, con el fin de alcanzar los objetivos propuestos en la organización; de esta manera, incrementar la eficiencia, para lograr las metas propuestas.
    .margin-n(style='background-color: #FFF9ED').p-5.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-8 
          h5.mb-4 Las principales ventajas que es posible destacar de los procesos administrativos son las siguientes:
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Información actualizada del cumplimiento de objetivos, permitiendo realizar proyecciones futuras.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Permiten tomar decisiones frente a los diferentes escenarios posibles.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Plantear objetivos en la organización a corto, medio y/o largo plazo.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Optimizar los recursos mejorando la eficiencia.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Evitar incurrir en gastos innecesarios que no se contemplaban inicialmente.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Se incrementa la productividad, mejorando el trabajo en equipo.
        .col-lg-4.col-8: img(data-aos='zoom-in')(src='@/assets/curso/temas/tema1/2.svg', alt='')
    p.mb-5(data-aos='fade-right') Por último, cuando se implementa un proceso administrativo, este permite evitar que se presenten dificultades en los esquemas de la dirección de la organización; en consecuencia, esto ayuda a reducir el número de medidas a tomar para el funcionamiento de la organización.
    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4(data-aos="fade-right")
      h4.mb-0 Etapas del proceso administrativo
    p.mb-5(data-aos='fade-right') El proceso administrativo está compuesto por cuatro etapas: planificación, organización, dirección y control. Las cuales, a su vez, están organizadas en dos fases:
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-5.mb-lg-0.mb-5
        .tarjetas-icono-up
          .tarjetas-icono-up__icono(style='background-color: #F0BD51')
            .icono
              img(src='@/assets/curso/temas/tema1/3.svg', alt='')
          .tarjetas-icono-up__contenido(style='background-color: #FDF5E5').p-4.h-100
            h5.mb-0 Fase mecánica
            p.mb-0 Es la parte estática del proceso y está conformada por las etapas de planificación y organización. 
      .col-lg-5
        .tarjetas-icono-up
          .tarjetas-icono-up__icono(style='background-color: #EF8B53')
            .icono
              img(src='@/assets/curso/temas/tema1/4.svg', alt='')
          .tarjetas-icono-up__contenido(style='background-color: #F7E9E1').p-4.h-100
            h5.mb-0 Fase dinámica
            p.mb-0 Esta hace referencia al movimiento y está conformada por la dirección y el control.
    p.mb-5(data-aos='fade-right') Amplíe la información sobre cada una de estas etapas:
    .row.justify-content-center.mb-5
      .col-lg-10
        .imagen-info-mod
          ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/5.svg', alt='Texto que describa la imagen')
            .tarjeta.rounded-0.p-3(x="19%" y="40%" numero="" style='background-color: #F6F6F6')
              img(src='@/assets/curso/temas/tema1/6.svg', alt='' style='width: 82px')
              h5 03. Dirección
              p Consiste en que la organización verifique que se hagan las actividades o tareas propuestas para el logro de los objetivos, mediante el liderazgo, la motivación y la comunicación de los involucrados.
            .tarjeta.rounded-0.p-3(x="50%" y="4%" numero="" style='background-color: #F6F6F6')
              img(src='@/assets/curso/temas/tema1/7.svg', alt='' style='width: 82px')
              h5 04. Control
              p En esta última etapa, la organización mide los resultados de cómo se hicieron las actividades planteadas y efectuadas, con el objetivo de generar mejoras continuas.
            .tarjeta.rounded-0.p-3(x="82%" y="48%" numero="" style='background-color: #F6F6F6')
              img(src='@/assets/curso/temas/tema1/8.svg', alt='' style='width: 82px')
              h5 01. Planificación
              p Esta etapa consiste en que la organización determine qué se va a hacer, de forma anticipada, para lograr los objetivos propuestos de manera eficiente.
            .tarjeta.rounded-0.p-3(x="50%" y="96%" numero="" style='background-color: #F6F6F6')
              img(src='@/assets/curso/temas/tema1/9.svg', alt='' style='width: 82px')
              h5 02. Organización
              p En esta etapa, la organización identifica cómo hacer que los recursos se utilicen de forma equilibrada, manteniendo una relación entre el trabajo y el personal que lo va a realizar o ejecutar.




    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 ¿Qué es el Proceso Administrativo y cuáles son sus etapas?
              p.text-small.mb-0 Para complementar este tema, observe el video: ¿Qué es el Proceso Administrativo y cuáles son sus etapas?, que se encuentra en el material complementario de este componente formativo.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=QqcjI-zZyb8" target="_blank")
                span Ver video
                i.fas.fa-video

    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4(data-aos="fade-right")
      h4.mb-0 La planificación en la organización
    p.mb-5(data-aos='fade-right') Es el proceso en el que una empresa u organización planifica sus actividades diarias. Disponer de este mecanismo les permite a las organizaciones alcanzar los objetivos establecidos, de una manera estructurada, eficaz y centrada en la obtención de resultados. Existen cuatro tipos de planificación organizacional:
    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Planificación organizacional estratégica" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Planificación organizacional estratégica
            p Consiste en desarrollar un plan de atención general para todas las áreas de una empresa. La formulación de objetivos se realiza basándose en un periodo de tiempo, ya sea a corto, mediano o largo plazo; procurando que dichos objetivos estén adaptados con los valores empresariales, además de visión y misión. 
              br
              br
              | Generalmente, este tipo de planificación organizacional es hecha por altos ejecutivos de una empresa, ya que participan todas las áreas de una organización y las decisiones deben ser tomadas de forma estratégica.  Aunque hay pequeñas empresas que prefieren integrar a todos sus empleados, con el fin de aportar valor a la formulación de objetivos.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/12.jpg', alt='Texto que describa la imagen' style='border-radius: 20px ')
      .py-4.py-md-5(titulo="Planificación organizacional táctica" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Planificación organizacional táctica
            p Implica describir la manera en que una compañía va a aplicar su plan estratégico. Sin embargo, este es más específico y se establece por algunos objetivos a corto plazo que apoyan el plan estratégico; su duración de acción y ejecución es de aproximadamente un año o menos.
              br
              br
              |El plan táctico suele ser orientado por los gerentes de cada área, que dan supervisión a aquellos objetivos a corto plazo y deben aplicar acciones, estrategias y delegar funciones para dar cumplimiento a las metas establecidas.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/13.jpg', alt='Texto que describa la imagen' style='border-radius: 20px ')
      .py-4.py-md-5(titulo="Planificación organizacional operacional" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Planificación organizacional operacional
            p Es la visión y el control de los aspectos diarios en la planificación organizacional. Está conformada por labores que se realizan a diario, como actividades de operación, normativa de trabajo, horarios, cumplimiento de políticas y estándares empresariales. 
              br
              br
              |Asimismo, permite asegurar que las responsabilidades, funciones y tareas se lleven a cabo de manera eficaz y los encargados de estas procedan de acuerdo con lo establecido por la empresa.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/14.jpg', alt='Texto que describa la imagen' style='border-radius: 20px ')
      .py-4.py-md-5(titulo="Planificación organizacional de contingencia" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Planificación organizacional de contingencia
            p El plan de contingencia se utiliza de forma esporádica, en especial, cuando surgen imprevistos, crisis o escenarios inusuales. Es un plan estructurado y funcional, que comprende una serie de retos o desafíos, el cual se debe abordar si una situación inesperada ocurre. Aunque las empresas consideren que es un plan que nunca van a utilizar, es esencial contar con este. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema1/15.jpg', alt='Texto que describa la imagen' style='border-radius: 20px ')
    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4(data-aos="fade-right")
      h4.mb-0 Características y elementos de la organización
    p.mb-5(data-aos='fade-right') Una organización se define como un conjunto de individuos que cooperan entre sí para alcanzar determinados objetivos y metas. Según Max Weber (1922), una organización es: #[b “un grupo de personas que se asocian con el propósito de lograr un objetivo y que está direccionado a través de reglas y órdenes que se dan mediante un jefe”.] A continuación, conozca las características y elementos de la organización:
    .margin-n(style='background-color: #FFF9ED').p-5.mb-5
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-9(data-aos="fade-right")
          .row.justify-content-center.mb-2.g-0
            .col-lg-2
              div(style='background-color: #F0BD51').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/16.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100
                p.mb-0 #[b Es un sistema social.] Está conformada por individuos, donde se asignan unos objetivos alineados por métodos y ocupaciones que causan una permanencia en equilibrio y comunicación. Estos componentes se relacionan entre sí, de tal manera que algún cambio o transformación en ellos puede provocar alteraciones en los resultados.  
          .row.justify-content-center.mb-2.g-0
            .col-lg-2
              div(style='background-color: #F0BD51 ').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/17.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100
                p.mb-0 #[b Se mantienen en el tiempo.] Las organizaciones tienen la posibilidad de proyectarse o no por un tiempo mayor que la vida de quienes fueron sus fundadores.
          .row.justify-content-center.mb-2.g-0
            .col-lg-2
              div(style='background-color: #F0BD51 ').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/18.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100.d-flex.align-items-center
                p.mb-0 #[b Son complejas.] El entorno constantemente experimenta cambios, lo que hace que las organizaciones originen nuevas formas de operar de forma innovadora. Cada organización definirá su programa de trabajo con respecto a las diferentes áreas funcionales.
          .row.justify-content-center.mb-2.g-0
            .col-lg-2
              div(style='background-color: #F0BD51 ').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/16.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100
                p.mb-0 #[b Son dinámicas.] Deben adaptarse a los cambios que acompañan la evolución de la humanidad, desde su inicio hasta la actualidad. Su esquema, por ende, es relativamente estable.
          .row.justify-content-center.mb-2.g-0
            .col-lg-2
              div(style='background-color: #F0BD51 ').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/19.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100
                p.mb-0 #[b Dividen el trabajo.] Todas las áreas deberán trabajar en equipo y colaborarse entre sí con el fin de actuar cooperativamente. Esto genera mejores rendimientos y mayores beneficios.
          .row.justify-content-center.mb-2.g-0
            .col-lg-2
              div(style='background-color: #F0BD51 ').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/20.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100
                p.mb-0 #[b Son innovadoras.] Las organizaciones deben ser creativas, con el propósito de crear nuevos procesos en el medio en que se desenvuelven, influenciado por los efectos de la globalización. De hecho, los recursos humanos van integrando condiciones de su entorno, se van identificando con esa organización. Adaptan su conducta, impulsando y optimizando las operaciones de la organización.
          .row.justify-content-center.mb-2.g-0
            .col-lg-2
              div(style='background-color: #F0BD51 ').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/21.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100
                p.mb-0 #[b Persiguen la eficiencia.] Todos los recursos deben ser eficientes. Es decir, obtienen un máximo rendimiento, en relación con calidad y cantidad, con un menor costo o gasto de recursos. 
        .col-lg-3(data-aos="fade-left"): img.d-none.d-lg-block(src='@/assets/curso/temas/tema1/22.svg', alt='')  
      p.mb-5(data-aos='fade-right') Los elementos de una organización son los recursos que requiere para ejecutar sus actividades y lograr sus metas. 
      SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/23.svg' alt='AvatarTop')
          div(style='background-color: #EF8B53').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Recursos Humanos
            p Conformados por el personal que integra la organización, estas personas brindan esfuerzos físicos para el desarrollo de funciones y recibir a cambio una retribución.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/24.svg' alt='AvatarTop')
          div(style='background-color: #F0BD51').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Recursos Intangibles
            p Es aquella marca, patente, símbolos, prestigios y demás.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/25.svg' alt='AvatarTop')
          div(style='background-color: #EF8B53').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Recursos Materiales
            p Son las materias primas, bienes muebles e inmuebles, maquinaria, equipos o elementos financieros.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/26.svg' alt='AvatarTop')
          div(style='background-color: #F0BD51').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Recursos Naturales
            p La tierra, el aire, el agua, la luz solar, la energía son algunos de los recursos naturales, pero la organización debe obtenerlos a un costo.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/27.svg' alt='AvatarTop')
          div(style='background-color: #EF8B53').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Recursos Tecnológicos
            p Son aquellos métodos, procesos y equipos.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/28.svg' alt='AvatarTop')
          div(style='background-color: #F0BD51').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Ideas, conocimientos, información
            p Son recursos originados por la inteligencia del hombre, el avance tecnológico y científico.
    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4(data-aos="fade-right")
      h4.mb-0 Plataformas estratégicas
    p.mb-5(data-aos='fade-right') La plataforma estratégica es una estructura conceptual sobre la cual se constituye una organización, es parte del plan estratégico de la organización y de los objetivos propuestos por la empresa. Está conformada por misión, visión, objetivos estratégicos, valores y políticas.        
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.modales-w.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/29.svg', alt='')  
          .tarjeta.p-3(x="9.3%" y="57%" numero="+" style='background-color: #FAEBCD')
            p #[b Misión:] es su razón de existir o el propósito general. La manera ideal de conocer cuál es la misión es responder las siguientes preguntas:
              br
              br
              |¿Qué hace la empresa?
              br
              |¿Cuál es su propósito?
              br
              |¿Para quiénes trabaja?
              br
              |¿Cuál es el portafolio de productos o servicios?
          .tarjeta.p-3(x="29.5%" y="57%" numero="+" style='background-color: #FAEBCD')
            p #[b Visión:] es la delimitación del objetivo más importante de la organización. Es la imagen de su futuro y ayuda al enfoque empresarial en el mediano y largo plazo, mientras que trabaja en el presente para lograrlo. Se establece respondiendo a las siguientes preguntas:
              br
              br
              |¿Cómo será el proyecto una vez haya madurado? 
              br
              |¿Cuáles serán los principales servicios o productos que ofrecerá la empresa? 
              br
              |¿Cuándo se esperan lograr los objetivos? 
              br
              |¿Cómo puede evolucionar la compañía para adaptarse al consumidor?
          .tarjeta.p-3(x="50%" y="57%" numero="+" style='background-color: #FAEBCD')
            p #[b Objetivos estratégicos:] son los fines y estrategias elaboradas por la organización para dirigir a largo plazo. Esto significa que los resultados que una empresa espera cumplir en un tiempo estipulado (por lo general, en un año) se definen a través de las actividades resultantes de la visión e inspiradas en la misión.
          .tarjeta.p-3(x="70.3%" y="57%" numero="+" style='background-color: #FAEBCD')
            p #[b Valores:] son aquellos principios, normas o creencias que caracterizan a una organización. Estos pertenecen a la cultura organizacional de la empresa y deben ser precisos para todos los individuos que hagan parte de esta. Deben trazar los valores de acuerdo con lo que se ejecutará en el ámbito laboral, tales como: responsabilidad, puntualidad, transparencia, participación, entre otros.
          .tarjeta.p-3(x="90.6%" y="57%" numero="+" style='background-color: #FAEBCD')
            p #[b Políticas:] fijan los reglamentos que conforman el marco normativo de la empresa. Estos deben ir ajustados a los valores de la organización, integrándolos a la cultura organizacional de esta. Su cumplimiento es obligatorio y los pasos para su ejecución deben estar adecuadamente definidos para su práctica cuando sean requeridos. La metodología debe ser clara, sencilla y correspondiente a la realidad empresarial.
    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4(data-aos="fade-right")
      h4.mb-0 Planeación estratégica de la organización
    p.mb-5(data-aos='fade-right') La planeación estratégica es un conjunto de acciones por medio de las cuales las organizaciones toman decisiones, establecen plazos y asignan responsabilidades para poder alcanzar sus objetivos. En el siguiente video, se observa la importancia y los pasos para realizar una buena planificación estratégica:
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/hoSYq25OaQA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .titulo(style='background-color: #F7E9E1').d-inline-block.p-3.mb-4(data-aos="fade-right")
      h4.mb-0 Herramientas para la ejecución de un plan estratégico
    p.mb-5(data-aos='fade-right') Existen varios mecanismos y herramientas de gestión que ayudan a organizar y definir las ideas al  momento de planificar, entre ellos están:
    .tarjeta(style='background-color: #FAF5EA').p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo='b')
        .row
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 #[i Balanced Scorecard]
            p Un #[i balanced scorecard], también conocido como un cuadro de mando integral, es un método de planificación estratégica que evalúa el funcionamiento de una organización a partir de cuatro aspectos fundamentales: financiero, clientes, procesos internos, formación y crecimiento. 
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Ampliar imagen
              i.fas.fa-search
            .indicador--click(v-if="mostrarIndicador")
          .col-lg-6.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/tema1/30.svg', alt='Texto que describa la imagen').mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 1
              span Cuadro de mando integral
        .row
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Mapa de procesos
            p “Un mapa de procesos es un diagrama de valor que representa, a manera de inventario gráfico, los procesos de una organización en forma interrelacionada” (ISOTools, 2016). Por lo general, para hacer el mapa de proceso, se basan en la norma de calidad ISO 9001. 
            a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/tema1/31.svg', alt='Texto que describa la imagen').mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 2
              span Mapa de procesos
        .row
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Análisis de recursos y capacidades
            p Es un estudio que detecta el potencial de una empresa y, asimismo, define las ventajas competitivas y establece los recursos y capacidades que posee esta. 
            a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/tema1/32.svg', alt='Texto que describa la imagen').mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3
              span Fases del análisis de recursos y capacidades
        .row
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Análisis FODA
            p Es un instrumento de análisis donde se evalúan factores internos (fortalezas, debilidades) y factores externos (oportunidades, amenazas) en una organización. Esta herramienta identifica la situación real de la empresa y ayuda a determinar la estrategia a futuro.
            a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/tema1/33.svg', alt='Texto que describa la imagen').mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4
              span Esquema del análisis FODA
        .row
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Análisis PESTEL
            p Esta herramienta permite el análisis de agentes externos y su afectación en la organización. Se consideran factores políticos, económicos, socioculturales, tecnológicos, ecológicos y legales. 
            a.boton.color-acento-botones.indicador__container(@click="modal5= true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/tema1/34.svg', alt='Texto que describa la imagen').mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 5
              span Matriz de análisis PESTEL
        .row
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Análisis de brechas
            p También llamado análisis GAP, es un formato que se utiliza para comparar el desempeño actual de la empresa y el desempeño esperado por esta. La “brecha” se entiende como la posición real de la compañía y donde espera verse. 
            a.boton.color-acento-botones.indicador__container(@click="modal6= true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/tema1/35.svg', alt='Texto que describa la imagen').mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 6
              span Análisis de brechas
        .row
          .col-lg-6.mb-4.mb-md-0.order-lg-1.order-2
            h4 Análisis de las cinco fuerzas de Porter
            p Es un modelo estratégico que evalúa las fuerzas competitivas de una empresa o sector, las cuales son: 
            ul.lista-ul
              li
                i.fas.fa-pen-nib
                | Poder de negociación de los compradores.
              li
                i.fas.fa-pen-nib
                | Poder de negociación de los proveedores.
              li
                i.fas.fa-pen-nib
                | Amenaza de nuevos competidores entrantes.
              li
                i.fas.fa-pen-nib
                | Amenaza de productos sustitutos.
              li
                i.fas.fa-pen-nib
                | Rivalidad entre competidores.
            a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6.order-lg-2.order-1
            figure
              img(src='@/assets/curso/temas/tema1/36.svg', alt='Texto que describa la imagen').mb-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 7
              span Análisis de las cinco fuerzas de Porter
    ModalA(:abrir-modal.sync="modal1")
      figure
        img(src='@/assets/curso/temas/tema1/30.svg', alt='')
    ModalA(:abrir-modal.sync="modal2")
      figure
        img(src='@/assets/curso/temas/tema1/31.svg', alt='')
    ModalA(:abrir-modal.sync="modal3")
      figure
        img(src='@/assets/curso/temas/tema1/32.svg', alt='')
    ModalA(:abrir-modal.sync="modal4")
      figure
        img(src='@/assets/curso/temas/tema1/33.svg', alt='')
    ModalA(:abrir-modal.sync="modal5")
      figure
        img(src='@/assets/curso/temas/tema1/34.svg', alt='')
    ModalA(:abrir-modal.sync="modal6")
      figure
        img(src='@/assets/curso/temas/tema1/35.svg', alt='')
    ModalA(:abrir-modal.sync="modal7")
      figure
        img(src='@/assets/curso/temas/tema1/36.svg', alt='')
    .titulo(style='background-color: #F7E9E1').d-inline-block.p-3.mb-4(data-aos="fade-right")
      h4.mb-0 Indicadores de gestión 
    p.mb-5(data-aos='fade-right') Son mecanismos que evalúan el desempeño y resultados de una organización con respecto a objetivos, responsabilidades y metas, para concretar si está teniendo éxito. Estos indicadores son:
    .margin-n(style='background-color: #F4F0FF' data-aos="zoom-in").px-5.py-4
      .row.justify-content-center.align-items-center
        .col-lg-5
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 8
            span Indicadores de gestión
          img(src='@/assets/curso/temas/tema1/37.svg', alt='')
        .col-lg-7
          img(src='@/assets/curso/temas/tema1/38.svg', alt='')
        

              










</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
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
.tarjetas-icono-up__icono
  position: relative
  padding: 5rem
  height: 100%
  width: 100%
  .icono
    position: absolute
    width: 100%
    left: 0
    top: 0
    transform: translateY(-20%)
    img
      width: 300px
      margin: 0 auto
</style>
