
export class Menu  {
    MENU;

    constructor() { 
        this.MENU = [{
            name: 'ชื่อเว็บ',
            link: '/'
        },
        {
            name: 'หน้าแรก',
            link: 'HONE'
        },
        {
            name: 'หน้าสอง',
            link: 'HOME2'
        },
        {
            name: 'หน้าสาม',
            link: 'HOME3'
        },
        {
            name: 'หน้าสี่',
            link: 'HOME4'
        }];
    }

    public setMainMenu(val) {
        this.MENU.push(val);
    }

    public getMainMenu() {
        return this.MENU;
    }

}
