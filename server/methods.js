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

    mudastatus: (id) => {
        var tarefa = Tarefas.findOne({usuario: Meteor.userId(), _id: id})
        tarefa.checked = !tarefa.checked
        Tarefas.update(id, {$set: {checked: tarefa.checked}} )
    },

    task: (id) => {
        console.log(id)
        return Tarefas.findOne({usuario: Meteor.userId(), _id: id})
    }
})