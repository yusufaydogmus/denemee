const app= Vue.createApp({
    data(){
        return{
            text:'',
            text2:'',

        };
    },
    methods: {
        updateInput(e){
            this.text=e.target.value

        }
        
    },


}).mount("#app"); //