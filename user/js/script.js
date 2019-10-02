var depths1 = 0;
var depths2 = 0;

//버튼
$(document).ready(function() {
    //반응형 세팅
    var window_width = $(document).width();
    //리사이즈시 세팅
    $(window).resize(function() {
        window_width = $(document).width();
        //PC 사이즈
        if(window_width > 1200) {
            //PC시 초기 세팅
            $('.today-update .list').show();
            $('.menu-common').show();
            $('.aside-search').show();
        };
        if(window_width < 1200) {
            //모바일시 초기 세팅
            $('.today-update .list').hide();
            $('.aside-search').hide();
            $('.today-update .active-init').removeClass('active');
        };
    });
    // 모바일 UI 컨트롤
    $('.menu-trigger').click(function(){
       $(".menu-common").animate({left: '0px', width: '100%'},'fast');
    });
    $('.nav-close').click(function(){
       $(".menu-common").animate({left: '-375px', width: '375px'},'fast');
    });
    // 활성화:오브젝트 한개일경우
    $('.active-init').click(function() {
        $(this).toggleClass('active');
    });
    //활성화:오브젝트 여러개일경우
    $('.active-init > ul > li').click(function() {
		if ($(this).hasClass("btn")){
			$(this).closest("div.pull-down-visible").prev().text($(this).closest("div.pull-down-visible").find('li.active').text());
			$('.pull-down input[type=checkbox]').prop('checked',false);
		}else{
			$(this).parents().children('li').removeClass('active');
			$(this).toggleClass('active');

			// 자동닫기
			if($(this).closest("div.pull-down-visible").hasClass("auto-close")){
				$(this).closest("div.pull-down-visible").prev().text($(this).text())
				$('.pull-down input[type=checkbox]').prop('checked',false);
			}
		}

    });

    //활성화:통합검색 서브 카테고리용
    $('.active-init-categories li').click(function() {
        $('.active-init-categories li').removeClass('active');
        $(this).toggleClass('active');
    });
    //2차 메뉴 활성화
    $('.down-has').click(function() {
        $('.depths2 .calendar').toggle();
        $('.depths2').toggleClass('active');
        $('.depths2').slideToggle('fast');
        $('.depths2-space').slideToggle('fast');
        $('.down-none').removeClass('active');
    });
    //2차 메뉴 닫기
    $('.down-none').click(function() {
        $('.down-has, .down-none').removeClass('active');
        $(this).addClass('active');
        $('.depths2 .calendar').hide();
        $('.depths2').removeClass('active');
        $('.depths2').slideUp('fast');
        $('.depths2-space').slideUp('fast');
    });
    //하위메뉴가 있는 경우
    if(depths1 == 1){
        $('.depths2 .calendar').toggle();
        $('.depths2').toggleClass('active');
        $('.depths2').slideToggle('fast');
        $('.depths2-space').slideToggle('fast');
        $('.down-has').addClass('active');
        $('.depths2 li:nth-child('+depths2+')').addClass('active');
    }
    //하위메뉴가 없는 경우
    // var a = $('.down-none').prop('class');
    // alert(a);
    if(depths1 > 1){
        depths1 += 1;
        $('nav > div:nth-child('+depths1+')').addClass('active');
    }
    //오늘의 업데이트 펼치기
    $('.today-update h1').click(function() {
        if(window_width < 1200) {
            $('.today-update .list').slideDown('fast');
            $(this).addClass('active');
        }
    });
    //오늘의 업데이트 닫기
    $('.today-update .close').click(function() {
        if(window_width < 1200) {
            $('.today-update .list').slideUp('fast');
            $('.today-update h1').removeClass('active');
        }
    });
    //모바일 통합검색 창 보이기
    $('.search-open').click(function() {
        $('.total-search-wrap').slideToggle('fast');
    });
    //패스워드 보이기
    $('.pw-show').click(function() {
        if($(this).hasClass('active')){
            $(this).prev('input').attr('type',"text");
        }else{
            $(this).prev('input').attr('type',"password");
        }
    });
    //카테고리 보이기
    $('.more-categories').click(function() {
        $(this).hide();
        $('.active-init-categories .mo-toggle').css('display','flex');
        $('.active-init-categories').addClass('open');
    });
    //카테고리 닫기
    $('.close-categories').click(function() {
        $('.active-init-categories .mo-toggle').css('display','none');
        $('.active-init-categories').removeClass('open');
        $('.more-categories').show();
    });
    //달력
    if ($(".date").length > 0){
        $(".date").datepicker({
            dateFormat: 'yymmdd',
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
            changeMonth: true, //월변경가능
            changeYear: true, //년변경가능
            showMonthAfterYear: true, //년 뒤에 월 표시
        });
    }
    //통합검색 열기
    $('.btn-detail-search').click(function(){
        $('.pull-down').slideDown('fast');
        $(this).addClass('active');
    });
    //통합검색 닫기
    $('.pull-down-close').click(function(){
        $('.pull-down').slideUp('fast');
        $('.btn-detail-search').removeClass('active');
        $('.pull-down input[type=checkbox]').prop('checked',false);
    });
    //통합검색 바깥영역 클릭시 닫기
    $('.btn-detail-search').addClass('pull-down-visible');
    $('.pull-down').contents().find('*').addClass('pull-down-visible');
    $('html').click(function(e) {
        if(!$(e.target).hasClass("pull-down-visible")) {
            $('.pull-down input[type=checkbox]').prop('checked',false);
        }
    });
    //통합검색 풀다운 선택시 나머지 숨기기
    $('.pull-down input[type=checkbox]').click(function(){
        var checked = $(this).prop("checked");
        if(checked){
            $('.pull-down input[type=checkbox]').prop('checked',false);
            $(this).prop('checked',true);
        }
    });
    //조건검색 모바일 토글
    $('.btn-mo-search').click(function(){
        $('.aside-search').slideToggle('fast');
        let txt = $(this).text();
        if(txt === '조건검색') {
            $(this).text('닫기');
        }else{
            $(this).text('조건검색');
        }
    });
    //모바일 전용 보도지원 메뉴 토글
    $('.mo-press-menu h1').click(function(){
        $('.mo-press-menu .sub-menu').slideToggle('fast');
    });
});

//페이징
function initTwbsPagination(pageId){
    var window_width = $(document).width();
    if(pageId === 'pagination-cmnt'){
        //공지사항
        if(window_width > 1200) {
            $('#' + pageId).twbsPagination({
                totalPages: 20,
                visiblePages: 10,
                onPageClick: function (event, page) {
                    console.info(page + ' (from options)');
                }
            }).on('page', function (event, page) {
                console.info(page + ' (from event listening)');
            });
        }else{
            $('#'+pageId).twbsPagination({
                totalPages: 20,
                visiblePages: 5,
                onPageClick: function (event, page) {
                    console.info(page + ' (from options)');
                }
            }).on('page', function (event, page) {
                console.info(page + ' (from event listening)');
            });
        }
    }else{
        //메인페이지
        $('#'+pageId).twbsPagination({
            totalPages: 20,
            visiblePages: 5,
            onPageClick: function (event, page) {
                console.info(page + ' (from options)');
            }
        }).on('page', function (event, page) {
            console.info(page + ' (from event listening)');
        });
    }
}