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
          .tarjetas-icono-up__icono(style='background-color: #F0BD51').p-3
            img(src='@/assets/curso/temas/tema1/3.svg', alt='')
          .tarjetas-icono-up__contenido(style='background-color: #FDF5E5').p-4
            h5.mb-0 Planificación
            p.mb-0 Es la etapa en la que se establecen los objetivos a alcanzar, se definen las estrategias y se establecen los recursos necesarios para alcanzar los objetivos.

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

<style lang="sass"></style>
