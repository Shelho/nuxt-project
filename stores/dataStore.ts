export const useDataStore = defineStore('interfaceStore', {
    state: () => ({
        menu: [
            { text: "О компании", link: "/" },
            { text: "Контакты", link: "/" },
            { text: "Услуги", link: "/" },
            { text: "Партнёры", link: "/" },
            { text: "Вакансии", link: "/" },
        ],
        contacts: {
            socs: {
                wa: "/",
                tg: "/",
            },
            phone: "+994 55 377 57 11",
            address: "г. Баку, Нариманов р-н, ул. Алескера Гаибова, офис 51А",
            schedules: "пн-пт с 9:00 до 17:00",
        }
    }),

    actions: {
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
}