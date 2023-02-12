// document.addEventListener('DOMContentLoaded', function() {
//     var submitButton = document.querySelector('input[type="submit"]');
//     var inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    
//     submitButton.disabled = true;
    
//     for (var i = 0; i < inputs.length; i++) {
//       inputs[i].addEventListener('input', function() {
//         var empty = false;
//         for (var j = 0; j < inputs.length; j++) {
//           if (inputs[j].value === '') {
//             empty = true;
//             break;
//           }
//         }
        
//         submitButton.disabled = empty;
//       });
//     }
//   });