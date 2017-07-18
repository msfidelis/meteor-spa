Template.lista.helpers({

    tarefas: () => {
        return Tarefas.find({})
    },

    formataData: () => {
        return moment(this.data).format("DD/MM/YYYY HH:mm")
    },

    deletaTarefa: () => {
        console.log(this)
    }

})

Template.lista.events({
    "click button": (e, template) => {
        e.preventDefault();
        var tarefa = e.target.value;
        Meteor.call("remove", tarefa)
            //Tarefas.remove({ _id: tarefa })
    }
})