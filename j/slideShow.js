//animation list: flip, slice, box3D, pixel, fade, glide, card

$(document).ready(function () {

    $('.slideWiz').slideWiz({
        auto:true,
        speed:5000,
        row: 12,
        col: 35,
        animation: [
           
            'slice',
            
        ],
        file: [
            {
                src: {
                    cover: "image/6.jpg"
                },
                title: 'Er Mangal Singh',
                desc: " Belong the pratapgarh,I interested font-end and back-end development " +
                "I have good skill of HTML,CSS3, JavaScript, RWD, bootstrap, J-Query, PHP " +
                "I done the many project Responsive website, static website.",
                descLength: 220,
                button: {
                  text: 'Submit',
                    url: false,
                    class: 'btn btn-medium btn-danger'
                }
            },
            {
                src: {
                 
                    cover: "image/6.jpg"
                },
                 title: 'Er Mangal Singh',
                desc: " Belong the pratapgarh,I interested font-end and back-end development " +
                "I have good skill of HTML,CSS3, JavaScript, RWD, bootstrap, J-Query, PHP " +
                "I done the many project Responsive website, static website.",
                button: {
                   text: 'Submit',
                    url: false,
                    class: 'btn btn-medium btn-danger'
                }
            },
            {
                src: {
                   
                    cover: "image/6.jpg"
                },
                 title: 'Er Mangal Singh',
                desc: " Belong the pratapgarh,I interested font-end and back-end development " +
                "I have good skill of HTML,CSS3, JavaScript, RWD, bootstrap, J-Query, PHP " +
                "I done the many project Responsive website, static website.",
                descLength: 190,
                button: {
                   text: 'Submit',
                    url: false,
                    class: 'btn btn-medium btn-danger'
                }
            },
            {
                src: {
                    cover: "image/6.jpg"
                },
                title: 'Er Mangal Singh',
                desc: " Belong the pratapgarh,I interested font-end and back-end development " +
                "I have good skill of HTML,CSS3, JavaScript, RWD, bootstrap, J-Query, PHP " +
                "I done the many project Responsive website, static website.",
                button: {
                    text: 'Submit',
                    url: false,
                    class: 'btn btn-medium btn-danger'
                }
            }
        ]

    });

});
