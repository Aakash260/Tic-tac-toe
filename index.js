$(document).ready(() => {
    let count = 0;
    function check(a) {
        let box=$('.box');
        let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        $.each(wins, function (key,i) {
          if(box[i[0]].innerText!=''&&box[i[0]].innerText===box[i[1]].innerText&&box[i[1]].innerText===box[i[2]].innerText){
            alert(a);
            location.reload();
          }
        }
        )
    }
    $('.box').each(function () {
        $(this).click(function () {
            if ($(this).text() === '' && count % 2 === 0) {
                $(this).text('X');
                count += 1;
                if(count===9){ 
                    alert('draw')
                    location.reload();}
                $('button').text('Turn for Y')
                a='winnerX';
                check(a);
            } else if ($(this).text() === '' && count % 2 != 0) {
                $(this).text('Y');
                count += 1;
                if(count===9){ 
                    alert('draw')
                    location.reload();}
                $('button').text('Turn for X')
                a='winnerY';
                check(a);
            }
        })
    })

    $('button').click(() => {
        location.reload();
    })
});