$(document).ready(function() {
$("#contact").validate({
	debug: true,
	errorClass: "alert alert-danger",
	errorLabelContainer: "#output-area",
	errorElement: "div",
	//rules here define what is good or bad input
	//each rule starts with the form element's NAME attribute
	rules: {
		name:{
			required: true
		},
		email:{
			email: true,
			required: true
		},
		message:{
			required: true,
			maxlength: 2000
		}
	},

	//error message to be displayed to the end user when rules above dont pass
	messages:{
		name:{
			required: "Name is required field"
		},
		email:{
			required: "email is required field",
			email: "Invalid email"
		},
		message:{
			required: "Message is required",
			maxlength: "Message is too long"
		}
	},
	submitHandler: function(form) {
		$("#contact").ajaxSubmit({
			type: "POST",
			url: $("#contact").attr("action"),
			success: function(ajaxOutput) {
				$("output-area").css("display", "")
				$(output-area).html(ajaxOutput)

			}
		})
	}
})
})