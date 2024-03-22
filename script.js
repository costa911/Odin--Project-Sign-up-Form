// Function to show notification modal
function showNotificationModal(message) {
    // Create modal markup
    var modalContent = '<div class="modal fade" id="notificationModal" tabindex="-1" role="dialog" aria-labelledby="notificationModalLabel" aria-hidden="true">';
    modalContent += '<div class="modal-dialog" role="document">';
    modalContent += '<div class="modal-content">';
    modalContent += '<div class="modal-header">';
    modalContent += '<h5 class="modal-title" id="notificationModalLabel">Notification</h5>';
    modalContent += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    modalContent += '<span aria-hidden="true">&times;</span>';
    modalContent += '</button>';
    modalContent += '</div>';
    modalContent += '<div class="modal-body">';
    modalContent += message;
    modalContent += '</div>';
    modalContent += '<div class="modal-footer">';
    modalContent += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
    modalContent += '</div>';
    modalContent += '</div>';
    modalContent += '</div>';
    modalContent += '</div>';

    // Append modal markup to body
    $('body').append(modalContent);

    // Show modal
    $('#notificationModal').modal('show');
}

// Submit button click event
$('#submitBtn').click(function() {
    // Show notification modal with message
    showNotificationModal("Thank you, Dr. Chase will be in touch to set up an appointment. <br>This project is part of the Odin Intermediate HTML & CSS course, if you are interested in starting The Odin Project course <a href='https://www.theodinproject.com/' target='_blank'>click here</a>. <br>This project was done by <a href='https://github.com/costa911' target='_blank'>costa911</a>.");
});
