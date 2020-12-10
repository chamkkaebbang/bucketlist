window.onload = function () {

    var jsonText = [
        {
            "title": "<strong>배움의 원칙</strong><br>거꾸로캠퍼스가 실현하는<br>21세기 배움의 원칙 아홉가지<br><br><br>자세히보기➝",
            "className": "box1"
        },
        {
            "title": "<strong>교육과정</strong><br>거꾸로캠퍼스의 교육 과정과<br>교육 프로그램에 대한 안내<br><br><br>자세히보기➝",
            "className": "box2"
        },
        {
            "title": "<strong>학교생활</strong><br>거꾸로캠퍼스를 만들어가는<br>학생과 교사들의 이야기<br><br><br>자세히보기➝",
            "className": "box3"
        }
    ]

    for (var index in jsonText) {
        var paragraph = document.createElement('div')
        document.getElementById('case1').appendChild(paragraph)
        paragraph.classList.add(jsonText[index]["className"])
        paragraph.innerHTML = jsonText[index]["title"]
    }

}