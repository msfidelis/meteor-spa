Meteor.methods({

    adiciona: (obj) => {
        Tarefas.insert({ nome: obj.nome, data: new Date(), usuario: obj.usuario })
    },

    atualiza: (obj) => {
        Tarefas.update(obj.id,{$set: {nome: obj.nome, data: new Date()}} )
    },

    remove: (id) => {
        Tarefas.remove({ _id: id })
    },

    task: (id) => {
        console.log(id)
        return Tarefas.findOne({usuario: Meteor.userId(), _id: id})
    }
})