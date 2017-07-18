Meteor.methods({

    adiciona: (obj) => {
        Tarefas.insert({ nome: obj.nome, data: new Date(), usuario: obj.usuario })
    },

    remove: (id) => {
        Tarefas.remove({ _id: id })
    }
})