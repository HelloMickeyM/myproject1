//头部联系我们隐藏
$(function(){
    $('.xg_header .xg_menuLi1[data-nid="7"]').hide();
})
//首页美食自适应
$(function(){
    if($(window).width()>768){
        $('.p1733cd71da6cc5028e381 .data_col').each(function(){
            var imgHeight = $(this).find('.p1733md5ee10d24c54657b').outerHeight(true);
            $(this).find('.p1733m6740cb9be6bac991').css({'margin-top':-imgHeight + 'px','height':imgHeight + 'px'});
        })
    }
})

//服务交替样式
$(function(){
    if($(window).width()>768){
        $('.p1733meeb0d3f8efb6309a .data_col:even').find('.p1733mdd2198491f4a1425').css({'float':'right'});
    }
    if($(window).width()>768){
        $('.p1733m8d096a6409ae78fe a').css({'display':'block','width':'100%','height':'100%','padding-left':'40px'})
    }
    if($(window).width()<767){
        $('.p1733m8d096a6409ae78fe a').css({'display':'block','width':'100%','height':'100%','padding-left':'25px'})
    }
})

//PC首页四大栏目效果
$(function(){
    function widthChange(){
        if($(window).width()>768){

            $('.p1733m34f9bf2845798073 .data_col').last().css({'max-width':'none','width':'624px','display':'block'});
            $('.p1733m2764d99ade179e59').last().css({'height':'140px','max-height':'none','top':'-350px'});
            $('.p1733m34f9bf2845798073 .data_col').each(function(){
                $(this).find('img').css({'max-width':'none','height':'100%','width':'auto'});

                $(this).hover(function(){
                    console.log(111)
                    $(this).css({'max-width':'none','width':'52%'});
                    $(this).siblings().css({'width':'15%'});
                    
                    $(this).find('.p1733m2764d99ade179e59').css({'max-width':'none','width':'624px','display':'block','height':'140px','top':'-350px','max-height':'none'});
                    $(this).siblings().find('.p1733m2764d99ade179e59').css({'height':'70px','max-height':'none','top':'0','max-width':'85%'});
                })
            })
        }
    }
    setTimeout(widthChange,300);
})