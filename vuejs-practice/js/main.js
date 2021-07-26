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
            },
            src : 'https://picsum.photos/200/300',
            alt : 'photo',
            href : 'https://google.com',
            text : 'ali',
            html : '<strong>hello</strong>'
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