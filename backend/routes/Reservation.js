const { Router } = require('Express')
const router = Router()
const terminal = require('../db/models/Terminal');
const bus = require('../db/models/Bus')


router.get('/',function(req,res){
    reser= new Reservation();
    reser.enterRouteInfo("대구",1,1);
   console.log(reser.enterRouteInfo("대구",1,1));
    res.send('1');
    
})

router.post('/enterInfo',function(req,res){
    
})

router.get('/:postId',function(req,res){
    res.send(matchBus("부산"));
})
 var list=[{
     origin:"대구",
     destination:"수원",
     date:"11",
     time:"11",
     BusID:"212",
     busType:"1"
 },{
    origin:"대구",
    destination:"수원",
    date:"11",
    time:"12",
    BusID:"212",
    busType:"1"
},{
    origin:"부산",
    destination:"수원",
    date:"11",
    time:"13",
    BusID:"212",
    busType:"1"
},{
    origin:"대구",
    destination:"수원",
    date:"11",
    time:"14",
    BusID:"212",
    busType:"1"
},{
    origin:"대구",
    destination:"수원",
    date:"11",
    time:"15",
    BusID:"212",
    busType:"1"
},{
    origin:"대구",
    destination:"수원",
    date:"11",
    time:"16",
    BusID:"212",
    busType:"1"
}
]

function Reservation(date, requetTime, BusID,Origin,Destination,seatNumber,busType,price,busticket,busTable){
        this.date=date;
        this.requetTime=requetTime;
        this.BusID=BusID;
        this.Origin=Origin;
        this.Destination=Destination;
        this.seatNumber=seatNumber;
        this.busType=busType;
        this.price=price;
        this.busticket=busticket;
        this.busTable=busTable;
        var Rot= new Route();
    return{ 
        enterRouteInfo: function(Origin,Destination,date){
        this.Origin=Origin;
        this.Destination=Destination;
        this.date=date;
        return Rot.enterRouteInfo(Origin, Destination,date);
    }
}
  

}
function Route(Origin, Destination,date){
         this.Origin=Origin;
         this.Destination=Destination;
         this.date=date;
         return{
         enterRouteInfo: function(Origin, Destination,date){
            this.Origin=Origin;
         this.Destination=Destination;
         this.date=date;
            return getmatchedBus(Origin, Destination,date);
         }
     }
}



function getmatchedBus(Origin,Destination,date){
    var terminalId
    terminal.find({TerminalName : Origin}, function(err, ter){
        if(err) return res.status(500).json({error: err});
        if(!ter) return res.status(404).json({error: 'terminal not found'});
        this.terminalId=ter.TerminalId;
        console.log(ter.TerminalId);
    })
    return terminalId
}






module.exports = router;