var balans, U1, Click, hcol1, hcol2, hcol3, hcol4, St1, St2, St3, St4;
    balans = 0;
    U1 = 1;
    Click = 1;
    hcol1 = 0;
    hcol2 = 0;
    hcol3 = 0;
    hcol4 = 0;

    St1 = 100;
    St2 = 500;
    St3 = 2000;
    St4 = 20000;

    $('document').ready(function(){

    $('#counter').html(localStorage.getItem('balans'));
    /* $('.hcol1').html(localStorage.getItem('[+1 клик] куплено - '+hcol1+' Стоимость - '+St1+' кликов'));
    $('.hcol2').html(localStorage.getItem('[+1 клик] куплено - '+hcol2+' Стоимость - '+St2+' кликов'));
    $('.hcol3').html(localStorage.getItem('[+1 клик] куплено - '+hcol3+' Стоимость - '+St3+' кликов'));
    $('.hcol4').html(localStorage.getItem('[+1 клик] куплено - '+hcol4+' Стоимость - '+St4+' кликов')); */

    $('#button1').on('click',function() {
        balans=balans + U1;
        balans = Number(balans.toFixed(2));
        $('#counter').html(Number(balans.toFixed(2)));
        localStorage.setItem('balans', balans);

    $('.hcol1').on('click',function() {
        if (balans>=St1) {
            U1=U1+1;
            Click=Click+1;
            Click = Number(Click.toFixed(2));
            $('#Click').html('+ '+Click+' / клик');
            balans=balans-St1;
            x = Math.round(balans);
            $('#counter').html(x);
            St1=St1*1.15;
            hcol1=hcol1+1;
            St1 = Number(St1.toFixed(2));
            $('.hcol1').html('[+1 клик] куплено - '+hcol1+' Стоимость - '+St1+' кликов');
            $('#counter').html(Number(balans.toFixed(2)));
            balans = Number(balans.toFixed(2));
            localStorage.setItem('balans', balans);
            alert('Вы успешно купили макрос');

    $('.hcol2').on('click',function() {
        if (balans>=St2) {
            U1=U1+5;
            Click=Click+5;
            Click = Number(Click.toFixed(2));
            $('#Click').html('+ '+Click+' / клик');
            balans=balans-St2;
            x = Math.round(balans);
            $('#counter').html(x);
            St2=St2*1.15;
            St2 = Math.round(St2);
            hcol2=hcol2+1;
            St2 = Number(St2.toFixed(2));
            $('.hcol2').html('[+5 клик] куплено - '+hcol2+' Стоимость - '+St2+' кликов');
            $('#counter').html(Number(balans.toFixed(2)));
            balans = Number(balans.toFixed(2));
            localStorage.setItem('balans', balans);
            alert('Вы успешно купили скрипт');

    $('.hcol3').on('click',function() {
        if (balans>=St3) {
            U1=U1+10;
            Click=Click+10;
            Click = Number(Click.toFixed(2));
            $('#Click').html('+ '+Click+' / клик');
            balans=balans-St3;
            x = Math.round(balans);
            $('#counter').html(x);
            St3=St3*1.15;
            St3 = Math.round(St3);
            hcol3=hcol3+1;
            St3 = Number(St3.toFixed(2));
            $('.hcol3').html('[+10 клик] куплено - '+hcol3+' Стоимость - '+St3+' кликов');
            $('#counter').html(Number(balans.toFixed(2)));
            balans = Number(balans.toFixed(2));
            localStorage.setItem('balans', balans);
            alert('Вы успешно купили автокликер');

    $('.hcol4').on('click',function() {
        if (balans>=St4) {
            U1=U1+50;
            Click=Click+50;
            Click = Number(Click.toFixed(2));
            $('#Click').html('+ '+Click+' / клик');
            balans=balans-St4;
            x = Math.round(balans);
            $('#counter').html(x);
            St4=St4*1.15;
            St4 = Math.round(St4);
            hcol4=hcol4+1;
            St4 = Number(St4.toFixed(2));
            $('.hcol4').html('[+50 клик] куплено - '+hcol4+' Стоимость - '+St4+' кликов');
            $('#counter').html(Number(balans.toFixed(2)));
            balans = Number(balans.toFixed(2));
            localStorage.setItem('balans', balans);
            alert('Вы успешно купили хакерский софт');

};
});
};
});
};
});
};
});
});
});
