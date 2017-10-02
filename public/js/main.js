function remove_elem(clickedIndex) {
  if (clickedIndex != -1) {
    $('.received-address[data-idx="' + clickedIndex + '"]').remove();
    var current = $('.selectpicker option').eq(clickedIndex).val();
    var selectedArray = $('#store_selected').val();
    selectedArray = selectedArray.split(',');
    if (selectedArray.indexOf(current) > -1) {
      selectedArray.splice(selectedArray.indexOf(current), 1);
      $('.selectpicker').selectpicker('val', selectedArray);
    }
  }
  else {
    $(this).closest('.received-address').remove();
  }
}
$(document).ready(function() {
  $('.selectpicker').on('changed.bs.select', function(event, clickedIndex, newValue, oldValue) {
    var currentText = $('.selectpicker option').eq(clickedIndex).text();
    var selectedArray = $('.selectpicker').selectpicker('val');
    $('#store_selected').val(selectedArray.join(','));
    if (newValue) {
      var html = $('.received-list').html();
      var received = '<div class="input-group received-address" data-idx="' + clickedIndex + '"><input type="text" class="form-control" value="' + currentText +  '"><span class="input-group-btn"><button class="btn btn-secondary" type="button" onclick="remove_elem(' + clickedIndex + ')">Delete</button></span></div>';
      html += received;
      $('.received-list').html(html);
    }
    else {
      remove_elem(clickedIndex);
    }
  });
  $('.btn-add').click(function (event) {
    var currentText = $('.text-address').val();
    var html = $('.received-list').html();
    var received = '<div class="input-group received-address"><input type="text" class="form-control" value="' + currentText +  '"><span class="input-group-btn"><button class="btn btn-secondary" type="button" onclick="remove_elem(-1)">Delete</button></span></div>';
    html += received;
    $('.received-list').html(html);
  });
});