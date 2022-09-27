<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Procesos administrativos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8: img(data-aos='zoom-in')(src='@/assets/curso/temas/tema1/1.png', alt='')
      .col-lg-8
        .cajon-b-editado
          .cajon-b.color-acento-contenido.p-3.mb-5.arriba-derecha
            p.mb-0 Los procesos administrativos están compuestos por una serie de actividades o funciones administrativas que buscan aprovechar al máximo los recursos que tiene una organización y lograr los objetivos trazados de manera eficaz. La importancia de implementar un proceso administrativo en la dirección de una organización permite establecer una ruta a seguir mediante diferentes actividades en periodos determinados, con el fin de alcanzar los objetivos propuestos en la organización; de esta manera, incrementar la eficiencia, para lograr las metas propuestas.
    .margin-n(style='background-color: #FFF9ED').p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8 
          h4.mb-4 Las principales ventajas que es posible destacar de los procesos administrativos son las siguientes:
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
    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4
      h4.mb-0 Etapas del proceso administrativo
    p.mb-5(data-aos='fade-right') El proceso administrativo está compuesto por cuatro etapas: planificación, organización, dirección y control. Las cuales, a su vez, están organizadas en dos fases:
    .row.justify-content-center.mb-5
      .col-lg-5
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
          ImagenInfografica.color-acento-botones.mb-5
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
              h5 01. Planficación
              p Esta etapa consiste en que la organización determine qué se va a hacer, de forma anticipada, para lograr los objetivos propuestos de manera eficiente.
            .tarjeta.rounded-0.p-3(x="50%" y="96%" numero="" style='background-color: #F6F6F6')
              img(src='@/assets/curso/temas/tema1/9.svg', alt='' style='width: 82px')
              h5 02. Organización
              p En esta etapa, la organización identifica cómo hacer que los recursos se utilicen de forma equilibrada, manteniendo una relación entre el trabajo y el personal que lo va a realizar o ejecutar.




    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.color-primario.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Qué es el Proceso Administrativo y cuáles son sus etapas?
              p.text-small.mb-0 Para complementar este tema, observe el video: ¿Qué es el Proceso Administrativo y cuáles son sus etapas?, que se encuentra en el material complementario de este componente formativo.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ir al enlace
                i.fas.fa-link

    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4
      h4.mb-0 La planificación en la organización
    p.mb-5(data-aos='fade-right') Es el proceso en el que una empresa u organización planifica sus actividades diarias. Disponer de este mecanismo les permite a las organizaciones alcanzar los objetivos establecidos, de una manera estructurada, eficaz y centrada en la obtención de resultados. Existen cuatro tipos de planificación organizacional:
    TabsB.color-acento-contenido.mb-5
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
    .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4
      h4.mb-0 Características y elementos de la organización
    p.mb-5(data-aos='fade-right') Una organización se define como un conjunto de individuos que cooperan entre sí para alcanzar determinados objetivos y metas. Según Max Weber (1922), una organización es: #[b “un grupo de personas que se asocian con el propósito de lograr un objetivo y que está direccionado a través de reglas y órdenes que se dan mediante un jefe”.] A continuación, conozca las características y elementos de la organización:
    .margin-n(style='background-color: #FFF9ED').p-5
      .row.justify-content-center.mb-5
        .col-lg-9
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
            .col-lg-1
              div(style='background-color: #F0BD51 ').p-4.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema1/21.svg', alt='' style='width: 59px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-5.h-100
                p.mb-0 #[b Persiguen la eficiencia.] Todos los recursos deben ser eficientes. Es decir, obtienen un máximo rendimiento, en relación con calidad y cantidad, con un menor costo o gasto de recursos. 
          

    

              










</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
