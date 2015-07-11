(function($){

    $.fn.Slider = function(obj){
        var imgLi, contentWidth, left,  action, button, liIndex, moveValue;

        imgLi = $(this).find('li');                      //  images li obj
        contentWidth = $(this).width();            //   content width size
        action = $(this).find('button');
        $(imgLi).css('position', 'absolute');


        // init
        function init(){

        }

        function getPageNum(){
            for(var i = 0; i < imgLi.length; i++){
                if($(imgLi).eq(i).hasClass('active')){
                    liIndex = i;


                }
            }
        }


        //console.log(getPageNum());
        getPageNum();

        button = {
           left : action[0],    // left
           right : action[1],  // right
           play : action[2],
           pause : action[3]
        };

        if(liIndex === 0){
            liIndex = 1;
            $('.btn-left').hide();
        }

        // left slide
        button.left.onclick = function(e){
            $(imgLi).removeAttr('style');
            $(imgLi).css('position', 'relative');

            moveValue = liIndex * contentWidth;
            if(imgLi.length > liIndex ){
                $(imgLi).stop().animate({
                    right: '-400px'
                },1300);
            }
            if(imgLi.length-1 === liIndex ){$('.btn-right').hide();}
            liIndex+=1;
            $(imgLi).removeClass('active');
            $(imgLi).eq(liIndex-1).addClass('active');
            e.preventDefault();
        }

        button.right.onclick = function(e){
            $('.btn-left').show();
            moveValue = liIndex * contentWidth;
            if(imgLi.length > liIndex ){
                $(imgLi).stop().animate({
                    left: moveValue+'px'
                },300);
            }
            if(imgLi.length-1 === liIndex ){$('.btn-right').hide();}
            liIndex+=1;

            $(imgLi).removeClass('active');
            $(imgLi).eq(liIndex-1).addClass('active');


            console.log('page ::: '+ liIndex);

            e.preventDefault();
        }


    }

})(jQuery);