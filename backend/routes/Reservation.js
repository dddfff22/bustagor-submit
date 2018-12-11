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
    var destination=req.query.destination
    res.send(reser.enterRouteInfo(origin,destination,11,11));
})

router.get('/payment',function(req,res){ //enterPaymentType
    var paymentType=req.query.paymentType;
    res.send(reser.enterPaymentType(paymentType));
})

router.get('/session',function(req,res){ //enterPaymentType
    var BusID=req.query.BusId;
    console.log(req.query);
    res.send(reser.getmatchedId(BusID));
    console.log('ssesion');
})


var Terminal=[{ // just example db
    TerminalName:'대구',
    TerminalID:1,
    bus:[
        {busType:"우등",price:15000,destination:'서울',time:1100,busId:'1',busseat:{seatNumber:{selcted:[2,3,4]}}},
        {busType:"일반",price:10000,destination:'서울',time:1200,busId:'2',busseat:{seatNumber:{selcted:[2,3,7,4]}}},
        {busType:"일반",price:10000,destination:'서울',time:1300,busId:'3',busseat:{seatNumber:{selcted:[2,3,4,10]}}},
        {busType:"우등",price:15000,destination:'서울',time:1400,busId:'4',busseat:{seatNumber:{selcted:[2,3,4,12]}}},
        {busType:"일반",price:10000,destination:'서울',time:1500,busId:'5',busseat:{seatNumber:{selcted:[2,3,22]}}},
        {busType:"일반",price:10000,destination:'부산',time:1100,busId:'6',busseat:{seatNumber:{selcted:[2,3,4]}}},
        {busType:"일반",price:10000,destination:'수원',time:1100,busId:'7',busseat:{seatNumber:{selcted:[2,3,4]}}},
        {busType:"일반",price:10000,destination:'수원',time:1100,busId:'8',busseat:{seatNumber:{selcted:[2,3,4]}}},
        {busType:"일반",price:10000,destination:'수원',time:1100,busId:'9',busseat:{seatNumber:{selcted:[2,3,4]}}},
        
    ]
},{
    TerminalName:'서울',
    TerminalID:2,
    bus:[
        {busType:1,price:1000,destination:'대구',time:11,busId:'10',busseat:{seatNumber:{selcted:[5,2,1]}}}
    ]
},{
    TerminalName:'부산',
    TerminalID:3,
    bus:[
        {busType:1,price:1000,destination:'서울',time:11,busId:'11',busseat:{seatNumber:{selcted:[1,2,3,5]}}}
    ]
},{
    TerminalName:'대전',
    TerminalID:4,
    bus:[
        {busType:1,price:1000,destination:'서울',time:11,busId:'12',busseat:{seatNumber:{selcted:[9,10]}}}
    ]
},{
    TerminalName:'포항',
    TerminalID:5,
    bus:[
        {busType:1,price:1000,destination:'서울',time:11,busId:'13',busseat:{seatNumber:{selcted:[7,8]}}}
    ]
},{
    TerminalName:'인천',
    TerminalID:6,
    bus:[
        {busType:1,price:1000,destination:'서울',time:11,busId:'14',busseat:{seatNumber:{selcted:[1,2]}}}
    ]
},{
    TerminalName:'광주',
    TerminalID:7,
    bus:[
        {busType:1,price:1000,destination:'서울',time:11,busId:'15',busseat:{seatNumber:{selcted:[4,5]}}}
    ]
},{
    TerminalName:'울산',
    TerminalID:8
    ,bus:[
        {busType:1,price:1000,destination:'서울',time:11,busId:'16',busseat:{seatNumber:{selcted:[2,3]}}}
    ]
},
{
    TerminalName:'수원',
    TerminalID:9
    ,bus:[
        {busType:1,price:1000,destination:'서울',time:11,busId:'17',busseat:{seatNumber:{selcted:[2,3]}}}
    ]
}
]





function TerminalCatolog() {
    return {getmatchedTerminal: function (origin,Destination){
        var matchedTerminl1;
        var matchedbus=[];
        for(var i=0;i<Terminal.length;i++){
            if(Terminal[i].TerminalName==origin){              
                matchedTerminl1= Terminal[i];
                for(var j=0;j<Terminal[i].bus.length;j++){
                    if(Terminal[i].bus[j].destination==Destination){
                    
                        matchedbus.push(Terminal[i].bus[j]);
                    }
                }             
            }
        }
        console.log(matchedbus[0]);
        return matchedbus;
    },getmatchedId:function(ID){
        console.log(ID);
        for(var i=0;i<Terminal.length;i++){
                for(var j=0;j<Terminal[i].bus.length;j++){
                    if(Terminal[i].bus[j].busId==ID){
                        console.log(Terminal[i].bus[j]);
                       return Terminal[i].bus[j];
                    }
             }             
        }
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
        
        return tmp;
    },
    enterPaymentType: function(paymentType){
        this.paymentType=paymentType;
        console.log(paymentType);
        return pay.enterPaymentinfo(paymentType,price);
    },getmatchedId: function(busId){
        console.log(busId);
        return Rot.getmatchedId(busId);
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
         },getmatchedId: function(busId){
            console.log(busId);
            return ter.getmatchedId(busId);
        }
     }
}


module.exports = router;