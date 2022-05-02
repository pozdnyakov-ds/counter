const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Ввести название...',
            inputValue: ''
        }
    },
    methods: {
        inputChange(event) {
            console.log(event, event.data, event.target.value)
            this.inputValue = event.target.value 
        }
    },
}
const app = Vue.createApp(App)
app.mount('#app')

