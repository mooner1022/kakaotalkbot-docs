var theme, s;
$(function () {
    theme = function (s) {
        if (!s) {
            if ($('#system').attr('data-checked') === 'true') {
                return 'system';
            } else if ($('#dark').attr('data-checked') === 'true') {
                return 'dark';
            } else if ($('#white').attr('data-checked') === 'true') {
                return 'light';
            } else if ($('#rainbow').attr('data-checked') === 'true') {
                return 'rainbow';
            }
        } else {
            if (s == 'system') {
                $('#system').attr('data-checked', 'true');
                $('#white').attr('data-checked', 'false');
                $('#dark').attr('data-checked', 'false');
                $('#rainbow').attr('data-checked', 'false');
                $('.t_dark').attr('media', '(prefers-color-scheme: dark)');
            } else if (s == 'dark') {
                $('#system').attr('data-checked', 'false');
                $('#white').attr('data-checked', 'false');
                $('#dark').attr('data-checked', 'true');
                $('.t_dark').removeAttr('media');
                getChangeDarkMode();
            } else if (s == 'light') {
                $('#system').attr('data-checked', 'false');
                $('#white').attr('data-checked', 'true');
                $('#dark').attr('data-checked', 'false');
                $('.t_dark').attr('media', 'asdf');
                getChangeWhiteMode();
            }
        }
    }
    $('#white').click(function () {
        $('#system').attr('data-checked', 'false');
        $('#white').attr('data-checked', 'true');
        $('#dark').attr('data-checked', 'false');
        s();
        $('.t_dark').attr('media', 'asdf');
    })
    $('#dark').click(function () {
        $('#system').attr('data-checked', 'false');
        $('#white').attr('data-checked', 'false');
        $('#dark').attr('data-checked', 'true');
        s();
        $('.t_dark').removeAttr('media');
    })
    $('#system').click(function () {
        $('#system').attr('data-checked', 'true');
        $('#white').attr('data-checked', 'false');
        $('#dark').attr('data-checked', 'false');
        s();
        $('.t_dark').attr('media', '(prefers-color-scheme: dark)');
    })
    s = function () {
        save({ 'font_size': $('input#font_size').val(), 'font_norm': $('#font_norm').val(), 'font_code': $('#font_code').val(), 'theme': theme() });
    }
})