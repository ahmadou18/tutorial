<template>
  <section id="men">
    <div class="txt" ref="txt">
      <div class="txt-men">
        <p>01</p>
        <h1>New</h1>
      </div>
      <div class="collection">
        <p>New collection</p>
      </div>
    </div>
    <div class="photo" ref="photo">

    </div>
    <div class="ndphoto" ref="ndphoto">
    </div>
  </section>
</template>
<script>
import anime from 'animejs'
export default {
  name: 'Men',
  methods:{
    textAnimation() {
      anime({
        targets: this.$refs.txt,
        translateY: {
          value:['-100%', 0],
          duration: 600,
          delay: function( el, i ) { return i * 100 },
          easing: [0.645, 0.045, 0.355, 1]
        }
      })
    },

    photoAnimation() {
      anime({
        targets: this.$refs.photo,
        translateY: {
          value:['100%', 0],
          duration: 600,
          delay: function( el, i ) { return i * 100 },
          easing: [0.645, 0.045, 0.355, 1]
        }
      })
    },

    ndPhotoAnimation() {
      anime({
        targets: this.$refs.ndphoto,
        translateY: {
          value:['-100%', 0],
          duration: 600,
          delay: function( el, i ) { return i * 100 },
          easing: [0.645, 0.045, 0.355, 1]
        }
      })
    }

  },
  
  mounted(){
    this.textAnimation();
    this.photoAnimation();
    this.ndPhotoAnimation();
  },

  beforeDestroy(){
    anime({
        targets: this.$refs.txt,
        translateY: {
          value: [0, '-100%'],
          duration: 600,
          easing: [0.645, 0.045, 0.355, 1]
        },
    })

    anime({
        targets: this.$refs.photo,
        translateY: {
          value: [0, '100%'],
          duration: 600,
          easing: [0.645, 0.045, 0.355, 1]
        },
    })

    anime({
        targets: this.$refs.ndphoto,
        translateY: {
          value: [0, '-100%'],
          duration: 600,
          easing: [0.645, 0.045, 0.355, 1]
        },
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #men {
    width: 100%;
    height: 100vh;
  }
</style>
