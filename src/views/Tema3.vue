<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Partes interesadas
    p.mb-5(data-aos='fade-right') Una parte interesada, o también conocida como “stakeholder”, es cualquier individuo, grupo de interés u organización que puede influir en las labores de una empresa. Por otro lado, una parte interesada puede ser una persona interna o externa de una organización que puede afectar las actividades que desarrolla; pueden estar representadas por los clientes, proveedores, trabajadores, propietarios de una empresa, inversionistas, gobierno, entre otros, como se observa en la siguiente figura.
    .margin-n.p-5.mb-5(style='background-color: #FFF9ED')
      .row.justify-content-center.align-items-center
        .col-lg-5.col-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 9 
            span Partes interesadas internas y externas
          img(src='@/assets/curso/temas/tema2/6.svg', alt='')
        .col-lg-5.col-8
          img(src='@/assets/curso/temas/tema2/7.svg', alt='')
      hr.border-3
    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.color-primario.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Partes Interesadas #[em Stakeholder]
              p.text-small.mb-0 Como ampliación a este tema, observar el video: “Partes Interesadas Stakeholder”, que se encuentra en el material complementario.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ir al enlace
                i.fas.fa-link
    p.mb-5(data-aos='fade-right') Según la norma ISO 9001:2015, las partes interesadas se dividen en partes internas y externas; del mismo modo, cada parte establece unos actores adecuados para la aplicación del sistema de gestión de calidad, las cuales son:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/1.svg' alt='AvatarTop')
          div(style='background-color: #E2D9FF').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Clientes
            p Las empresas deben ofrecer productos o servicios que cumplan con todos los estándares de calidad y garantías con el propósito de satisfacer las expectativas de los clientes.
      .col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/2.svg' alt='AvatarTop')
          div(style='background-color: #FAEBCD').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Recursos humanos
            p El desarrollo profesional, seguridad en el trabajo, los planes de carrera y su orientación para lograr una ventaja competitiva deben tomarse en cuenta al momento de definir el entorno de la empresa.
      .col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/3.svg' alt='AvatarTop')
          div(style='background-color: #E2D9FF').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Accionistas, socios o propietarios
            p Son los encargados de buscar mejora continua en sus procesos, para poder crecer la organización, con el fin de mejorar su rentabilidad y productividad, reducir costos y aumentar los beneficios.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/4.svg' alt='AvatarTop')
          div(style='background-color: #FAEBCD').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Proveedores
            p Es importante mantener la relación con los proveedores, porque proporcionan los materiales que se requieren para el desarrollo de las actividades.
      .col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/5.svg' alt='AvatarTop')
          div(style='background-color: #E2D9FF').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Competencia
            p Investigar quiénes son sus competidores permitirá la identificación de amenazas y tener una estrategia para la reacción frente a dicha amenaza.
      .col-lg-4.mb-lg-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/6.svg' alt='AvatarTop')
          div(style='background-color: #FAEBCD').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Agentes sociales 
            p Las organizaciones son instituciones sociales que comparten en todo momento con personas, por lo tanto, es esencial promover el respeto e interactuar de forma constante para tener una imagen positiva que los individuos perciben de la organización a nivel corporativo. 
    p.mb-5(data-aos='fade-right') Un mapeo de stakeholders es una ilustración visual de las personas que pueden afectar en un plan organizacional e identificar cómo están relacionadas. Para su realización, se deben tener en cuenta los siguientes pasos:
    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.p-4(titulo="a. Identificar" style='background-color: #F3EDFF; border: 4px solid #E3D8FF')
        .row.justify-content-center.mb-5
          .col-md-6.mb-4.mb-md-0
            h4 Identificar a las partes interesadas
            p  La fase inicial es elaborar un brainstorming o lluvia de ideas, donde se identificará a todas las partes interesadas: organizaciones, grupos o personas que se puedan ver influenciadas en el proyecto, que tienen una afectación de este o algún problema en su éxito.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/7.jpg', alt='Texto que describa la imagen').mb-3
      .tarjeta.p-4(titulo="b. Analizar" style='background-color: #F3EDFF; border: 4px solid #E3D8FF')
        .row.justify-content-center.mb-5
          .col-md-6.mb-4.mb-md-0
            h4 Analizar
            p  En el segundo paso, se fijarán funciones y proyecciones de las partes interesadas, de tal modo que se detectará y especificará qué tan relevantes son los stakeholders hallados y cuál es su grado de influencia en el ejercicio. 
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/8.svg', alt='Texto que describa la imagen').mb-3
            figcaption Nota. Adaptado de Benavides (2016).
      .tarjeta.p-4(titulo="c. Priorizar" style='background-color: #F3EDFF; border: 4px solid #E3D8FF')
        .row.justify-content-center.mb-5
          .col-md-6.mb-4.mb-md-0
            h4 Priorizar
            p  Este paso consiste en comprender las necesidades de los stakeholders y cómo se perciben en el proyecto. Por esta razón, es indispensable clasificar los grupos de interés claves y establecer sus acciones comunicacionales primordiales. Cabe destacar que cada rol que tendrá un grupo de interés y su grado de afectación determinarán las actividades que debe asumir. 
            a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/9.svg', alt='Texto que describa la imagen').mb-3
            figcaption  Nota. Adaptado de Calvo (s. f.).
      .tarjeta.p-4(titulo="d. Comunicaciones" style='background-color: #F3EDFF; border: 4px solid #E3D8FF')
        .row.justify-content-center.mb-5
          .col-md-6.mb-4.mb-md-0
            h4 Comunicaciones con las partes interesadas
            p  Cuando ya están definidos los grupos de interés cruciales, se iniciará a elaborar y diseñar un plan comunicacional que integre a todos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/10.jpg', alt='Texto que describa la imagen').mb-3
    ModalA(:abrir-modal.sync="modal1")
      figure
        img(src='@/assets/curso/temas/tema3/6.svg', alt='')
    ModalA(:abrir-modal.sync="modal2")
      figure
        img(src='@/assets/curso/temas/tema3/8.svg', alt='')

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

<style lang="sass"></style>
