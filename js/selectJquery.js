/**
 * Created by Administrator on 2017/2/13.
 */
/*
 *   时间：2017-2-13
 *   @param $el 传入的container
 *   @param options 传入的配置参数
 * */
(function(win) {
    var Select = win.Select = function($el, options, callback) {
        console.log(options);
        this.options = options;
        this.el = $el;

        var self = this,
            $father = $el,
            selectHtml = '',
            addList = '';
        selectHtml += '<div class="public-sel-select-outer">';
        selectHtml += '<div class="public-sel-title">' + options.title + '</div>'; //左边标题
        selectHtml += '<div class="public-sel-selected user-total-selected" select-value=' + options.data[0].value + '>' + options.data[0].name + '</div>';
        selectHtml += '<div class="public-sel-tu"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHBAMAAADOnLEXAAAAMFBMVEUAAAD+//+qtr+uuMOqtcCuucOzvsevv9CqtsGptr/T2N+8xcuptb/////s7vHEzNNZNTaKAAAADHRSTlMAROsvov7ACJN0b1SElVF8AAAAM0lEQVQI12MoWygoKLaBYU7c3bt/1BlYjr69f8iAgcEn7o8yAwMDyxkQB8gFcoCAA8gBAK2cDZCy++tTAAAAAElFTkSuQmCC" alt=""></div>';
        selectHtml += '<ul class="public-sel-list"></ul></div>';
        $father.append(selectHtml);
        for (var i = 0, len = options.data.length; i < len; i++) {
            addList += '<li select-value=' + options.data[i].value + '>' + options.data[i].name + '</li>';
        }
        $father.find('.public-sel-list').append(addList);
        //业务逻辑
        $father.on('click', ".public-sel-select-outer", function() {
            $father.find('.public-sel-list').slideDown(100)
        });
        $father.on('mouseleave', ".public-sel-select-outer", function() {
            $(this).find('.public-sel-list').fadeOut();
        });
        $father.on('click', ".public-sel-list li", function(event) {
            event.stopPropagation(); //  阻止事件冒泡
            $father.find('.public-sel-selected').text($(this).text()).attr('select-value', $(this).attr('select-value'));
            $father.find('.public-sel-list').fadeOut();
            callback($father.find('.public-sel-selected').attr('select-value'));
        });
    };
    Select.prototype = {
        constructor: Select,
        options: {
            data: [],
            title: ''
        },
        getSelectValue: function() {
            var el = this.el;
            // return $('.public-sel-selected').text();//返回值
            return el.find('.public-sel-selected').attr('select-value'); //返回值
        },
        setSelectValue: function(index) {
            var el = this.el,
                attrValue = this.options.data[index].value,
                attrName = this.options.data[index].name;
            el.find('.public-sel-selected').attr('select-value', attrValue);
            el.find('.public-sel-selected').text(attrName);
        }
    }
})(window);