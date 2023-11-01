
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    userPos:any[] = [];
    userHashIndexs:any[] = [];
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // for(var i=1;i<=9;i++){
        //     let pos = this.initUserLayoutPositions(9);
        //     console.log(pos , "位置");
        // }
        let pos = this.initUserLayoutPositions(9);
        console.log(pos , "位置");
    }

    start () {

    }

    initUserLayoutPositions(desktype:number){
        let self = this; 
        
        let  gui_height = cc.winSize.height;
        let  gui_width = cc.winSize.width;
        console.log(gui_height,gui_width, "人声鼎沸");
        
        //let tempUser = self.getGameUserTemplate()
        let user_height = 130;//tempUser.getContentSize().height
        let user_width = 130;//tempUser.getContentSize().width
        
        let posxs=[]
        let posys=[]
        
        let off_top     = 75  //顶部玩家距离上边框的间隔
        let bottom_y    = 210 //上边框的间隔
        let top_y       = gui_height - user_height-off_top//顶部玩家的y坐标
        let half_y      = bottom_y + 9 * (top_y-bottom_y)/16 //竖直中间玩家的y坐标  接近1/2非标准中间
        
        let one_of_four_y   = bottom_y+4.5 * (top_y-bottom_y) / 16+25//竖直1/4桌高的y坐标  接近1/4非标准
        let two_of_four_y   = bottom_y + 9 * (top_y-bottom_y) / 16//竖直2/4桌高的y坐标   接近2/4非标准
        let three_of_four_y = bottom_y + 13 * (top_y-bottom_y) /16+7//竖直3/4桌高的y坐标
        
        let one_of_three_y  = one_of_four_y//竖直1/4桌高的y坐标  接近1/4非标准
        let two_of_three_y  = bottom_y + 12.5 * (top_y-bottom_y)/16//竖直2/3桌高的y坐标
        
        let left_x      = 17  //左边玩家的x坐标
        let right_x     = gui_width-user_width-17//右边玩家的x坐标
        let half_x      = gui_width/2-user_width/2//水平中间玩家的x坐标
        let one_of_three_x = gui_width/3-user_width/2//水平1/3的x坐标
        let two_of_three_x = 2*gui_width/3-user_width/2//水平2/3的x坐标
          
        if(desktype == 1 ){
            self.userPos=[[half_x,bottom_y]]
            self.userHashIndexs =[0];
        }else  if( desktype==2 ){ 
            self.userPos=[[half_x,bottom_y],[half_x,top_y]]
            self.userHashIndexs =[0, 4];
        }else  if( desktype==3 ){ 
            self.userPos=[[half_x,bottom_y],{left_x,half_y},[right_x,half_y]]
            self.userHashIndexs =[0, 2, 7];
        }else  if( desktype==4 ){ 
            self.userPos=[[half_x,bottom_y],[left_x,half_y],[half_x,top_y],[right_x,half_y]]
            self.userHashIndexs =[0, 2, 4, 7];
        }else  if( desktype==5 ){ 
            self.userPos=[[half_x,bottom_y],[left_x,half_y],[one_of_three_x,top_y],[two_of_three_x,top_y],[right_x,half_y]]
            self.userHashIndexs = [0, 2, 4, 5, 7];
        }else  if( desktype==6 ){ 
            posxs =[half_x,left_x,left_x,half_x,right_x,right_x]
            posys = [bottom_y,one_of_three_y,two_of_three_y,top_y,two_of_three_y,one_of_three_y]  
            self.userHashIndexs =[0, 1, 3, 4, 6, 8];
        }else  if( desktype==7 ){
            posxs = [half_x,left_x,left_x,one_of_three_x,two_of_three_x,right_x,right_x]
            posys = [bottom_y,one_of_three_y,two_of_three_y,top_y,top_y,two_of_three_y,one_of_three_y]   
            self.userHashIndexs =[0, 1, 3, 4, 5, 6, 8];
        }else  if( desktype == 8 ){
            posxs = [half_x,left_x,left_x,left_x,half_x,right_x,right_x,right_x]
            posys = [bottom_y,one_of_four_y,two_of_four_y,three_of_four_y,top_y,three_of_four_y,two_of_four_y,one_of_four_y]
            self.userHashIndexs =[0, 1, 2, 3, 4, 6, 7, 8];
        }else  if( desktype==9 ){       
            posxs = [half_x,left_x,left_x,left_x,one_of_three_x,two_of_three_x,right_x,right_x,right_x]
            posys = [bottom_y,one_of_four_y,two_of_four_y,three_of_four_y,top_y,top_y,three_of_four_y,two_of_four_y,one_of_four_y]
            self.userHashIndexs =[0, 1, 2, 3, 4, 5, 6, 7, 8];
        }
        if (posxs.length){ 
            for (let i = 0; i < desktype; i++) {
                self.userPos.push([posxs[i],posys[i]])
            }
        }
       
        return self.userPos
    }
}
