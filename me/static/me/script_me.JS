


$(window).on('load',function () {
//    $.getScript('app.JS');
    $('#load').fadeOut('slow');
    $('p').hide();
    $('.photo').fadeIn();



    $('#me').typeIt({
        speed:80,
        deleteSpeed:400,
        callback:function () {
            $('#get').effect('slide',{direction:"up"},{duration:800});
            $('#reach').effect('slide',{direction:"down"},{duration:1200});
            $('.first').click(function () {
                alert("Mayank is yet to write a blog!");
            })


            $('.second').click(function(){
                    var iteration=$(this).data('iteration')||1
                    switch (iteration) {
                        case 1:
                         {

                            // $('div').find('.intro').removeClass('col-lg-8').addClass('col-lg-6');
                            // $('div').find('.photo').removeClass('col-lg-4').addClass('col-lg-6').removeClass('photo').addClass('work-toggle');

                             $('.photo').hide();
                             $('.work-toggle').effect('slide',{direction:"right"},{duration:800});

                             break;
                        }

                        case 2:
                        {
                            // $('div').find('.intro').removeClass('col-lg-6').addClass('col-lg-8');
                            // $('div').find('.photo').removeClass('col-lg-6').addClass('col-lg-4').addClass('photo').removeClass('work-toggle');
                            // $('.photo').typeIt().tiType('gt');
                            $('.photo').effect('slide',{direction:"left"},{duration:800});
                            $('.work-toggle').hide();
                            break;
                        }
                    }
                    iteration++;
                    if (iteration>2) iteration=1
                    $(this).data('iteration',iteration)
            })




            
            //for the reach buttons
            $('.fa-envelope').click(function () {
                window.location.href = "mailto:mayankl@iitk.ac.in?body=I am a swift replier :)...";
            })
            $('.fa-facebook-official').click(function () {
                window.open('https://www.facebook.com/mayank.lunayach');
            })
            $('.fa-google-plus-official').click(function () {
                window.open('https://plus.google.com/102225293629719924117');
            })
            $('.fa-twitter').click(function () {
                window.open('https://twitter.com/mayank_lunayach');
            })
            $('.fa-quora').click(function () {
                window.open('https://www.quora.com/profile/Mayank-Lunayach-1');
            })
            $('.fa-linkedin').click(function () {
                window.open('https://www.linkedin.com/in/mayank-lunayach-3a213a147/?trk=uno-choose-ge-no-intent&dl=no');
            })
            $('.fa-github').click(function () {
                window.open('https://github.com/radon12/Front-end');
            })


        }
    //done with the reach buttons
    }).tiPause(1000).tiType('Hi! <i class="fa fa-smile-o" aria-hidden="true"></i>').tiPause(200).tiDelete(1).tiType(' I am Mayank, ').tiBreak().tiPause(500).tiSettings({speed:40}).tiType('<div id="subject">electrical engineering sophomore.</div>').tiPause(800).tiSettings('cursor','false');



});







