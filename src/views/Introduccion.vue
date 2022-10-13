<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-5
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .margin-n(style='background-color: #F4F0FF ; margin-top: 90px').px-5.py-4.position-relative.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-8(data-aos="fade-right") 
          p.mb-0 Para el funcionamiento adecuado y el cumplimiento de objetivos propuestos dentro de una organización, es importante #[b implementar procesos administrativos para planificar las operaciones en diferentes áreas estratégicas, identificar el concepto y características de un diagnóstico organizacional], las técnicas de recolección que debe implementar y cuáles son los indicadores de gestión que debe medir. Asimismo, conocer los principios básicos de responsabilidad social empresarial, su normatividad, la identificación de las partes interesadas o stakeholders y las características del concepto de desarrollo sostenible. 
        .col-lg-4(data-aos="fade-left")
          .h-100.imagen-intro
            img(src='@/assets/curso/temas/intro.svg', alt='')
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.imagen-intro
  position: relative
  top: 0
  width: 100%
  @media (min-width: $bp-max-lg)
    right: 0
    top: 0
    transform: translate(-15%, -30%)
    position: absolute
    width: 400px
</style>
