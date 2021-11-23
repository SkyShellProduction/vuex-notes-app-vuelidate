<template>
  <div class="new-note">
    <p v-if="message" class="error__message">{{message}}</p>
    <label> Title </label>
    <input type="text" v-model="title"/>
    <label> Description </label>
    <textarea v-model="descr"></textarea>
    <p style="margin-top: 20px;">Приоритет</p>
    <div class="priority">
      <label v-for="(item, i) in priority" :key="i">
        <input type="radio" name="priority" :value="item.value" :checked="item.checked" @click="changePriority(i)"/>
             <span>{{item.title}}</span>
       </label>
    </div>
    <button class="btn btnPrimary" @click="addNote">new note</button>
  </div>
</template>
<script>
export default {
  props: {
    
  },
  data () {
    return {
        priority: this.$store.getters.getPriority,
        title: '',
        descr: '',
        message: null
    }
  },
  created () {
     
  },
  methods: {
      changePriority (index) {
          this.$store.dispatch('changePriority', index)
      },
      addNote(){
         if(this.title !== '' && this.descr !== ''){
            let curPrior = this.priority.find(item => item.checked == true).value;
            let note = {
                title: this.title,
                descr: this.descr,
                date: new Date(Date.now()).toLocaleString(),
                priority: curPrior
            }
            this.$store.dispatch('pushNote', note);
            this.title = '';
            this.descr = '';
            this.changePriority(0);
            this.message = null;
         }
         else {
           this.message = 'Все поля должны быть заполнены';
         }
      }
  },
};
</script>
<style lang="scss">
.error__message{
  color: red;
  font-size: 16px;
  margin: 10px 0;
}
.new-note {
  text-align: center;
  margin-bottom: 30px;
}
.priority{
    margin: 20px 0;
    display: flex;
    justify-content: center;
    label{
        margin: 0 20px;
        display: flex;
        align-items: center;
    }
    input{
        display: block;
        padding: 0;
        margin: 0;
        width: auto;
        margin-right: 7px;
    }

}
</style>