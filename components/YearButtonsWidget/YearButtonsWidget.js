var nsGmx = nsGmx || {};

nsGmx.YearButtonsWidget = nsGmx.GmxWidget.extend({
    className: 'yearButtonsWidget',
    options: {
        years: []
    },
    initialize: function(options) {
        this.options = _.extend({}, this.options, options);
        this._terminateMouseEvents();
        this.$yearTable = $('<div>').addClass('yearButtonsWidget-yearTable');
        this.$el.append(this.$yearTable);
        for (var i = 0; i < this.options.years.length; i++) {
            this._addYearButton(this.options.years[i])
        }
    },
    _addYearButton: function(year) {
        var $yearButton = $('<div>')
            .addClass('yearButtonsWidget-yearButton')
            .html(year)
            .on('click', this._onYearButtonClick.bind(this, year));
        this.$yearTable.append($yearButton);
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
    }
});