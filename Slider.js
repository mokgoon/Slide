(function($){

    $.fn.Slider = function(obj){
        var imgLi, contentWidth, left,  action, button, liIndex, moveValue;

        imgLi = $(this).find('li');                      //  images li obj
        contentWidth = $(this).width();            //   content width size
        action = $(this).find('button');
        $(imgLi).css('position', 'absolute');

        for(var i = 0; i < imgLi.length; i++){
            if($(imgLi).eq(i).hasClass('active')){
                liIndex = i;
            }

            if(liIndex === 0){
                liIndex = 1;
                $('.btn-left').hide();
            }

            $(imgLi).eq(i).css('left', i * contentWidth+'px');
        }


        button = {
           left : action[0],    // left
           right : action[1],  // right
           play : action[2],
           pause : action[3]
        };

        button.play.onclick = function(){
            autoSlider = setInterval(moveRight,1000);
        }

        button.pause.onclick = function(){
            clearInterval(autoSlider);
        }

        // left slide
        button.left.onclick = function(){
            moveLeft();
        }

        button.right.onclick = function(){
            moveRight();
        }

        function moveLeft(){
            for(var i = 0; i < imgLi.length; i++){
                var val = $(imgLi).eq(i).css('left').split('px')[0];
               var _val =  Number(val);
                _val += 400;

                $(imgLi).eq(i).stop().animate({
                    left: _val+'px'
                },300);
                moveValue -= 400;
            }

            liIndex-=1;
            $('.index-item').removeClass('index-item-on');;
            $('.index-item').eq(liIndex-1).addClass('index-item-on');

            console.log('left indx ::: ' + liIndex);

            if(liIndex <= 1){
                $('.btn-left').hide();
                clearInterval(autoSlider);
                autoSlider = setInterval(moveRight,1000);
            }else{
                $('.btn-left').show();
                $('.btn-right').show();
            }

            $(imgLi).removeClass('active');
            $(imgLi).eq(liIndex-1).addClass('active');
        }

        function moveRight(){
            for(var i = 0; i < imgLi.length; i++){
                var val = $(imgLi).eq(i).css('left').split('px')[0];
                val -= 400;

                $(imgLi).eq(i).stop().animate({
                    left: val+'px'
                },300);
                moveValue -= 400;
            }

            $('.index-item').removeClass('index-item-on');;
            $('.index-item').eq(liIndex).addClass('index-item-on');

            liIndex+=1;

            if(liIndex < 1){
                $('.btn-right').hide();
                //clearInterval(autoSlider);
            }else{
                $('.btn-left').show();
            }

            console.log('right indx ::: ' + liIndex);

            if(liIndex === imgLi.length){
                $('.btn-right').hide();
                console.log(autoSlider);
                clearInterval(autoSlider);
                autoSlider = setInterval(moveLeft,1000);
            }

            $(imgLi).removeClass('active');
            $(imgLi).eq(liIndex-1).addClass('active');
        }


    }

})(jQuery);