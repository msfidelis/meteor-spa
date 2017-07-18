Template.lista.helpers({

    tarefas: () => {
        return Tarefas.find({}, {sort: {checked: 1}})
    },

    formataData: () => {
        return moment(this.data).format("DD/MM/YYYY HH:mm")
    },

    deletaTarefa: () => {
        console.log(this)
    }

})

Template.lista.events({

    "click .editatask": (e, template) => {
        var id_tarefa = e.target.value

        Meteor.call("task", id_tarefa, (err, result) => {
            console.log(result)

            let input = $("#tarefa")
            input.val(result.nome)

            let id = $("#id_tarefa")
            id.val(result._id)
        })
    },

    "click .deletatask": (e, template) => {
        e.preventDefault();
        var tarefa = e.target.value;
        console.log(e)
        Meteor.call("remove", tarefa)
            //Tarefas.remove({ _id: tarefa })
    },

    "click .mudastatus": (e, template) => {
        e.preventDefault();
        var tarefa = e.target.value;
        Meteor.call("mudastatus", tarefa)
    }
})