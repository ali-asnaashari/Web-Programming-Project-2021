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
    }
}).mount('#app');