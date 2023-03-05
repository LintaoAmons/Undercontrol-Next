export class DatetimeUtil {
    private static MONTH = [
        'JANUARY',
        'FEBRUARY',
        'MARCH',
        'APRIL',
        'MAY',
        'JUNE',
        'JULY',
        'AUGUST',
        'SEPTEMBER',
        'OCTOBER',
        'NOVEMBER',
        'DECEMBER',
    ];

    public static getCurrentMonth(): string {
        const currentMonthNumber = new Date().getMonth();
        return DatetimeUtil.MONTH[currentMonthNumber];
    }

    public static getPrevMonth(month: string) {
        const index = this.MONTH.indexOf(month);
        return DatetimeUtil.MONTH[index - 1];
    }

    public static getNextMonth(month: string) {
        const index = this.MONTH.indexOf(month);
        return DatetimeUtil.MONTH[index + 1];
    }
}
