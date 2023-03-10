document.addEventListener('DOMContentLoaded', function() {
    var $scope = $(".dnd_module_9742c60d3a2ee81fffada3eade8d931d");
    $scope.find('.headerMenu .btnSearch').unbind('click.btnSearch').bind('click.btnSearch', function () {
        var $header = $(this).closest('#header');
        $header.addClass('open');
        $header.find('#dimmedSlider').one("click", function () {
            $header.removeClass('open');
        });
    });
    $('.xans-layout-searchheader').find('button.btnDelete').unbind('click.btnDelete').bind('click.btnDelete', function () {
        $('.topSearch').find('input#keyword').attr('value', '').focus();
    });
});
(function() {
    function pageLoaded(){
    }
    function dndComponent() {
  
        var $scope = $(".dnd_module_c785e267507864e0f86dfc2033986f74");
        var calculateNavigationCategoryTimer = null,
            $navigation = $scope.find("#navigation");
  
        function calculateNavigationCategory() {
  
            var $navigationCategory = $("#navigation > .inner .category"),
                $categoryChild = $navigationCategory.children(),
                calculate = 0;
  
            if(!$navigationCategory.length) return;
  
            $categoryChild.each( function( idx ) {
                calculate = calculate + $(this).outerWidth(true) + parseInt( $( this ).css('marginLeft'),10 );
            } );
  
            if( $navigationCategory.width() < calculate + 50 ) {
  
                $("#navigation").addClass('isShort');
  
            } else {
  
                $("#navigation").removeClass('isShort');
  
            }
  
        }
  
        if( $navigation.length ) {
  
            $(window).bind('resize.calculateNavigationCategory', function() {
                if(calculateNavigationCategoryTimer) clearTimeout( calculateNavigationCategoryTimer );
                calculateNavigationCategoryTimer = setTimeout(calculateNavigationCategory, 100);
            }).trigger("resize.calculateNavigationCategory");
  
        }
  
        $scope.find('.eToggleCateLayer').click(function () {
            $scope.find('> nav').toggleClass('open');
            $('.navDimmed').toggleClass('show');
        });
  
    }
  
    if (document.readyState == 'complete') {
        dndComponent();
    } else {
        document.addEventListener('DOMContentLoaded', dndComponent);
        document.addEventListener('DOMContentLoaded', pageLoaded);
    }
  
})();
(function() {
    function pageLoaded() {
    }
    function dndComponent() {
        var $scope = $('.dnd_module_a240bc49ca24f8328aa623df4b028fda'),
            $swiperCarousel = $scope.find(".swiper-carousel"),
            $swiperSlide = $scope.find(".swiper-slide");
        if( $swiperCarousel.length && $swiperSlide.length >1 ) {
            $swiperCarousel.each( function(idx) {
                var $self = $(this),
                    $wrapper = $self.find('.swiper-wrapper'),
                    $children = $wrapper.children(),
                    calculate = 0;
                $children.each(function(idx) { calculate += $(this).outerWidth(true); });
                new Swiper(this, {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 0,
                    longSwipesRatio: 1,
                    setWrapperSize: calculate,
                    pagination: {
                        el: '.navigation',
                        clickable: true,
                    },
                    breakpoints: {
                        // when window width is <= 320px
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            // spaceBetween: 10
                        },
                        // when window width is <= 480px
                        480: {
                            slidesPerView: 1,
                            slidesPerGroup: 1
                            // spaceBetween: 20
                        }
                    }
                });
            });
        }
    }
    if (document.readyState == 'complete') {
        dndComponent();
    } else {
        document.addEventListener('DOMContentLoaded', dndComponent);
        document.addEventListener('DOMContentLoaded', pageLoaded);
    }
})();
document.addEventListener('DOMContentLoaded', function() {
    var $scope = $(".dnd_module_92dd6f7ac13d81237bb5f8047fb78f58");
    // ???????????? ??? ?????????
    $('#tabProduct a').click(function(e){
        var oTarget = $(this).attr('href');
        $(this).parent('li').addClass('selected').siblings().removeClass('selected');
        $('#tabProduct a').each(function(){
            var oSiblings = $(this).attr('href');
            if (oTarget != oSiblings) {
                $(oSiblings).hide();
            } else {
                $(oTarget).show();
            }
        });
        removePagingArea(oTarget);
        if(e) e.preventDefault();
    });
    // ?????? ????????? ???????????? ????????? ????????? ??????
    function removePagingArea(oTarget)
    {
        if ($(oTarget).length < 1 && (oTarget != '#prdReview' || oTarget != '#prdQna')) return;
        if ($(oTarget).css('display') == 'block') {
            if (oTarget == '#prdReview') {
                //var record = $('#prdReview .xans-record-:first', '.xans-product-review');
                var record = $('.xans-record-:first', '.xans-product-review');
                if (record.length < 1 || record.is(':not(:visible)')) {
                    $('.xans-product-reviewpaging').remove();
                }
            } else if (oTarget == '#prdQnA') {
                //var record = $('#prdQnA .xans-record-:first', 'xans-product-qna');
                var record = $('.xans-record-:first', '.xans-product-qna');
                if (record.length < 1 || record.is(':not(:visible)')) {
                    $('.xans-product-qnapaging').remove();
                }
            }
        }
    }
    //???????????? productSet ???????????? ??????, ?????? ??????
    var productSetToggle = function(){
        $('.productSet .eToggleSet').live('click', function(){
            $(this).parents('.productSet').toggleClass('closed');
            $(this).parents('.productSet').find('.product').slideToggle();
        });
    };
    $(document).ready(function() {
        productSetToggle();
        // ????????????, ????????????, ???????????? ????????? ????????????
        $('#actionCartClone, #actionWishClone, #actionBuyClone, #actionWishSoldoutClone').unbind().bind('click', function() {
            try {
                var id = $(this).attr('id').replace(/Clone/g, '');
                if (typeof(id) !== 'undefined') $('#' + id).trigger('click');
                else return false;
            } catch(e) {
                return false;
            }
        });
        // ?????????????????? ????????? ???????????? ??????
        function productDetailOrigin(){
            var imgChk = $('#prdDetailContent').find('img').length;
            if(imgChk <= 0){
                $('#prdDetailBtn').remove();
            }
        } productDetailOrigin();
        // ?????? ???????????? ????????? ????????? ????????? ??????
        var oTarget = $('.xans-product-mobileimage ul li');
        var oAppend = oTarget.first().children('p').clone();
        oTarget.not(':first').each(function() {
            $(this).children().wrap(function() {
                return '<p class="thumbnail">' + $(this).html() + oAppend.html() + '</p>';
            });
            $(this).children('p').children('img:first').remove();
        });
        //???????????? ????????????
        $.fn.prdZoom = function(param){
            var ul     = param.target.find('.xans-product-addimage > ul'),
                detail = param.target.find('a#prdDetailImg'),
                swipe  = param.target.find('.xans-product-mobileimage > ul > li'),
                add    = param.target.find('.xans-product-addimage > ul > li');
            var zoom = {
                init : function(){
                    function structMobile(){
                        swipe.unbind().bind('click', function(){
                            var sZoomUrl = '/product/image_zoom.html' + $(this).data('param') + '&order=' + $(this).index();
                            zoom.showZoom(sZoomUrl);
                        });
                        add.mouseover(function(){
                            try {
                                $xans_product_mobileimage_slider_0.moveTab($(this).index());
                            } catch (e) { }
                            detail.data('order', $(this).index());
                        });
                        detail.unbind().bind('click', function(){
                            var iOrder =  $(this).data('order') || 0,
                                sZoomUrl = '/product/image_zoom.html' + $(this).data('param') + '&order=' + iOrder;
                            zoom.showZoom(sZoomUrl);
                        });
                    }
                    structMobile();
                },
                showZoom : function(sZoomUrl){
                    window.open(sZoomUrl, 'image_zoom', 'toolbar=no,scrollbars=auto,resizable=yes,width=560,height=710,left=0,top=0', this);
                    return false;
                }
            }
            zoom.init();
        };
        // ???????????? : ???????????? ?????????
        $.fn.prdZoom({
            target : $('.xans-product-image')
        });
    });
    /**
                         * ???????????? ????????????
                         */
    $(document).ready(function(){
        $('.xans-product-review a').click(function(e) {
            e.preventDefault();
            var no = $(this).attr('href').replace(/(\S*)[?&]no=(\d+)(\S*)/g, '$2');
            var $obj = $('#product-review-read_'+no);
            //????????? ???????????? ?????? ??????
            if ($obj.length > 0) {
                if ($obj.css('display') =='none') {
                    $obj.show();
                } else {
                    $obj.hide();
                }
                return;
            }
            REVIEW.getReadData($(this));
        });
        // ???????????? ??? ?????? ???????????????
        var href = document.location.href.split('#')[1];
        if (href == 'use_review' || href == 'prdReview') {
            $('a[name="use_review"]').trigger('click');
        }
    });
    var PARENT = '';
    var OPEN_REVIEW = '';
    window['REVIEW'] = {
        getReadData : function(obj, eType)
        {
            if (obj != undefined) {
                PARENT = obj;
                var sHref = obj.attr('href');
                var pNode = obj.parents('li');
                var pass_check = '&pass_check=F';
            } else {
                var sHref = PARENT.attr('href');
                var pNode = PARENT.parents('li');
                var pass_check = '&pass_check=T';
            }
            var sQuery = sHref.split('?');
            var sQueryNo = sQuery[1].split('=');
            if (OPEN_REVIEW == sQueryNo[1]) {
                $('#product-review-read').remove();
                OPEN_REVIEW = '';
                return false;
            } else {
                OPEN_REVIEW = sQueryNo[1];
            }
            $.ajax({
                url : '/exec/front/board/product/4?'+sQuery[1]+pass_check,
                dataType: 'json',
                success: function(data) {
                    $('#product-review-read').remove();
                    var sPath = document.location.pathname;
                    var sPattern = /^\/product\/(.+)\/([0-9]+)(\/.*)/;
                    var aMatchResult = sPath.match(sPattern);
                    if (aMatchResult) {
                        var iProductNo = aMatchResult[2];
                    } else {
                        var iProductNo = getQueryString('product_no');
                    }
                    var aHtml = [];
                    //?????? ?????? ??????
                    if (false === data.read_auth && eType == undefined) {
                        alert(decodeURIComponent(data.alertMSG));
                        return false;
                    }
                    if (data.is_secret == true) {
                        // ????????? ???????????? ?????? ???
                        aHtml.push('<form name="SecretForm_4" id="SecretForm_4">');
                        aHtml.push('<input type="text" name="a" style="display:none;">');
                        aHtml.push('<div class="view secret">');
                        aHtml.push('<span class="alert">??? ?????? ??????????????????.</span>');
                        aHtml.push('<div class="formGroup"><input type="password" id="secure_password" name="secure_password" onkeydown="if (event.keyCode == 13) '+data.action_pass_submit+'"> <input type="button" value="??????" onclick="'+data.action_pass_submit+'" class="button"></div>');
                        aHtml.push('</div>');
                        aHtml.push('</form>');
                    } else {
                        // ??? ??????
                        if (data.read['content_image'] != null) {
                            var sImg = data.read['content_image'];
                        } else {
                            var sImg = '';
                        }
                        aHtml.push('<div class="view comment">');
                        aHtml.push('<div id="ec-ucc-media-box-'+ data.read['no'] +'"></div>');
                        aHtml.push('<p>'+data.read['content']+'</p>');
                        aHtml.push('<p>'+sImg+'</p>');
                        aHtml.push('<div class="formGroup">');
                        if (data.comment != undefined) {
                            aHtml.push('<div class="gLeft">');
                            aHtml.push('<a href="#none" class="btnReply" onclick="REVIEW.comment_view('+data.read['no']+');">?????? <span class="number">'+data.read['comment_count']+'</span></a>');
                            aHtml.push('</div>');
                        }
                        aHtml.push('<div class="gRight">');
                        aHtml.push('<a href="/board/product/modify.html?board_act=edit&no='+data.no+'&board_no=4&link_product_no='+iProductNo+'" class="button theme1">??????</a>');
                        if (data.comment != undefined) {
                            aHtml.push('<a href="#none" class="button theme2" onclick="REVIEW.comment_write(this);">????????????</a>');
                        }
                        aHtml.push('</div></div>');
                        // ???????????????
                        if (data.comment != undefined && data.comment.length != undefined) {
                            aHtml.push('<ul class="brdCmt" id="commentList_'+data.read['no']+'" style="display:none;">');
                            for (var i=0; data.comment.length > i; i++) {
                                //???????????????
                                if (data.comment[i]['comment_reply_css'] == undefined) {
                                    aHtml.push('<li id="'+data.comment[i]['comment_reply_id']+'">');
                                    aHtml.push('<div class="info">');
                                    aHtml.push('<span class="point '+data.use_point+'"><img src="//img.echosting.cafe24.com/skin/dnd_ko_KR/common/module/board/ico_star'+data.comment[i]['comment_point_count']+'.png" alt="'+data.comment[i]['comment_point_count']+'???" height="10" /></span>');
                                    aHtml.push('<span class="writer" title="?????????">'+data.comment[i]['comment_name']+'</span>');
                                    aHtml.push('<span class="regdate" title="?????????">'+data.comment[i]['comment_write_date']+'</span>');
                                    aHtml.push('</div>');
                                    aHtml.push('<div class="comment">'+data.comment[i]['comment_content']+'</div>');
                                    if (data.comment[i]['comment_reply_display'] == true) {
                                        aHtml.push('<div class="formGroup">'+'<div class="gLeft">');
                                        aHtml.push('<a href="#none" class="btnReply replyList" onclick="REVIEW.comment_reply_view('+data.comment[i]['comment_no']+')">????????? ?????? <span class="number">'+data.comment[i]['comment_reply_count']+'</span></a>');
                                        aHtml.push('</div>');
                                        aHtml.push('<div class="gRight">');
                                        aHtml.push('<a href="#none" class="button theme2" onclick="'+data.comment[i]['action_comment_reply_new']+'">??????</a>');
                                        aHtml.push('</div>');
                                        aHtml.push('</div>');
                                    }
                                    aHtml.push('</li>');
                                } else {
                                    //????????? ???????????????
                                    aHtml.push('<li class="replyArea" style="display:none;" id="'+data.comment[i]['comment_reply_id']+'">');
                                    aHtml.push('<div class="info">');
                                    aHtml.push('<span class="writer" title="?????????">'+data.comment[i]['comment_name']+'</span>');
                                    aHtml.push('<span class="regdate" title="?????????">'+data.comment[i]['comment_write_date']+'</span>');
                                    aHtml.push('</div>');
                                    aHtml.push('<div class="comment">'+data.comment[i]['comment_content']+'</div>');
                                    aHtml.push('</li>');
                                }
                            }
                            aHtml.push('</ul>');
                        }
                        // ????????????
                        if (data.comment_write != undefined) {
                            aHtml.push('<form name="commentWriteForm_4'+data.key+'" id="commentWriteForm_4'+data.key+'" style="display:none;">');
                            aHtml.push('<div class="brdCmtWrite">');
                            aHtml.push('<div class="brdEditor">');
                            aHtml.push('<strong class="titEditor">????????????</strong>');
                            aHtml.push('<div class="info"><span class="name">' +data.comment_write['comment_name']+ '</span><span class="password">' +data.comment_write['comment_password']+ '</span></div>');
                            aHtml.push('<p class="help ' +data.comment_write['password_rule_help_display_class']+ '">?????? ????????????/??????/???????????? ??? 2?????? ?????? ??????, 10???~16???</p>');
                            aHtml.push('<span class="comment">' +data.comment_write['comment']+ '<span class="byte ' +data.comment_write['use_comment_size']+ '">/ byte</span>' + '</span>');
                            aHtml.push('<div class="byteRating ' +data.comment_write['use_point']+ '"><strong class="label">??????</strong>' +'<span class="rating">' +data.comment_write['comment_point']+ '</span></div>');
                            aHtml.push('<div class="captcha ' +data.comment_write['use_captcha']+ '"><span class="image">' +data.comment_write['captcha_image']+data.comment_write['captcha_refresh']+'</span><div class="form">'+data.comment_write['captcha']+ '</div><p class="help">?????? ????????? ????????? ???????????? ???????????????. (??????????????????)</p></div>');
                            aHtml.push('<div class="formGroup"><div class="gLeft"></div><div class="gRight"><a href="#none" onclick="' +data.comment_write['action_comment_insert']+ '" class="button large theme2">????????????</a></div></div>');
                            aHtml.push('</div>');
                            aHtml.push('</div>');
                            aHtml.push('</form>');
                        }
                        // ????????? ????????????
                        if (data.comment_reply != undefined) {
                            aHtml.push('<form name="commentReplyWriteForm_4'+data.key+'" id="commentReplyWriteForm_4'+data.key+'" style="display:none;">');
                            aHtml.push('<div class="brdCmtReply">');
                            aHtml.push('<div class="brdEditor">');
                            aHtml.push('<strong class="titEditor">????????? ????????????</strong>');
                            aHtml.push('<div class="info"><span class="name">' +data.comment_reply['comment_name']+ '</span><span class="password">' +data.comment_reply['comment_password']+ '</span></div>');
                            aHtml.push('<p class="help ' +data.comment_reply['password_rule_help_display_class']+ '">?????? ????????????/??????/???????????? ??? 2?????? ?????? ??????, 10???~16???</p>');
                            aHtml.push('<span class="comment">' +data.comment_reply['comment']+ '<span class="byte ' +data.comment_reply['use_comment_size']+ '">/ byte</span>' + '</span>');
                            aHtml.push('<div class="byteRating ' +data.comment_reply['use_point']+ '"><strong class="label">??????</strong>' +'<span class="rating">' +data.comment_reply['comment_point']+ '</span></div>');
                            aHtml.push('<div class="captcha ' +data.comment_reply['use_captcha']+ '"><span class="image">' +data.comment_reply['captcha_image']+data.comment_reply['captcha_refresh']+'</span><div class="form">'+data.comment_reply['captcha']+ '</div><p class="help">?????? ????????? ????????? ???????????? ???????????????. (??????????????????)</p></div>');
                            aHtml.push('<div class="formGroup"><div class="gLeft"></div><div class="gRight"><a href="#none" onclick="' +data.comment_reply['action_comment_insert']+ '" class="button large theme2">????????????</a></div></div>');
                            aHtml.push('</div>');
                            aHtml.push('</div>');
                            aHtml.push('</form>');
                        }
                    }
                    $(pNode).after('<li id="product-review-read'+data.key+'" class="contentView">'+aHtml.join('')+'</li>');
                    // ???????????? ??????????????? ?????? ???????????? td??? ???????????? ?????? ??????
                    PRODUCT_COMMENT.comment_colspan(pNode);
                    if (data.comment_write != undefined && data.comment_write['use_comment_size'] == '') PRODUCT_COMMENT.comment_byte(4, data.key);
                    if (data.comment_reply != undefined && data.comment_write['use_comment_size'] == '') PRODUCT_COMMENT.comment_byte(4, data.key, 'commentReplyWriteForm');
                    if (data.read['ucc_url']) $('#ec-ucc-media-box-'+ data.read['no']).replaceWith(APP_BOARD_UCC.getPreviewElement(data.read['ucc_url']));
                }
            });
        },
        // ?????? ??????
        comment_view : function (sId)
        {
            if ($('#commentList_'+sId).css('display') == 'none') {
                $('#commentList_'+sId).show();
            } else {
                $('#commentList_'+sId).hide();
            }
        },
        // ????????? ?????? ??????
        comment_reply_view : function (iCommentNo)
        {
            $('[id^="replyArea_'+iCommentNo+'_"]').each(function(e) {
                if ($(this).css('display') == 'none') {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        },
        // ?????? ??????
        comment_write : function (e)
        {
            var $form = $("#commentWriteForm_4");
            if ($form.css('display') == 'none') {
                $form.css('display', 'block');
                var $p = $(e).parent().parent();
                if ( $(e).parent().find('#commentWriteForm_4').length < 1 ) {
                    $p.after($form);
                }
            } else {
                $form.hide();
            }
        },
        END : function() {}
    };
});
document.addEventListener('DOMContentLoaded', function() {
    /**
                         * ???????????? Q&A
                         */
    $(document).ready(function(){
        $('.xans-product-qna a').click(function(e) {
            e.preventDefault();
            var no = $(this).attr('href').replace(/(\S*)[?&]no=(\d+)(\S*)/g, '$2');
            var $obj = $('#product-qna-read_'+no);
            //????????? ???????????? ?????? ??????
            if ($obj.length > 0) {
                if ($obj.css('display') =='none') {
                    $obj.show();
                } else {
                    $obj.hide();
                }
                return;
            }
            QNA.getReadData($(this));
        });
        // qna ??? ?????? ???????????????
        var href = document.location.href.split('#')[1];
        if (href == 'use_qna' || href == 'prdQnA') {
            $('a[name="use_qna"]').trigger('click');
        }
    });
    var PARENT = '';
    var OPEN_QNA = '';
    window["QNA"] = {
        getReadData : function(obj, eType)
        {
            if (obj != undefined) {
                PARENT = obj;
                var sHref = obj.attr('href');
                var pNode = obj.parents('li');
                var pass_check = '&pass_check=F';
            } else {
                var sHref = PARENT.attr('href');
                var pNode = PARENT.parents('li');
                var pass_check = '&pass_check=T';
            }
            var sQuery = sHref.split('?');
            var sQueryNo = sQuery[1].split('=');
            if (OPEN_QNA == sQueryNo[1]) {
                $('#product-qna-read').remove();
                OPEN_QNA = '';
                return false;
            } else {
                OPEN_QNA = sQueryNo[1];
            }
            $.ajax({
                url : '/exec/front/board/product/6?'+sQuery[1]+pass_check,
                dataType: 'json',
                success: function(data) {
                    $('#product-qna-read').remove();
                    var sPath = document.location.pathname;
                    var sPattern = /^\/product\/(.+)\/([0-9]+)(\/.*)/;
                    var aMatchResult = sPath.match(sPattern);
                    if (aMatchResult) {
                        var iProductNo = aMatchResult[2];
                    } else {
                        var iProductNo = getQueryString('product_no');
                    }
                    var aHtml = [];
                    //?????? ?????? ??????
                    if (false === data.read_auth && eType == undefined) {
                        alert(data.alertMSG);
                        return false;
                    }
                    if (data.is_secret == true) {
                        // ????????? ???????????? ?????? ???
                        aHtml.push('<form name="SecretForm_6" id="SecretForm_6">');
                        aHtml.push('<input type="text" name="a" style="display:none;">');
                        aHtml.push('<div class="view secret">');
                        aHtml.push('<span class="alert">??? ?????? ??????????????????.</span>');
                        aHtml.push('<div class="formGroup"><input type="password" id="secure_password" name="secure_password" onkeydown="if (event.keyCode == 13) '+data.action_pass_submit+'"> <input type="button" value="??????" onclick="'+data.action_pass_submit+'" class="button"></div>');
                        aHtml.push('</div>');
                        aHtml.push('</form>');
                    } else {
                        // ??? ??????
                        if (data.read['content_image'] != null) {
                            var sImg = data.read['content_image'];
                        } else {
                            var sImg = '';
                        }
                        aHtml.push('<div class="view comment">');
                        aHtml.push('<div id="ec-ucc-media-box-'+ data.read['no'] +'"></div>');
                        aHtml.push('<p>'+data.read['content']+'</p>');
                        aHtml.push('<p>'+sImg+'</p>'); 
                        aHtml.push('<div class="formGroup">');
                        if (data.comment != undefined) {
                            aHtml.push('<div class="gLeft">');
                            aHtml.push('<a href="#none" class="btnReply" onclick="QNA.comment_view('+data.read['no']+');">?????? <span class="number">'+data.read['comment_count']+'</span></a>');
                            aHtml.push('</div>');
                        }
                        aHtml.push('<div class="gRight">');
                        aHtml.push('<a href="/board/product/modify.html'+ data.read['param_modify'] +'&link_product_no='+iProductNo+'" class="button theme1">??????</a>');
                        if (data.comment != undefined) {
                            aHtml.push('<a href="#none" class="button theme2" onclick="QNA.comment_write(this);">????????????</a>');
                        }
                        aHtml.push('</div></div>');
                        // ???????????????
                        if (data.comment != undefined && data.comment.length != undefined) {
                            aHtml.push('<ul class="brdCmt" id="commentList_'+data.read['no']+'" style="display:none;">');
                            for (var i=0; data.comment.length > i; i++) {
                                //???????????????
                                if (data.comment[i]['comment_reply_css'] == undefined) {
                                    aHtml.push('<li id="'+data.comment[i]['comment_reply_id']+'">');
                                    aHtml.push('<div class="info">');
                                    aHtml.push('<span class="point '+data.use_point+'"><img src="//img.echosting.cafe24.com/skin/dnd_ko_KR/common/module/board/ico_star'+data.comment[i]['comment_point_count']+'.png" alt="'+data.comment[i]['comment_point_count']+'???" height="10" /></span>');
                                    aHtml.push('<span class="writer" title="?????????">'+data.comment[i]['comment_name']+'</span>');
                                    aHtml.push('<span class="regdate" title="?????????">'+data.comment[i]['comment_write_date']+'</span>');
                                    aHtml.push('</div>');
                                    aHtml.push('<div class="comment">'+data.comment[i]['comment_content']+'</div>');
                                    if (data.comment[i]['comment_reply_display'] == true) {
                                        aHtml.push('<div class="formGroup">'+'<div class="gLeft">');
                                        aHtml.push('<a href="#none" class="btnReply replyList" onclick="QNA.comment_reply_view('+data.comment[i]['comment_no']+')">????????? ?????? <span class="number">'+data.comment[i]['comment_reply_count']+'</span></a>');
                                        aHtml.push('</div>');
                                        aHtml.push('<div class="gRight">');
                                        aHtml.push('<a href="#none" class="button theme2" onclick="'+data.comment[i]['action_comment_reply_new']+'">??????</a>');
                                        aHtml.push('</div>');
                                        aHtml.push('</div>');
                                    }
                                    aHtml.push('</li>');
                                } else {
                                    //????????? ???????????????
                                    aHtml.push('<li class="replyArea" style="display:none;" id="'+data.comment[i]['comment_reply_id']+'">');
                                    aHtml.push('<div class="info">');
                                    aHtml.push('<span class="name" title="?????????">'+data.comment[i]['member_icon']+' '+data.comment[i]['comment_name']+'</span>');
                                    aHtml.push('<span class="regdate" title="?????????">'+data.comment[i]['comment_write_date']+'</span>');
                                    aHtml.push('</div>');
                                    aHtml.push('<div class="comment">'+data.comment[i]['comment_content']+'</div>');
                                    aHtml.push('</li>');
                                }
                            }
                            aHtml.push('</ul>');
                        }
                        // ????????????
                        if (data.comment_write != undefined) {
                            aHtml.push('<form name="commentWriteForm_6'+data.key+'" id="commentWriteForm_6'+data.key+'" style="display:none;">');
                            aHtml.push('<div class="brdCmtWrite">');
                            aHtml.push('<div class="brdEditor">');
                            aHtml.push('<strong class="titEditor">????????????</strong>');
                            aHtml.push('<div class="info"><span class="name">' +data.comment_write['comment_name']+ '</span><span class="password">' +data.comment_write['comment_password']+ '</span></div>');
                            aHtml.push('<p class="help ' +data.comment_write['password_rule_help_display_class']+ '">?????? ????????????/??????/???????????? ??? 2?????? ?????? ??????, 10???~16???</p>');
                            aHtml.push('<span class="comment">' +data.comment_write['comment']+ '<span class="byte ' +data.comment_write['use_comment_size']+ '">/ byte</span>' + '</span>');
                            aHtml.push('<div class="byteRating ' +data.comment_write['use_point']+ '"><strong class="label">??????</strong>' +'<span class="rating">' +data.comment_write['comment_point']+ '</span></div>');
                            aHtml.push('<div class="captcha ' +data.comment_write['use_captcha']+ '"><span class="image">' +data.comment_write['captcha_image']+data.comment_write['captcha_refresh']+'</span><div class="form">'+data.comment_write['captcha']+ '</div><p class="help">?????? ????????? ????????? ???????????? ???????????????. (??????????????????)</p></div>');
                            aHtml.push('<div class="formGroup"><div class="gLeft"></div><div class="gRight"><a href="#none" onclick="' +data.comment_write['action_comment_insert']+ '" class="button large theme2">????????????</a></div></div>');
                            aHtml.push('</div>');
                            aHtml.push('</div>');
                            aHtml.push('</form>');
                        }
                        if (data.comment_reply != undefined) {
                            aHtml.push('<form name="commentReplyWriteForm_6'+data.key+'" id="commentReplyWriteForm_6'+data.key+'" style="display:none;">');
                            aHtml.push('<div class="brdCmtReply">');
                            aHtml.push('<div class="brdEditor">');
                            aHtml.push('<strong class="titEditor">????????? ????????????</strong>');
                            aHtml.push('<div class="info"><span class="name">' +data.comment_reply['comment_name']+ '</span><span class="password">' +data.comment_reply['comment_password']+ '</span></div>');
                            aHtml.push('<p class="help ' +data.comment_reply['password_rule_help_display_class']+ '">?????? ????????????/??????/???????????? ??? 2?????? ?????? ??????, 10???~16???</p>');
                            aHtml.push('<span class="comment">' +data.comment_reply['comment']+ '<span class="byte ' +data.comment_reply['use_comment_size']+ '">/ byte</span>' + '</span>');
                            aHtml.push('<div class="byteRating ' +data.comment_reply['use_point']+ '"><strong class="label">??????</strong>' +'<span class="rating">' +data.comment_reply['comment_point']+ '</span></div>');
                            aHtml.push('<div class="captcha ' +data.comment_reply['use_captcha']+ '"><span class="image">' +data.comment_reply['captcha_image']+data.comment_reply['captcha_refresh']+'</span><div class="form">'+data.comment_reply['captcha']+ '</div><p class="help">?????? ????????? ????????? ???????????? ???????????????. (??????????????????)</p></div>');
                            aHtml.push('<div class="formGroup"><div class="gLeft"></div><div class="gRight"><a href="#none" onclick="' +data.comment_reply['action_comment_insert']+ '" class="button large theme2">????????????</a></div></div>');
                            aHtml.push('</div>');
                            aHtml.push('</div>');
                            aHtml.push('</form>');
                        }
                    }
                    $(pNode).after('<li id="product-qna-read'+data.key+'" class="contentView">'+aHtml.join('')+'</li>');
                    // ???????????? ??????????????? ?????? ???????????? td??? ???????????? ?????? ??????
                    PRODUCT_COMMENT.comment_colspan(pNode);
                    if (data.comment_write != undefined && data.comment_write['use_comment_size'] == '') PRODUCT_COMMENT.comment_byte(6, data.key);
                    if (data.comment_reply != undefined && data.comment_write['use_comment_size'] == '') PRODUCT_COMMENT.comment_byte(6, data.key, 'commentReplyWriteForm');
                    if (data.read['ucc_url']) $('#ec-ucc-media-box-'+ data.read['no']).replaceWith(APP_BOARD_UCC.getPreviewElement(data.read['ucc_url']));
                }
            });
        },
        // ?????? ??????
        comment_view : function (sId)
        {
            if ($('#commentList_'+sId).css('display') == 'none') {
                $('#commentList_'+sId).show();
            } else {
                $('#commentList_'+sId).hide();
            }
        },
        // ????????? ?????? ??????
        comment_reply_view : function (iCommentNo)
        {
            $('[id^="replyArea_'+iCommentNo+'_"]').each(function(e) {
                if ($(this).css('display') == 'none') {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        },
        // ?????? ??????
        comment_write : function (e)
        {
            var $form = $("#commentWriteForm_6");
            if ($form.css('display') == 'none') {
                $form.css('display', 'block');
                var $p = $(e).parent().parent();
                if ( $(e).parent().find('#commentWriteForm_6').length < 1 ) {
                    $p.after($form);
                }
            } else {
                $form.hide();
            }
        },
        END : function() {}
    };
});