var nsGmx = nsGmx || {};

nsGmx.YearButtonsWidget = nsGmx.GmxWidget.extend({
    className: 'yearButtonsWidget',
    options: {
        years: []
    },
    initialize: function(options) {
        this.options = _.extend({}, this.options, options);
        this.options.calendarModel.on('datechange', this.render, this);
        this._terminateMouseEvents();
        this.render();
    },
    render: function() {
        this.$el.html('');
        var $yearTable = $('<div>').addClass('yearButtonsWidget-yearTable');
        for (var i = 0; i < this.options.years.length; i++) {
            var $cell = $('<div>').addClass('yearButtonsWidget-yearTableCell').appendTo($yearTable);
            this._createYearButton(this.options.years[i]).appendTo($cell);
        }
        this.$el.append($yearTable);
        return this;
    },
    _createYearButton: function(year) {
        var isActiveYear = (
            year/1 >= this.options.calendarModel.getDateBegin().getUTCFullYear() &&
            year/1 <= this.options.calendarModel.getDateEnd().getUTCFullYear() 
        );
        return $yearButton = $('<div>')
            .addClass('yearButtonsWidget-yearButton')
            .addClass(isActiveYear ? 'yearButtonsWidget-yearButton_active' : '')
            .html(year)
            .on('click', this._onYearButtonClick.bind(this, year));
    },
    _onYearButtonClick: function(year) {
        var dateBegin = new Date();
        dateBegin.setUTCFullYear(year);
        dateBegin.setUTCMonth(0);
        dateBegin.setUTCDate(1);
        this.options.calendarModel.setDateBegin(dateBegin);
        var dateEnd = new Date();
        dateEnd.setUTCFullYear(year);
        dateEnd.setUTCMonth(11);
        dateEnd.setUTCDate(31);
        this.options.calendarModel.setDateEnd(dateEnd);
        this.render();
    }
});