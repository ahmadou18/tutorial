<template>
  <section id="new">
    <div class="txt" ref="txt">
      <div class="txt-new">
        <p>01</p>
        <h1>New</h1>
      </div>
      <div class="collection">
        <p>New collection</p>
      </div>
    </div>
    <div class="photo" >
      <div class="hidden">
        <div class="photocontainer" ref="photo">

        </div>
      </div>
    </div>
    <div class="ndphoto" >
      <div class="hidden2">
        <div class="ndphotocontainer" ref="ndphoto">

        </div>
      </div>
    </div>
  </section>
</template>
<script>
import anime from 'animejs'
export default {
  name: 'New',
  methods:{
    textAnimation() {
      anime({
        targets: this.$refs.txt,
        height: {
          value:[ 0,'100%'],
          duration: 600,
          delay: function( el, i ) { return i * 100 },
          easing: [0.645, 0.045, 0.355, 1]
        }
      })
    },

    photoAnimation() {
      anime({
        targets: this.$refs.photo,
        height: {
          value:[0,'100%'],
          duration: 600,
          delay: function( el, i ) { return i * 100 },
          easing: [0.645, 0.045, 0.355, 1]
        }
      })
    },

    ndPhotoAnimation() {
      anime({
        targets: this.$refs.ndphoto,
        width: {
          value:[0,'100%'],
          duration: 1000,
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
        height: {
          value: ['100%', 0],
          duration: 600,
          easing: [0.645, 0.045, 0.355, 1]
        },
    })

    anime({
        targets: this.$refs.ndphoto,
        width: {
          value: ['100%', 0],
          duration: 1000,
          easing: [0.645, 0.045, 0.355, 1]
        },
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #new {
    width: 100%;
    height: 100vh;
      .photocontainer {
        background-image: url('../assets/tamara-bellis-427162-unsplash-min.jpg');
      }
      .ndphotocontainer {
        background-image: url('../assets/florian-perennes-1169691-unsplash.jpg')
      }
  }
</style>
