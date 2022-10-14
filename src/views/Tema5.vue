<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Diagnóstico y técnicas de recolección organizacional
    .cajon-b-editado(data-aos="zoom-in")
      .cajon-b.color-primario.p-3.color-claro
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1.col-4: img(src='@/assets/curso/temas/tema5/1.svg', alt='')
          .col-lg-11
            p.mb-0 El diagnóstico organizacional consiste en un análisis que se elabora en las organizaciones sobre su situación actual y hallar problemas o áreas de oportunidades mediante instrumentos, con el fin de resolver problemas y gestionar cambios que permitan mejoras.  
              br
              br
              | #[b Para desarrollar un diagnóstico organizacional, se deben tener en cuenta los siguientes conceptos claves:]
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-4.mb-lg-0.mb-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/2.jpg')})`}")
              .texto-flip.p-3
                .titulo.d-inline-block.p-3.rounded-pill.bg-white
                  h5.mb-0 Clima organizacional
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Clima organizacional
              p Incluye actitudes y percepciones, el comportamiento colectivo y el impacto de los colaboradores en el entorno laboral. Se estudian aspectos como nivel de estrés, satisfacción laboral, calidad del servicio y resultados en él, que repercuten en la comunicación, participación, trabajo en equipo, claridad de funciones y eficacia en la resolución de conflictos. 
      .col-lg-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/3.jpg')})`}")
              .texto-flip.p-3
                .titulo.d-inline-block.p-3.rounded-pill.bg-white
                  h5.mb-0 Cultura organizacional
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Cultura organizacional
              p Se conforma de comportamientos, normas y principios establecidos y transmitidos por la organización. Estas variables y normas de comportamientos se perciben de manera subjetiva, a través de opiniones y desempeño de los colaboradores de una empresa. 
    p.mb-5(data-aos='fade-right') En cuanto a la cultura organizacional, con el propósito de mitigar los efectos negativos y buscar la ampliación de actitudes positivas, se debe incorporar una estrategia completa, que inicia con un diagnóstico y finaliza con una evaluación. Los pasos para determinar una cultura organizacional son:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 11
      span Estrategia para determinar la cultura organizacional
    .cotenedor-flechas.position-relative(data-aos="zoom-in")
      .flecha.flecha--1.d-none.d-lg-block: img(src='@/assets/curso/temas/tema5/flecha.svg', alt=''  style='width: 65px')
      .flecha.flecha--2.d-none.d-lg-block: img(src='@/assets/curso/temas/tema5/flecha.svg', alt=''  style='width: 65px')
      .flecha.flecha--3.d-none.d-lg-block: img(src='@/assets/curso/temas/tema5/flecha.svg', alt=''  style='width: 65px')

      .row.justify-content-center.mb-5
        .col-lg-3.mb-lg-0.mb-3
            div(style='background-color: #ef8b53').p-5.h-100
                img(src='@/assets/curso/temas/tema5/4.svg', alt='' style='border-radius: 20px; width:106px ').mb-3.m-auto
                .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
                  h4.mb-0.text-center 01. Diagnóstico
                p Definir los problemas que disminuyen la eficiencia de la organización.
        .col-lg-3.mb-lg-0.mb-3
            div(style='background-color: #faebcd').p-5.h-100
                img(src='@/assets/curso/temas/tema5/5.svg', alt='' style='border-radius: 20px; width:106px ').mb-3.m-auto
                .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
                  h4.mb-0.text-center 02. Plan de acción
                p Plantear estrategias para afrontar los problemas hallados.
        .col-lg-3.mb-lg-0.mb-3
            div(style='background-color: #ef8b53').p-5.h-100
                img(src='@/assets/curso/temas/tema5/6.svg', alt='' style='border-radius: 20px ; width:106px').mb-3.m-auto
                .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
                  h4.mb-0.text-center 03. Intervención
                p Aplicar los cambios de manera secuencial.
        .col-lg-3.mb-lg-0.mb-3
            div(style='background-color: #faebcd').p-5.h-100
                img(src='@/assets/curso/temas/tema5/7.svg', alt='' style='border-radius: 20px ; width:106px').mb-3.m-auto
                .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
                  h4.mb-0.text-center 04. Evaluación
                p Calificar las labores de los cambios contemplados.
    .margin-n(style='background-color: #FFF9ED' data-aos="zoom-in").p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8 
          h4.mb-4 Y  las siguientes son las características del desarrollo sostenible:
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              |  Permite visualizar los problemas causados por los factores externos de la organización.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Estudia de manera permanente los procesos y subtemas que se llevan a cabo en la empresa.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Localiza signos de problemas y el impacto que las actividades han tenido en cada proceso. 
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Destaca los puntos fuertes que se posee.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Identifica los aspectos positivos o negativos que existan en la organización.
        .col-lg-4.col-8
          img(src='@/assets/curso/temas/tema5/8.svg', alt='' )
    p.mb-5(data-aos='fade-right') Los elementos que conforman el diagnóstico organizacional se dividen en 3 etapas importantes:
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n" data-aos="zoom-in")
          .row
            .col-md-8.mb-4.mb-md-0
              h4 A. Generación de información
              p La componen tres aspectos principales:
                br
                |a. El medio con que se recoge la información, los instrumentos y los procesos usados.
                br
                |b. El método empleado para recolectar la información, la cual se hace de dos formas: primero, el utilizado para adquirir información desde el cliente y el utilizado para adquirirla desde el consultor.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema5/9.jpg', alt='Texto que describa la imagen')
          .row
            .col-md-8.mb-4.mb-md-0.order-lg-2.order-1
              h4 B. Organización de la información
              p Se tienen en cuenta tres variables fundamentales:
                br
                |a. El diseño de la metodología para el procesamiento de la información.
                br
                |b. El almacenamiento adecuado de los datos recopilados.
                br
                |c. La organización de la información, de tal manera que sea fácil acceder a ella.
            .col-md-4.order-lg-1.order-2
              figure
                img(src='@/assets/curso/temas/tema5/10.jpg', alt='Texto que describa la imagen')
          .row
            .col-md-8.mb-4.mb-md-0
              h4 C. Análisis e interpretación de la información
              p Significa dividir los elementos básicos de la información y estudiarlos, con el fin de responder los objetivos formulados al inicio del proyecto.
            .col-md-4
              figure
                img(src='@/assets/curso/temas/tema5/11.jpg', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Existen dos tipos de diagnóstico organizacional: el funcional y la cultura; cada uno maneja sus objetivos, metodología e instrumentos:
    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Diagnóstico funcional
    .cajon-b-editado(data-aos="zoom-in")
      .cajon-b.color-acento-contenido.arriba-derecha.p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-11
            p.mb-0 Consiste en analizar los esquemas formales e informales de la comunicación, sus prácticas relacionadas con la producción, la satisfacción de los empleados, el sostenimiento de la empresa y la innovación. #[b Las técnicas aplicables en el diagnóstico funcional son:]
          .col-lg-1.col-4: img(src='@/assets/curso/temas/tema5/12.svg', alt='')
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2
      span Definición
    .tabla-a.tabla-morada.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th Técnica
            th Objetivo y función
            
        tbody
          tr
            td Entrevista
            td Este método, acompañado del cuestionario, recopila información que se investiga con más detalles en un diálogo con los colaboradores de una empresa.
          tr
            td Cuestionario
            td Recolecta una gran cantidad de información de un número importante de personas y de una forma más ágil y asequible, en comparación con otras técnicas; además, el análisis estadístico es más sencillo de realizar.
          tr
            td Estudios de transmisión de mensajes
            td Es un cuestionario especializado, que analiza el proceso de divulgación de un mensaje dentro de la empresa, desde su punto de partida hasta que es obtenido por integrantes de esta. Esta técnica detalla el tiempo que conlleva la divulgación del mensaje, el proceso comunicativo, quiénes lo interrumpen, las redes de comunicación informal y la forma en que se sistematiza la información.
          tr
            td Estudios de experiencias críticas de comunicación
            td Se utilizan para descubrir las experiencias negativas o positivas que tenga la organización, asimismo, la efectividad e inefectividad de estas.
          tr
            td Estudio de redes de comunicación
            td Estudia el esquema de comunicación de la empresa y su seguridad; determina quiénes se comunican entre sí, grupos existentes, actores que actúan como nexo entre los grupos, bloqueos que experimenta la investigación, el contenido y cantidad de información divulgada.
          tr
            td Entrevista grupal
            td Se usa para ciertos colaboradores representativos de la organización, para ser entrevistados como grupo; se enfoca en componentes cruciales de la comunicación organizacional.
    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Diagnóstico cultural
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8 
        p.mb-0(data-aos='fade-right') Es una serie de actividades intencionadas para identificar los valores y principios claves de la empresa, la posición en que estos son conocidos y difundidos por los colaboradores, y la cohesión que se mantiene en el procedimiento organizacional.
          br
          br
          |Los valores y principios claves de la organización se definen mediante los ámbitos que se aprecien; por esta razón, si hay más manifestaciones culturales de estudio, serán mejores los resultados. Estas manifestaciones se categorizan de la siguiente manera:
      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema5/13.png', alt='')
    .margin-n(style='background-color: #F5F2FF' data-aos="zoom-in").p-5.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-8: img(src='@/assets/curso/temas/tema5/14.svg', alt='')
        .col-lg-7
          .row.justify-content-center.mb-3.g-0
            .col-lg-2
              div(style='background-color: #F0BD51').p-2.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/15.svg', alt='' style='width: 68px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-4.h-100
                h4.mb-0 Espiriturales
                p.mb-0 Ideología, filosofía, símbolos, mitos o historias.
          .row.justify-content-center.mb-3.g-0
            .col-lg-2
              div(style='background-color: #F0BD51').p-2.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/16.svg', alt='' style='width: 68px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-4.h-100
                h4.mb-0 Conductuales
                p.mb-0 Lenguaje, comportamiento no verbal, rituales y formas de interacción.
          .row.justify-content-center.mb-3.g-0
            .col-lg-2
              div(style='background-color: #F0BD51').p-2.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/17.svg', alt='' style='width: 68px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-4.h-100
                h4.mb-0 Estructurales
                p.mb-0 Políticas y procedimientos, normas, sistemas de status internos, estructura del poder.
          .row.justify-content-center.mb-3.g-0
            .col-lg-2
              div(style='background-color: #F0BD51').p-2.h-100.d-flex.align-items-center
                img(src='@/assets/curso/temas/tema5/18.svg', alt='' style='width: 68px').m-auto
            .col-lg-10
              div(style='background-color: #FAEBCD').p-4.h-100
                h4.mb-0 Materiales
                p.mb-0 Tecnología, instalaciones, mobiliario y equipo.
    .margin-n(style='background-color: #583CB6' data-aos="zoom-in").p-5.p-lg-4.mb-5
      .row.justify-content-center
        .col-lg-2.col-4
          .imagen-absolute.position-relative
            .imagen-absolute__img
              img(src='@/assets/curso/temas/tema4/21.svg', alt='Texto que describa la imagen')
        .col-lg-10
          p.mb-0.text-white #[b El método del diagnóstico cultural se basa en ciertos instrumentos;] acerca de su aplicación, maneja dos enfoques: cualitativo y cuantitativo. Las siguientes técnicas aplicables para este diagnóstico son:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3
      span Técnicas diagnóstico cultural
    .tabla-a.tabla-morada.mb-5(data-aos="zoom-in")
      table
        thead
          tr
            th Técnica
            th Enfoque
            th Definición
            
        tbody
          tr
            td  Observación
            td Cualitativo
            td Se puede desarrollar de dos formas: observante participante, que consiste en integrarse como un miembro del grupo; y observante no participante, u ordinaria, este se detalla desde afuera. El investigador debe procurar entrar en confianza con los miembros que se vayan a evaluar, para la obtención de mejores resultados.
          tr
            td Entrevistas individuales
            td Cualitativo
            td Al hacer la entrevista, el entrevistador debe establecer un ambiente de confianza mutua, comprensión y afinidad emocional con el entrevistador.
          tr
            td Análisis de documentos
            td Cualitativo
            td El investigador buscará documentos que le proporcionen información sobre la historia y características de la empresa, para ser analizados por este.
          tr
            td Discusión en grupos pequeños
            td Cualitativo
            td Se reúnen pequeños grupos con un tema a discutir.
          tr
            td Dramatización
            td Cualitativo
            td Suministra datos sobre la impresión de los miembros que tienen roles, funciones o experiencias del trabajo.
          tr
            td Técnicas proyectivas
            td Cualitativo
            td Se basa en entregar material a un miembro, que esté en desorden, con instrucciones no tan claras, y pedirle que lo estructure a su parecer.
          tr
            td Encuesta
            td Cuantitativo
            td La información que se recolecte a través de esta técnica se utilizará para medir de manera cuantitativa, con el propósito de detectar y descubrir variables de conflictos que se clasifican parciales o imprecisos. 
    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 ¿Qué es el Diagnóstico organizacional y para qué sirve? 
              p.text-small.mb-0 Como refuerzo y complemento de este tema, ver en el material complementario el video: ¿Qué es el Diagnóstico organizacional y para qué sirve? 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=SnJz_2__fC0" target="_blank")
                span Ver video
                i.fas.fa-video
    















</template>

<script>
export default {
  name: 'Tema3',
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
.texto-flip
  position: absolute
  display: flex
  justify-content: center
  bottom: 0
  left: 0
  width: 100%
.imagen-absolute__img
  @media (min-width: $bp-min-lg)
    position: absolute
    top: 0
    left: 0
    width: 100%
    transform: translateY(-50%)
</style>
