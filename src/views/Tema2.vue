<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Responsabilidad social empresarial
    p.mb-5(data-aos='fade-right') Cuando se habla de responsabilidad social empresarial, se hace referencia a una nueva forma de hacer negocios, en la que una empresa procura enfocarse en la sustentabilidad en varios aspectos, como en lo ambiental, social y económico, además, garantizando la preservación del medio ambiente y las futuras generaciones. Es una visión de gestión que integra diferentes actores, comunidad, valores éticos, medio ambiente, con la dirección de la compañía.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-acento-contenido.position-relative.p-2.p-sm-4.p-md-5
          .bloque-texto-g__img( style="background-color: #faebcd").p-0
          .bloque-texto-g__texto.position-relative.p-4
            img.imagen-g(src='@/assets/curso/temas/tema2/1.svg', alt='' )
            p.mb-0 #[b El objetivo de la responsabilidad social empresarial es que la organización, a partir de estas prácticas, impacte de manera significativa a la sociedad, generando una mayor competitividad y sostenibilidad en la empresa.]
              br
              |Es por esta razón que, si la empresa es socialmente responsable, generaría mayor productividad, puesto que mejora las condiciones para los trabajadores, optimizando su eficacia. Con esta herramienta, se crea un buen clima laboral y los empleados están a gusto en el trabajo, obteniendo resultados positivos.
    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 ¿Qué es la Responsabilidad Social?
              p.text-small.mb-0 Para saber más sobre la RSE, observe el video: ¿Qué es la Responsabilidad Social?, que se encuentra en el material complementario.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=L7SDdGAImsA" target="_blank")
                span Ver video
                i.fas.fa-video
    .row.justify-content-center.mb-5
      .col-lg-4.col-3(data-aos="fade-right")
        img(data-aos='zoom-in')(src='@/assets/curso/temas/tema2/2.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop' style='width: 120px')
              div(style='background-color: #FFF9ED').p-5.h-100
                p.mt-3 “La Responsabilidad Social en una organización busca gestionar los impactos que se generan, a corto y largo plazo, por el desarrollo de sus actividades económicas. Es por esto que se considera como un modelo de gestión organizacional que interactúa con un sinnúmero de grupos de interés (stakeholders) internos y externos, que busca mitigar el impacto social y medioambiental”. #[b ISO 26000, 2010]
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop' style='width: 120px')
              div(style='background-color: #FFF9ED').p-5.h-100
                p.mt-3 “La RSE es voluntaria, las empresas implementan esta iniciativa porque consideran el impacto que tienen sus actividades en la sociedad y afianzan sus principios y valores con los actores o partes interesadas que interactúan en los procesos internos y externos de la empresa”. #[b OIT, 2003]
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop' style='width: 120px')
              div(style='background-color: #FFF9ED').p-5.h-100
                p.mt-3 “La RSE es la relación ética y transparente de la empresa con los diferentes grupos de interés, en el que su actividad económica propone metas compatibles con el desarrollo sostenible de la sociedad en el ámbito social, ambiental y económico. Es una iniciativa voluntaria de los empresarios y que nace de sus convicciones y prioridades estratégicas”. #[b ANDI, 2002]
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop' style='width: 120px')
              div(style='background-color: #FFF9ED').p-5.h-100
                p.mt-3 “Es la responsabilidad que tienen las empresas de trabajar con sus colaboradores, comunidad local y la sociedad en general, para contribuir al desarrollo económico sostenible y mejorar la calidad de vida”. #[b (Instituto Ethos Brasil, 2008).]
            .tarjeta-avatar
              img(src='@/assets/curso/temas/tema2/3.svg' alt='AvatarTop' style='width: 120px')
              div(style='background-color: #FFF9ED').p-5.h-100
                p.mt-3 “La RSE es la integración voluntaria de cada gobierno frente a la gestión de estrategias mediante políticas y procedimientos frente a los temas sociales, laborales, medioambientales y de respeto a los Derechos Humanos y su cumplimiento estricto legal vigente en cada país, mediante el diálogo transparente con sus grupos de interés y la medición de las consecuencias e impactos que se puedan generar.” #[b (Foro de Expertos de la Comisión Europea, 2000).]
    p.mb-5(data-aos='fade-right') La RSE se rige con la norma de calidad ISO 26000, que se desarrolló en el año 2010.  Estos principios se crearon con el fin de fomentar acciones operativas responsables, que inducen al valor social, medioambiental y económico, tanto en los participantes como el entorno. Los principios básicos de la RSE son:
    br.d-none.d-sm-block
    br.d-none.d-sm-block
    .media-info
      ImagenInfografica.color-acento-botones.mb-5(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/4.svg', alt='Texto que describa la imagen')
        .tarjeta.p-3(x="33%" y="49%" numero="+" style='background-color:#F6F6F6')
          p La empresa debe informar y asumir el compromiso de mitigar y reparar los impactos que pueden generar los diferentes proyectos en diferentes ámbitos, ya sean económicos, sociales o medioambientales.
        .tarjeta.p-3(x="35%" y="22%" numero="+" style='background-color:#F6F6F6')
          p La organización debe cumplir, con responsabilidad social, los criterios de honestidad, equidad e integridad.
        .tarjeta.p-3(x="50%" y="6%" numero="+" style='background-color:#F6F6F6')
          p Es importante conocer las opiniones de las partes interesadas, con el fin de que la organización tome las decisiones más adecuadas. 
        .tarjeta.p-3(x="65%" y="24%" numero="+" style='background-color:#F6F6F6')
          p Las empresas deben actuar dentro de las leyes y regulaciones establecidas en el orden jurídico.
        .tarjeta.p-3(x="67%" y="47%" numero="+" style='background-color:#F6F6F6')
          p La organización debe tener conocimiento sobre la normativa internacional, en relación con los temas de responsabilidad social, y respetarla.
        .tarjeta.p-3(x="57%" y="68%" numero="+" style='background-color:#F6F6F6')
          p Es fundamental, para generar una política de responsabilidad social en la organización, respetar los Derechos Humanos.
        .tarjeta.p-3(x="43%" y="68%" numero="+" style='background-color:#F6F6F6')
          p La organización debe publicar a las partes interesadas, de manera clara y accesible, toda la información de los proyectos a desarrollar.
    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 La responsabilidad social empresarial y su enfoque ambiental: una visión sostenible a futuro
              p.text-small.mb-0 Para ampliar el tema sobre el enfoque de la RSE, se recomienda leer el artículo “La responsabilidad social empresarial y su enfoque ambiental: una visión sostenible a futuro”, que se encuentra en el material complementario.
            .col-sm-auto
              a.boton.color-acento-botones(href="http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2218-36202016000300023&lng=es&tlng=es" target="_blank")
                span Ver enlace 
                i.fas.fa-link
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        .titulo(style='background-color: #F0BD51').d-inline-block.p-3.mb-4
          h4.mb-0 Normatividad
        p.mb-5(data-aos='fade-right') El principal objetivo de las siguientes normativas es establecer una guía y dirección acertada para que las organizaciones puedan implementar los programas de Responsabilidad Social, revisando aspectos en el ámbito social, político, económico, legal y cultural. El principal objetivo es promover las capacidades de las empresas frente a los ámbitos mencionados anteriormente, mejorando la interacción y compromiso con las diferentes partes interesadas en la organización.
          br
          br
          |A continuación, revisará, en la siguiente tabla, las principales normativas que direccionan la Responsabilidad Social Empresarial (RSE).
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/5.png', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1 
      span Principales normativas RSE
    .tabla-a.tabla-morada.mb-5(data-aos="zoom-in")
      table
        caption #[b Nota.] Adaptado de Duque et al. (2014).
        thead
          tr
            th Título
            th Objetivo y función
            
        tbody
          tr
            td ISO 26000 (Norma Guía)
            td El objetivo es brindar una guía a las organizaciones sobre responsabilidad social, y su principal función es ayudar a las empresas a contribuir al desarrollo sostenible.
          tr
            td Norma de aseguramiento AA 1000
            td El objetivo es brindar orientaciones a las organizaciones sobre cómo evaluar y fortalecer los informes de sostenibilidad, generando calidad y credibilidad a la información expresada; y su función es la de asegurar el cumplimiento de los compromisos de los informes de sostenibilidad y el manejo de riesgos.
          tr
            td Cuadro central, indicadores sociales AECA (Asociación Española de Contabilidad y Administración de Empresas)
            td El objetivo es la implementación de la Responsabilidad Social Corporativa, su desarrollo, difusión, dirección, gestión y promoción entre las partes interesadas.
          tr
            td Global Reporting Initiative (GRI)
            td El objetivo es brindar las directrices, con los indicadores establecidos, en aspectos económicos, ambientales y sociales, estableciendo la materialidad. 
          tr
            td SGE 21: 2008, Sistema de Gestión Ética y Socialmente Responsable
            td Su objetivo es el cumplimiento de la normatividad y legislación frente al código de conducta de la gestión de la ética y responsabilidad social de las organizaciones.
          tr
            td Indicadores ETHOS de Responsabilidad Social Empresarial
            td Su objetivo es que las organizaciones puedan evaluar el desarrollo de las estrategias de la organización mediante indicadores ETHOS, frente a los temas de RSE.
          tr
            td Norma SA 8000
            td Su principal objetivo es vincular la política de responsabilidad social de la empresa con la alta dirección; no contempla el relacionamiento con los stakeholders externos.
          tr
            td Guía del Pacto Mundial
            td Establece los principios universales necesarios que debe integrar la organización en las actividades empresariales en cuatro ejes fundamentales: derechos humanos, laborales, medio ambiente y anticorrupción.

            






</template>

<script>
export default {
  name: 'Tema2',
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
.imagen-g
  display: flex
  justify-content: center
  width: 250px
  margin: 0 auto
  @media (min-width: $bp-min-lg)
    position: absolute
    left: 100%
    top: -60px
    width: 329px
  margin-bottom: 2rem
.bloque-texto-g__img
  left: auto
  right: 0
.bloque-texto-g
  justify-content: flex-start
  @media (max-width: $bp-max-md)
    padding-top: 2rem !important
</style>
