$(document).ready(function(){
    // 서브페이지 뒤로가기 버튼 클릭 시 이전 페이지로 이동
    $(".goBack button").click(function(){
        window.history.back();
    });

    // 서브페이지 검색창 focus 시 검색창 width값 증가
    $(".flexRight .searchArea input").focusin(function(){
        $(".flexRight .searchArea").css({width:"25%"});
    });
    $(".flexRight .searchArea input").focusout(function(){
        $(".flexRight .searchArea").css({width:"10%"});
    });

});