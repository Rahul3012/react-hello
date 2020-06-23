import React from 'react';
import TikTakToeChild from './TikTakToeChild';

class PlayGame extends React.Component {
  state = { 
        row1:[
            {id: 1, value: "_",status: false},
            {id: 2, value: "_",status: false},
            {id: 3, value: "_",status: false}
        ],
        row2:[
            {id: 4, value: "_",status: false},
            {id: 5, value: "_",status: false},
            {id: 6, value: "_",status: false}
        ],
        row3:[
            {id: 7, value: "_",status: false},
            {id: 8, value: "_",status: false},
            {id: 9, value: "_",status: false}
        ],
        flag: 0,
        player: 1,
        winner: ''
     }
     constructor(){
         super();
         this.changeSign=this.changeSign.bind(this);
         this.restart=this.restart.bind(this);
     }
     restart(){
       var defaultstate = { 
        row1:[
            {id: 1, value: "_",status: false},
            {id: 2, value: "_",status: false},
            {id: 3, value: "_",status: false}
        ],
        row2:[
            {id: 4, value: "_",status: false},
            {id: 5, value: "_",status: false},
            {id: 6, value: "_",status: false}
        ],
        row3:[
            {id: 7, value: "_",status: false},
            {id: 8, value: "_",status: false},
            {id: 9, value: "_",status: false}
        ]
       }

       this.setState({row1: defaultstate.row1});
       this.setState({row2: defaultstate.row2});
       this.setState({row3: defaultstate.row3});
       this.setState({winner: ''})
       console.log(defaultstate);
       console.log(this.state);
     }
     changePlayer()
     {
         if(this.state.flag==0)
         {
             this.setState({player: 2,flag: 1})
         }
         if(this.state.flag==1)
         {
             this.setState({player: 1,flag: 0})
         }
     }
     checkWinner()
     {
         if((this.state.row1[0].value === "0"&&this.state.row1[1].value === "0"&&this.state.row1[2].value === "0")||
         (this.state.row2[0].value === "0"&&this.state.row2[1].value === "0"&&this.state.row2[2].value === "0")||
         (this.state.row3[0].value === "0"&&this.state.row3[1].value === "0"&&this.state.row3[2].value === "0")||
         (this.state.row1[0].value==="0"&&this.state.row2[0].value==="0"&&this.state.row3[0].value==="0")||
         (this.state.row1[1].value==="0"&&this.state.row2[1].value==="0"&&this.state.row3[1].value==="0")||
         (this.state.row1[2].value==="0"&&this.state.row2[2].value==="0"&&this.state.row3[2].value==="0")||
         (this.state.row1[0].value==="0"&&this.state.row2[1].value==="0"&&this.state.row3[2].value==="0")||
         (this.state.row1[2].value==="0"&&this.state.row2[1].value==="0"&&this.state.row3[0].value==="0"))
         {
                this.setState({winner: "Player 0 win!!"})
         }
         else if((this.state.row1[0].value === "X"&&this.state.row1[1].value === "X"&&this.state.row1[2].value === "X")||
         (this.state.row2[0].value === "X"&&this.state.row2[1].value === "X"&&this.state.row2[2].value === "X")||
         (this.state.row3[0].value === "X"&&this.state.row3[1].value === "X"&&this.state.row3[2].value === "X")||
         (this.state.row1[0].value==="X"&&this.state.row2[0].value==="X"&&this.state.row3[0].value==="X")||
         (this.state.row1[1].value==="X"&&this.state.row2[1].value==="X"&&this.state.row3[1].value==="X")||
         (this.state.row1[2].value==="X"&&this.state.row2[2].value==="X"&&this.state.row3[2].value==="X")||
         (this.state.row1[0].value==="X"&&this.state.row2[1].value==="X"&&this.state.row3[2].value==="X")||
         (this.state.row1[2].value==="X"&&this.state.row2[1].value==="X"&&this.state.row3[0].value==="X"))
         {
                this.setState({winner: "Player X win!!"})
         }
     }

     changeByRow(row,child)
     {
       for(let i=0;i<row.length;i++)
        {
            if(row[i].id==child)
            {
                if(!row[i].status)
                {
                    if(this.state.player==1)
                    {
                        row[i].value="0";
                        row[i].status=true;
                        this.changePlayer();
                    }
                    if(this.state.player==2) 
                    {   
                        row[i].value="X"; 
                        row[i].status=true;
                        this.changePlayer();
                    }
                }
            }
        }
        return row;
     }
     changeSign(child){
        this.state.row1=this.changeByRow(this.state.row1,child);
        this.state.row2=this.changeByRow(this.state.row2,child);
        this.state.row3=this.changeByRow(this.state.row3,child);
        this.setState({row1: this.state.row1});
        this.setState({row2: this.state.row2});
        this.setState({row3: this.state.row3});
        this.checkWinner();
     }
    render() { 
        return ( 
        <div>
            <center>
            {this.state.row1.map((child)=>
            <TikTakToeChild sign={child.value} id={child.id} changeSign={this.changeSign} />
            )}
            <br/>
            {this.state.row2.map((child)=>
            <TikTakToeChild sign={child.value} id={child.id} changeSign={this.changeSign} />
            )}
             <br/>
            {this.state.row3.map((child)=>
            <TikTakToeChild sign={child.value} id={child.id} changeSign={this.changeSign} />
            )}
            <br/>
            <div>
                Player no:{this.state.player}
                <br/>  
                {this.state.winner}
                {this.state.winner!== ''&&<p><button onClick={this.restart}>Restart</button></p>}
            </div>
            </center>
        </div> );
    }
}
export default PlayGame;