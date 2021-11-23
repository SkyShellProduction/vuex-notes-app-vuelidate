<template>
  <div :class="['wrapper', darkMode ? 'dark' : '']">
    <span :class="['theme-btn', darkMode ? 'active' : '']" @click="$store.dispatch('setDarkMode')"></span>
    <div class="wrapper-content">
      <section>
        <div class="container">
              <NewNote></NewNote>
              <div class="note-header">
                  <h1>{{ title }}</h1>
                  <Search></Search>
                  <div class="icons">
                      <svg :class="{grid : !grid}" @click="$store.dispatch('setGrid')"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                      <svg :class="{grid: grid}" @click="$store.dispatch('setGrid')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
                  </div>
              </div>
              <Notes :notes="notesFilter"></Notes>
              <Modal v-show="showModal"></Modal>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import NewNote from './components/NewNote.vue';
import Notes from './components/Notes.vue';
import Search from './components/Search.vue';
import Modal from './components/Modal.vue';
export default {
  components: {
    NewNote,
    Notes,
    Search,
    Modal
  },
  
  computed: {
      title () {
        return this.$store.getters.getTitle
      },
      notesFilter(){
        let notes = this.$store.getters.getNotes;
        let search = this.$store.getters.getSearch;
        if(!search) return notes;
        search = search.trim().toLowerCase();
        let arr = notes.filter(item => {
          if(item.title.toLocaleString().indexOf(search) != -1) return item;
        })
        return arr;
      },
      grid () {
        return this.$store.getters.getGrid;
      },
      showModal (){
        return this.$store.getters.getModal
      },
      darkMode () {
        return this.$store.getters.getDarkMode
      }

  },
  watch: {
   
  },
  methods: {
    
  },
  // created () {
  //   this.title = this.$store.getters.getTitle;
  // }
};
</script>
<style lang="scss">
    .wrapper.dark{
      background: rgba(0, 0, 0, 0.911);
      color: #fff;
    }
    svg.grid{
      color: #209ff3;
    }
    .theme-btn{
      position: absolute;
      right: 30px;
      top: 30px;
      display: block;
      width: 55px;
      height: 30px;
      background: #fff;
      border-radius: 15px;
      display: flex;
      align-items: center;
      box-shadow: 0 0 50px 2px #35ddc1;
      cursor: pointer;
      z-index: 100;
      &::before{
        content: '';
        display: block;
        background: #000;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        position: absolute;
        left: 1px;
        transition: 0.3s linear;
      }
      &.active{
        background: rgb(17, 15, 15);
         box-shadow: 0 0 50px 2px #e7ebea;
        &::before{
          left: 25px;
          background: rgb(255, 255, 255);
        }
      }
    }
</style>



