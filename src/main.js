const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Ввести название...',
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2', 'Заметка 3', 'Заметка 4']
        }
    },
    methods: {
        inputChange(event) {
            console.log(event, event.data, event.target.value)
            this.inputValue = event.target.value 
        },
        addNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ""
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index) {
            this.notes.splice(index, 1)
        }
    },
    computed: {
        doubleCount() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length == 0) {
                //alert("Название не может быть пустым!")
            }
        }
    }
}
const app = Vue.createApp(App)
app.mount('#app')

