Template.addform.events({

    "submit form": (e, template) => {
        e.preventDefault()

        var input = $("#tarefa")
        var nome = input.val()

        if (input.val() != "") {
            Meteor.call("adiciona", { nome: nome, usuario: Meteor.userId() })
            input.val("")
        }
    }

})