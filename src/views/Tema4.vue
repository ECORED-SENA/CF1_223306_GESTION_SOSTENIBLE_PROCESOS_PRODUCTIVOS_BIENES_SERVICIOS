<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Desarrollo sostenible
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .cajon-b-editado
          .cajon-b.color-acento-contenido.p-3.mb-5.arriba-izquierda
            p.mb-0 El desarrollo sostenible es aquel desarrollo que consume los recursos de una manera amigable con el medio ambiente, esto se refiere a realizar una adecuada gestión de los recursos para que sigan existiendo estos en el presente y futuro. Este concepto fue propuesto por la ex Primera Ministra de Noruega, Gro Harlem Brundtland, en el que expresa que el desarrollo sostenible debe satisfacer las necesidades actuales sin comprometer las de las generaciones futuras. 
      .col-lg-4.col-8(data-aos="zoom-in"): img(src='@/assets/curso/temas/tema4/1.png', alt='')
    p.mb-5(data-aos='fade-right') Este concepto se compone de tres aspectos fundamentales:
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/2.svg' alt='AvatarTop' style='width: 120px')
          .tarjeta(style='background-color: #FAEBCD').p-5.h-100.w-100
            p.mt-2 #[b El aspecto económico:] busca garantizar la generación de empleo con salarios justos y así reducir la pobreza. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/3.svg' alt='AvatarTop' style='width: 120px')
          .tarjeta(style='background-color: #FAEBCD').p-5.h-100.w-100
            p.mt-2 #[b El aspecto ambiental:] busca mitigar los impactos en el medio ambiente generados por las actividades económicas de las organizaciones y de los seres humanos.
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/4.svg' alt='AvatarTop' style='width: 120px')
          .tarjeta(style='background-color: #FAEBCD').p-5.h-100.w-100
            p.mt-2 #[b El aspecto social:] busca garantizar el bienestar de todos los colaboradores de una organización y, asimismo, el de una comunidad. 
    p.mb-5(data-aos='fade-right') Por otro lado, la agenda 2030 para el desarrollo sostenible estableció una hoja de ruta, por lo que propuso 17 Objetivos de Desarrollo Sostenible que buscan lograr generar un crecimiento de las economías, equilibrio con relación al medio ambiente y progreso social.  En la siguiente figura, puede conocer los ODS.

    .margin-n(style='background-color: #FFF9ED').p-5.mb-5(data-aos="zoom-in")
      .row.justify-content-center.mb-5
        .col-lg-10
          img(src='@/assets/curso/temas/tema4/5.jpg', alt='')
    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 El Desarrollo Sostenible y sus pilares fundamentales
              p.text-small.mb-0 Para conocer más sobre este tema, ver el video: “El Desarrollo Sostenible y sus pilares fundamentales”, que se encuentra en el material complementario.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=OZlUTG07XFQ" target="_blank")
                span Ver video
                i.fas.fa-video
    p.mb-5(data-aos='fade-right') El proceso de conceptualización sobre el término desarrollo sostenible se ha definido por diferentes autores a lo largo de los años; a continuación, se observa la evolución de este concepto y sus principales características: 
    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop' style='width: 120px')
          div(style='background-color: #FFF9ED').p-5.h-100
            p Define el Desarrollo Sostenible como la forma para garantizar la satisfacción de las necesidades humanas actuales y futuras mediante la conservación de los recursos naturales, orientados a mitigar el impacto del medio ambiente. #[b FAO, 1898]
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop' style='width: 120px')
          div(style='background-color: #FAD585').p-5.h-100
            p Es un proceso progresivo de participación de la ciudadanía frente a la calidad de vida del ser, en el que se debe dar prioridad al crecimiento económico con equidad social, transformación de los métodos de producción y su consumo, equilibrando con la naturaleza. #[b Alides, 1994-]
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop' style='width: 120px')
          div(style='background-color: #FFF9ED').p-5.h-100
            p El Desarrollo Sostenible tiene como objetivo mejorar la calidad de vida de las personas, mediante el desarrollo productivo integral, desarrollo social y conservación de los recursos naturales.
              br
              | #[b Pgdes, 1997]

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop' style='width: 120px')
          div(style='background-color: #FAD585').p-5.h-100
            p Es una estrategia política que busca mejorar las condiciones de la población partiendo de la gestión económica, social y tecnocientífica. #[b Fergusson y Lanz (2001)]
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop' style='width: 120px')
          div(style='background-color: #FFF9ED').p-5.h-100
            p Permite el mejoramiento continuo de la calidad de vida de los habitantes en el ámbito urbano, regional y global, sin que se deteriore su entorno natural. 
              br
              |#[b Gabaldón, 2006]
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop' style='width: 120px')
          div(style='background-color: #FAD585').p-5.h-100
            p Procura el desarrollo equitativo y bienestar social mediante la conservación de los recursos naturales y el equilibrio ecológico, preservando los recursos para las generaciones futuras. #[b Ley Orgánica del Ambiente de la RBV Gaceta Oficial] 
              br
              |#[b N° 5.833(22-12-2006)]
    .margin-n(style='background-color: #FFF9ED' data-aos="zoom-in").p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8 
          h4.mb-4 Y  las siguientes son las características del desarrollo sostenible:
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Investiga las formas en que las actividades económicas preserven y mejoren el sistema ambiental.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Garantiza que las actividades económicas puedan mejorar el estilo de vida de todos.

            li 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Utiliza de manera eficiente los recursos.

            li 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Genera una cultura de reciclaje y reutilización.

            li 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Da la confianza para la creación e instalación de tecnologías limpias.

            li 
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Recupera los ecosistemas deteriorados.

            li 
              .lista-ol--cuadro__vineta
                span.text-bold 7
              | Fomenta la autonomía regional.

            li 
              .lista-ol--cuadro__vineta
                span.text-bold 8
              | Destaca la importancia de cuidar la naturaleza para el bienestar de la sociedad.
        .col-lg-4.col-8: img(src='@/assets/curso/temas/tema4/7.svg', alt='')
    .titulo(style='background-color: #F0BD51' data-aos="zoom-in").d-inline-block.p-3.mb-4
      h4.mb-0 Estrategias e indicadores de responsabilidad social
    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Diseñar programas RSE originales" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Diseñar programas RSE originales
            p Las empresas imitan los programas de RSE que han aplicado otras empresas por su éxito, aunque con eso no basta, porque los grupos de interés se darán cuenta de que sus acciones no son honestas y no generan un cambio social importante. Por ende, las organizaciones deben ser únicas y crear su propio programa de RSE, donde aporte valor agregado y permita mejorar la realidad que los rodea.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/8.png', alt='Texto que describa la imagen' style='border-radius: 20px ')
      .py-4.py-md-5(titulo="Diseñar programas de RSE con objetivos a mediano y largo plazo" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Diseñar programas de RSE con objetivos a mediano y largo plazo
            p La mayoría de las organizaciones desarrollan programas de RSE a corto plazo, que suelen ser menos eficaces y, en muchas ocasiones, no están relacionados con sus operaciones. Estas orientaciones reflejan medios oportunistas o mercadeo social, pero no un compromiso con la sociedad. Una misión real de la RSE establece objetivos sociales claros a mediano o largo plazo.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/9.png', alt='Texto que describa la imagen' style='border-radius: 20px ')
      .py-4.py-md-5(titulo="Generar una reputación social" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Generar una reputación social
            p Las empresas se enfocan en mostrar una buena imagen corporativa y no una reputación, a pesar de que la imagen corporativa va ligada al reconocimiento y participación de las actividades de mercadeo y publicidad de la organización. Para crear una imagen corporativa y generar una reputación social, es importante tener una gestión responsable a nivel interno y externo en la organización.
        
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema4/10.png', alt='Texto que describa la imagen' style='border-radius: 20px ')
    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Las empresas deben diseñar programas de RSE, pero también fomentarla
    p.mb-5(data-aos='fade-right') Demostrar con acciones a la sociedad y empresas los beneficios de una gestión responsable, concientizar y enseñar a otros sectores sociales sobre la RSE es impulsar estos programas. Algunos puntos clave para fomentar los programas de responsabilidad social son:
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/11.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Diseñar programas de RSE con objetivos a mediano y largo plazo") La mayoría de las organizaciones desarrollan programas de RSE a corto plazo, que suelen ser menos eficaces y, en muchas ocasiones, no están relacionados con sus operaciones. Estas orientaciones reflejan medios oportunistas o mercadeo social, pero no un compromiso con la sociedad. Una misión real de la RSE establece objetivos sociales claros a mediano o largo plazo.
          p.text-small(numero="2" titulo="Generar una reputación social") Las empresas se enfocan en mostrar una buena imagen corporativa y no una reputación, a pesar de que la imagen corporativa va ligada al reconocimiento y participación de las actividades de mercadeo y publicidad de la organización. Para crear una imagen corporativa y generar una reputación social, es importante tener una gestión responsable a nivel interno y externo en la organización.
          p.text-small(numero="3" titulo="Proporcionar las acciones de RSE internas con las externas") Generalmente, conversar con los colaboradores de una organización acerca de la RSE es decepcionante, al escuchar que no practican de manera interna lo que impulsan afuera de esta. Si se implementa RSE en las empresas, se debe hacer de forma tanto interna como externa, para que las reconozcan como socialmente responsables.
    .cajon-b-editado(data-aos="zoom-in")
      .cajon-b.color-primario.p-3.arriba-derecha
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            p.mb-0 Para que una compañía ejecute correctamente la RSE y ejerza su papel corporativo desde el punto de vista consecuente e integral, es fundamental que sea integrado en procesos de gestión como estrategias de negocios, para ello, es conveniente elaborar instrumentos acerados para el apoyo y búsqueda de acciones de responsabilidad social en la organización. Estos indicadores son:
          .col-lg-1.col-4: img(src='@/assets/curso/temas/tema4/12.svg', alt='')
    .margin-n(style='backgroud-color: #F5F2FF' data-aos="zoom-in").mb-5
      img(src='@/assets/curso/temas/tema4/13.svg', alt='')
    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Estrategias y ventajas competitivas
    .cajon-b-editado(data-aos="zoom-in")
      .cajon-b.color-acento-contenido.p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1.col-4: img(src='@/assets/curso/temas/tema4/14.svg', alt='')
          .col-lg-11
            p.mb-0 El propósito de elaborar ventajas competitivas sostenibles dentro de las empresas es posicionarse mejor en el mercado, agregan valor añadido para la diferenciación con la competencia, reducen costos comerciales y captan a más consumidores.
              br
              br
              |Adicionalmente, Porter (2015) plantea #[b tres estrategias para adoptar en cualquier organización y alcanzar ventajas competitivas sostenibles:]
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-4.mb-lg-0.mb-3
        div(style='background-color: #F0BD51').p-5.h-100
            img(src='@/assets/curso/temas/tema4/15.jpg', alt='' style='border-radius: 20px ').mb-3
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center El liderazgo en costos
            p Es una estrategia ingeniosa y genera una oportunidad si la compañía tiene la capacidad de ofrecer sus productos o servicios a un menor precio comparado con su competencia.
              br
              br
              |#[b Bajar costos de producción se puede realizar a través de distintas alternativas; en este caso, como acceso preferencial de materias primas.]
      .col-lg-4.mb-lg-0.mb-3
        div(style='background-color:#FAEBCD ').p-5.h-100
            img(src='@/assets/curso/temas/tema4/16.jpg', alt='' style='border-radius: 20px ').mb-3
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center La diferenciación
            p Esta estrategia es llamativa para las organizaciones que buscan apuntar hacia otro nicho de mercado o a consumidores que exigen en sus productos características especiales con respecto a las que ofrece la competencia.
              br
              br
              |#[b Un ejemplo podría ser exclusividad en el diseño del producto, materias primas de alta calidad o servicio al cliente personalizado. ]
      .col-lg-4.mb-lg-0.mb-3
        div(style='background-color: #F0BD51').p-5.h-100
            img(src='@/assets/curso/temas/tema4/17.jpg', alt='' style='border-radius: 20px ').mb-3
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center El enfoque
            p Por último, es una estrategia que se especializa en un segmento de mercado en especial para ofrecer un producto idóneo, pedido por los deseos y necesidades de este nicho.
    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Tipos de indicadores y aplicación
    p.mb-5(data-aos='fade-right') Los indicadores de sostenibilidad se categorizan de la siguiente forma: económicos, sociales y ambientales. Amplíe la información sobre cada uno de ellos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row(titulo="Sostenibilidad económica").px-4
        p.mb-5 Se refiere a la capacidad para que las empresas gestionen la existencia de sus recursos y obtengan rendimientos económicos de manera responsable en un periodo prolongado. Un caso de sostenibilidad económica es el Grupo Argos, que ha adaptado distintos proyectos de sostenibilidad y ha recibido varios reconocimientos por su compromiso. Una de las acciones que ha implementado es el Programa de Sacos Verdes, que hace referencia a la recolección de sacos ya utilizados y luego entregarlos a empresas que llevarán a cabo su aprovechamiento a través de logística inversa.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/19.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h5 Ejemplos de indicadores de Sostenibilidad Económica:
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              | Fondo de maniobra y necesidades.
            li
              i.fas.fa-check-circle
              | Deuda (%) y estructura de endeudamiento (%).
            li
              i.fas.fa-check-circle
              | Volumen de negocios/pasivo.

            li
              i.fas.fa-check-circle
              | Liquidez general y reducida.
            li
              i.fas.fa-check-circle
              | Rentabilidad líquida y operacional de ventas.

            li
              i.fas.fa-check-circle
              | Rentabilidad del capital propio.

            li
              i.fas.fa-check-circle
              | EBITDA.

            li
              i.fas.fa-check-circle
              | EBITDA / Gastos financieros.

            li
              i.fas.fa-check-circle
              | Deuda financiera / EBITDA.

            li
              i.fas.fa-check-circle
              | Valor añadido bruto.
      .row(titulo="Sostenibilidad social").px-4
        p.mb-5 La sostenibilidad social tiene el propósito de fortalecer  la unión y estabilidad de ciertas comunidades. Por ejemplo, Davivienda maneja un programa llamado “Cultivarte Familia”, donde promueve el desarrollo social y económico de las comunidades de viviendas de interés social mediante programas de formación integral y un portafolio de productos y servicios adaptados a sus necesidades.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/18.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h5 Ejemplos de indicadores de Sostenibilidad Social:
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              | Acciones de voluntariado.

            li
              i.fas.fa-check-circle
              | Programas de apoyo a la comunidad.

            li
              i.fas.fa-check-circle
              | Impacto social de las intervenciones (SROI).

            li
              i.fas.fa-check-circle
              | Puestos de trabajo creados.

            li
              i.fas.fa-check-circle
              | Decisiones de apoyo a las familias de los empleados.

            li
              i.fas.fa-check-circle
              | Grado de satisfacción de los empleados.

            li
              i.fas.fa-check-circle
              | Diversidad de los empleados.

            li
              i.fas.fa-check-circle
              | Número de beneficios sociales para empleados.

            li
              i.fas.fa-check-circle
              | Frecuencia del uso de estos beneficios sociales.
      .row(titulo="Sostenibilidad ambiental").px-4
        p.mb-5 La sostenibilidad ambiental se encarga de preservar la biodiversidad sin dejar de lado el desarrollo económico y social. Los pilares de la sostenibilidad ambiental son: ahorrar energía, cuidar el agua, reutilizar envases reciclados, eliminar los residuos plásticos, utilizar medios de transporte que sean amigables con el medio ambiente, limitar el uso de residuos y conservar la flora y fauna. 
            br
            br
            |Un ejemplo de este tipo de sostenibilidad es la empresa Alpina, que maneja varios proyectos sobre sostenibilidad ambiental, como ganadería sostenible, donde busca que la leche se  derive de ganadería sostenible certificada y cero zonas de deforestación; se ha comprometido en sus operaciones a cero huella de carbono. Otro proyecto es el plástico neutro, ahorro de grandes cantidades de agua en sus operaciones, y finalmente, energía eléctrica proveniente de fuentes renovables, especialmente por biogás.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/tema4/20.svg', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          h5 Ejemplos de indicadores de Sostenibilidad Ambiental:
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              | Ciclo de vida del producto.

            li
              i.fas.fa-check-circle
              | Calidad del producto.

            li
              i.fas.fa-check-circle
              | Salud ambiental.

            li
              i.fas.fa-check-circle
              | Uso del equipamiento.

            li
              i.fas.fa-check-circle
              | Cantidad de agua usada.

            li
              i.fas.fa-check-circle
              | Cantidad de energía usada.

            li
              i.fas.fa-check-circle
              | Cantidad de materiales usados, reutilizados y reciclados.

            li
              i.fas.fa-check-circle
              | Huella de carbono.

            li
              i.fas.fa-check-circle
              | Necesidad de transporte (medido en emisiones de CO#[sub 2] )
    .margin-n(style='background-color: #583CB6' data-aos="zoom-in").p-5.p-lg-4
      .row.justify-content-center
        .col-lg-2.col-4
          .imagen-absolute.position-relative
            .imagen-absolute__img
              img(src='@/assets/curso/temas/tema4/21.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p.mb-0.text-white Para ver el avance de los objetivos planteados, se utilizan los indicadores de desempeño (KPI), estos pueden ser absolutos o relativos y cuantitativos o cualitativos. Su aplicación se realiza a través de ecuaciones pertinentes de acuerdo con el indicador que se quiere evaluar. Se establecen los objetivos del proyecto con sus respectivas actividades y calendario. 
    
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
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
.linea-tiempo-d.color-acento-contenido .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #E2D9FF
  color: $color-sistema-texto
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__title
  background-color: #E2D9FF
.linea-tiempo-d__item--selected .linea-tiempo-d__item__content__slot
  background-color: #E2D9FF
.acordion__activo
  background-color: #E2D9FF !important
.imagen-absolute__img
  @media (min-width: $bp-min-lg)
    position: absolute
    top: 0
    left: 0
    width: 100%
    transform: translateY(-50%)
</style>
