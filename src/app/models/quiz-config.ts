export class QuizConfig {
    pageSize: number;
    showPager: boolean;

    constructor(data: any) {
        data = data || {};
        this.pageSize = data.pageSize;
        this.showPager = data.showPager;
    }
}
