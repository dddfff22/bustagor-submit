const { Router } = require('Express')
const router = Router()
const terminal = require('../db/models/Terminal');
const bus = require('../db/models/Bus')


var reser;
router.get('/',function(req,res){
    reser= new Reservation();
    res.send(Terminal);
})


router.get('/select',function(req,res){
    var origin=req.query.origin
    var destinaion=req.query.destinaion
    res.send(reser.enterRouteInfo(origin,destinaion,11,11));
})


router.get('/payment',function(req,res){ //enterPaymentType
    var paymentType=req.query.paymentType;
    res.send(reser.enterPaymentType(paymentType));
})



var Terminal=[{ // just example db
    TerminalName:'대구',
    TerminalID:1,
    bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[2,3,4]}}}
    ]
},{
    TerminalName:'서울',
    TerminalID:2,
    bus:[
        {busType:1,price:1000,destinaion:'대구',time:11,busseat:{seatNumber:{selcted:[5,2,1]}}}
    ]
},{
    TerminalName:'부산',
    TerminalID:3,
    bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[1,2,3,5]}}}
    ]
},{
    TerminalName:'대전',
    TerminalID:4,
    bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[9,10]}}}
    ]
},{
    TerminalName:'포항',
    TerminalID:5,
    bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[7,8]}}}
    ]
},{
    TerminalName:'인천',
    TerminalID:6,
    bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[1,2]}}}
    ]
},{
    TerminalName:'광주',
    TerminalID:7,
    bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[4,5]}}}
    ]
},{
    TerminalName:'울산',
    TerminalID:8
    ,bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[2,3]}}}
    ]
},
{
    TerminalName:'수원',
    TerminalID:9
    ,bus:[
        {busType:1,price:1000,destinaion:'서울',time:11,busseat:{seatNumber:{selcted:[2,3]}}}
    ]
}
]





function TerminalCatolog() {
    return {getmatchedTerminal: function (origin,Destination){
        var matchedTerminl1,matchedTerminl2;
        for(var i=0;i<Terminal.length;i++){
            if(Terminal[i].TerminalName==origin){              
                matchedTerminl1= Terminal[i];                
            }
        }
        for(var i=0;i<Terminal.length;i++){
            if(Terminal[i].TerminalName==Destination){
                matchedTerminl2= Terminal[i];
                console.log(Terminal[i]);
            }
            
        }
        return {terminal1:matchedTerminl1,terminal2:matchedTerminl2};
    }
}
}

function Reservation(date, requetTime,time,BusID,Origin,Destination,seatNumber,busType,price,busticket,busTable){
        this.date=date;
        this.requetTime=requetTime;
        this.time=time
        this.BusID=BusID;
        this.Origin=Origin;
        this.Destination=Destination;
        this.seatNumber=seatNumber;
        this.busType=busType;
        this.price=price;
        this.busticket=busticket;
        this.busTable=busTable;
        var Rot= new Route();
        var pay=new Payment();

    return{ 
        enterRouteInfo: function(Origin,Destination,date,time){
        this.Origin=Origin;
        this.Destination=Destination;
        this.date=date;
        this.time=time;
        var tmp;
        tmp= Rot.enterRouteInfo(Origin, Destination,date,time);
        this.price=tmp.terminal1.bus[0].price;
        return tmp;
    },
    enterPaymentType: function(paymentType){
        this.paymentType=paymentType;
        console.log(paymentType);
        return pay.enterPaymentinfo(paymentType,price);
    }
}
function Payment(paymentType,price){
    this.paymentType;
    this.price;
    return {
        enterPaymentinfo: function(paymentType,price){
            this.paymentType=paymentType;
            this.price=price;
            this.receipt;
            return receipt
            
        }
    }
    //this part call 3rd party payment service but we didn't implemantation.
}

}
function Route(Origin, Destination,date,time){
         this.Origin=Origin;
         this.Destination=Destination;
         this.date=date;
         this.time=time;
         var ter =new TerminalCatolog();
         return{
         enterRouteInfo: function(Origin, Destination,date,time){
         this.Origin=Origin;
         this.Destination=Destination;
         this.date=date;
         this.time=time;
            return ter.getmatchedTerminal(Origin,Destination);
         }
     }
}


module.exports = router;