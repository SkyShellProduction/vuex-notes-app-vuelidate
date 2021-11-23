<template>
  <transition name="show">
      <div class="modal" @click="$store.dispatch('setModal')">
        <div class="modal__content" @click.stop>
          <span class="modal__close" @click="$store.dispatch('setModal')">X</span>
          <form @submit.prevent="changeNote" class="modal__form">
             <label> Title </label>
            <input type="text" v-model="title" required />
            <label> Description </label>
            <textarea v-model="descr" required></textarea>
            <button  class="btn btnPrimary">
              change note
            </button>
          </form>
        </div>
      </div>
  </transition>
</template>

<script>
export default {
  computed: {
      title: {
        get () {
          return this.$store.getters.getModalObj.title
        },
        set (value) {
          this.$store.dispatch('setModalObj', {title: value})
        }
      },
      descr: {
        get () {
          return this.$store.getters.getModalObj.descr
        },
        set (value) {
          this.$store.dispatch('setModalObj', {descr: value})
        }
      },
      getModalObj () {
        return this.$store.getters.getModalObj;
      },
      getCurrentItem () {
        return this.$store.getters.getCurrentItem;
      }
  }
  ,
  methods: {
     changeNote () {
        let obj = {
          title: this.title,
          descr: this.descr,
          date: new Date(Date.now()).toLocaleString()
        }
        this.$store.dispatch('updateNote', obj);
        this.$store.dispatch('setModal');
     },
  },


};
</script>

<style lang="scss">
// .show-enter{
//     opacity: 0.5;
// }
.show-enter {
  opacity: 0
}
.show-leave-active {
  opacity: 0
}
.show-enter .modal__content,
.show-leave-active .modal__content {
  transform: scale(1.2);
  transition: 0.4s linear;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.897);
  display: flex;
  transition: 0.2s;
  align-items: center;
  justify-content: center;
  z-index: 100;
  &__content {
    max-width: 450px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    position: relative;
    padding: 50px 20px;
    border-radius: 15px;
  }
  input,
  textarea {
    box-shadow: 0 0 5px 1px #000;
  }
  button {
    display: block;
    margin: 20px auto 0;

  }
  &__form{
    width: 100%;
  }
  &__close {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 26px;
    font-weight: bold;
    cursor: pointer;
  }
}

</style>