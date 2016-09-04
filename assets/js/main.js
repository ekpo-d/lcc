$(document).ready(function(){
  $("#js-rotating").Morphext({
    animation: "pulse",
    separator: "|",
    speed: 4000
  })

  $('button.navbar-toggle').click(function(){
    $('div#navbar.navbar-collapse').css('display', 'none')

    if ($('nav .hamburger').css('display') === 'none'){
      $('.navbar-toggle').addClass('active')
      $('nav .hamburger').slideDown('normal').show()
    }
    else{
      $('nav .hamburger').slideUp('slow')
      $('.navbar-toggle').removeClass('active')
    }
  })
})
