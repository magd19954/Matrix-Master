$('#document').ready(function(){

    $('#i1').click(function(){
        const currentImgSrc = $(this).attr("src");
        const src1='./images/1a.jpg'
        const src2='./images/1b.jpg'
        if(currentImgSrc===src1){
            $(this).attr("src", src2);
        }
        else{
            $(this).attr("src", src1); 
        }

    });

    $('#i3').click(function(){
        const currentImgSrc = $(this).attr("src");
        const src1='./images/3a.jpg'
        const src2='./images/3b.jpg'
        if(currentImgSrc===src1){
            $(this).attr("src", src2);
        }
        else{
            $(this).attr("src", src1); 
        }

    });

    $('#i2').click(function(){
        const currentImgSrc = $(this).attr("src");
        const src1='./images/2a.jpg'
        const src2='./images/2b.jpg'
        if(currentImgSrc===src1){
            $(this).attr("src", src2);
        }
        else{
            $(this).attr("src", src1); 
        }

    });
})