Vue.createApp({
    data(){
        return{
            title:'vuejs-practice',
            bool: false,
            obj:{
                name:'ali'
            },
            arr : ['one','two'],
            fun:() => {
                return 'hello'
            }
        }
    },
    methods: {
        welcome(){
            return this.title
        },
        bye(){
            let title = 'bye';
            return title;
        }
    }
}).mount('#app');