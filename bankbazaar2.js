const loanBtn = document.getElementById('dropdownMenuButton');
    const loanList = document.getElementById('dropdown-menu');

    loanBtn.addEventListener('mouseenter', function() {
      loanList.style.display = 'block'; 
    });

    loanBtn.addEventListener('mouseleave', function() {
      loanList.style.display = 'none';
    });


    document.getElementById('continueButton').addEventListener('click', function() {
        var selectedImage = document.querySelector('input[name="selectedImage"]:checked');
        if (!selectedImage) {
          alert('Please select the type of employment');
        } else {
          window.location.href='continue.html'
        }
      });
    
  