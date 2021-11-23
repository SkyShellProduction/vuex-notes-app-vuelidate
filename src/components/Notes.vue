<template>
  <div class="notes">
    <div v-for="(note, i) in notes" :key="i" :class="['note', note.priority, grid ? 'full' : '']" @click="sendObj(i)">
      <div class="note-header">
        <p class="note-title">{{ note.title }}</p>
        <p style="cursor: pointer" class="note-remove" @click.stop="removeNote(i)">X</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    }
  },
  computed: {
      grid () {
        return this.$store.getters.getGrid; 
      }
  },
  methods: {
      removeNote (index) {
        let obj = this.notes[index];
        this.$store.dispatch('removeNote', obj);
      },
      sendObj (index) {
          let modalObj = {
            title: this.notes[index].title,
            descr: this.notes[index].descr,
            priority: this.notes[index].priority
          }
          this.$store.dispatch('setModalObj', modalObj);
          this.$store.dispatch('setModal');
          this.$store.dispatch('updateCurrentItem', modalObj);
      }
  },
};
</script>

<style lang="scss">

.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: 0.3s linear;
  &-title{
    text-transform: capitalize;
  }
  &:hover{
    transform: translateY(-6px);
    box-shadow: 0 0 5px 1px #000;
  }
  &.medium{
    background: rgb(255, 242, 120);
  }
  &.hard{
    background: rgb(255, 103, 65);
  }
  &.full{
      width: 100%;
  }
  &-body {
    p {
      margin: 20px 0;
      color: #000;
    }
    span {
      font-size: 14px;
      color: #999;
    }
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
        font-size: 32px;
    }
    p {
      color: #402caf;
      font-size: 22px;
    }
    svg{
        margin-right: 12px;
        color: #999;
        cursor: pointer;
        &.active{
            color: #402caf;
        }
        &:last-child{
            margin-right: 0;
        }
    }
  }
}
</style>