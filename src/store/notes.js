export default {
    state: {
        title: "Notes App",
        search: '',
        showModal: false,
        showGrid: false,
        darkMode: false,
        modalObj: {
            title: '',
            descr: ''
        },
        currentItem: 0,
        notes: [
          {
            title: "first note",
            descr: "description for First note",
            date: new Date(Date.now()).toLocaleString(),
            priority: 'simple'
          },
          {
            title: "second note",
            descr: "description for Second note",
            date: new Date(Date.now()).toLocaleString(),
            priority: 'medium'
          },
          {
            title: "third note",
            descr: "description for Third note",
            date: new Date(Date.now()).toLocaleString(),
            priority: 'hard'
          },
        ],
        priority: [
            {
                value: 'simple',
                title: 'Обычный',
                checked: true
            },
            {
                value: 'medium',
                title: 'Средний',
                checked: false
            },
            {
                value: 'hard',
                title: 'Высокий',
                checked: false
            },
        ]
    },
    mutations: {
        changePriority (state, payload) {
            state.priority.forEach(item => {
                item.checked = false;
            });
            state.priority[payload].checked = true;
        },
        pushNote (state, payload){
            state.notes.push(payload);
        },
        removeNote (state, payload) {
            state.notes.forEach((item, i) => {
                if(item.title == payload.title && item.descr == payload.descr && item.date == payload.date && item.priority == payload.priority) {
                    state.notes.splice(i, 1);
                }
            })
        },
        updateNote (state, payload) {
            for (const key in payload) {
                state.notes[state.currentItem][key] = payload[key];
            }         
        },
        updateCurrentItem (state, payload) {
            state.notes.forEach((item, i) => {
                if(item.title == payload.title && item.descr == payload.descr && item.priority == payload.priority) {
                    state.currentItem = i;
                }
            })
        },
        setSearch (state, payload){
            state.search = payload;
        },
        setGrid (state) {
            state.showGrid = !state.showGrid;
        },
        setModal (state) {
            state.showModal = !state.showModal;
        },
        setModalObj (state, payload) {
            for (const key in payload) {
                state.modalObj[key] = payload[key];
            }
        },
        setDarkMode (state) {
            state.darkMode = !state.darkMode;
        }
    },
    actions: {
        changePriority ({commit}, payload) {
            commit('changePriority', payload);
        },
        pushNote ({commit}, payload){
            commit('pushNote', payload);
        },
        removeNote ({commit}, payload) {
            commit('removeNote', payload);
        },
        setSearch ({commit}, payload) {
            commit('setSearch', payload);
        },
        setGrid ({commit}) {
            commit('setGrid');
        },
        setModal ({commit}) {
            commit('setModal');
        },
        setModalObj ({commit}, payload) {
            commit('setModalObj', payload);
        },
        updateNote ({commit}, payload) {
            commit('updateNote', payload);
        },
        updateCurrentItem ({commit}, payload) {
            commit('updateCurrentItem', payload);
        },
        setDarkMode ({commit}) {
            commit('setDarkMode');
        }
    },
    getters: {
        getTitle: state => state.title,
        getPriority: state => state.priority,
        getNotes: state => state.notes,
        getSearch: state => state.search,
        getGrid: state => state.showGrid,
        getModal: state => state.showModal,
        getModalObj: state => state.modalObj,
        getCurrentNote: state => state.currentItem,
        getDarkMode: state => state.darkMode
    }
}