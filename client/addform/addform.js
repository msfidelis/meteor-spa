Template.addform.events({

    "submit form": (e, template) => {
        e.preventDefault()

        var input = $("#tarefa")
        var nome = input.val()

        let id = $("#id_tarefa")

        if (input.val() != "") {

            if (id.val() == "" ) {
                Meteor.call("adiciona", { nome: nome, usuario: Meteor.userId() })
            } else {
                Meteor.call("atualiza", { nome: nome, id: id.val(), usuario: Meteor.userId() })
            }

            input.val("")
            id.val("")
            
        }
    }

})