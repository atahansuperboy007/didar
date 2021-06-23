import React, { Component } from 'react'
// import cn from 'classnames/bind'

//const cx = cn.bind(styles)

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            Days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up:""
        }
        this.x = null
        this.deadline = null
    }
    count () {        
        var now = new Date().getTime();
        var t = this.deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        this.setState({days, minutes, hours, seconds})
        if (t < 0) {
                clearInterval(this.x);
                this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "Время вышло!" })
            }
    }
    componentDidMount() {
        this.deadline = new Date("July 30, 2021 18:45:00").getTime();
 
        this.x = setInterval(this.count, 1000);
    }
    
    render() {
        const { days, seconds, hours, minutes, time_up } = this.state
        return ( 
            <div className="dss">
            <div> 

            <h1>Срок действия подписки.</h1>
            <div id="clockdiv">
            <div>
                <span className="days" id="day">{days}</span>
                <div className="smalltext">Дней</div>
                
            </div>
            <div>
                <span className="hours" id="hour">{hours}</span>
                <div className="smalltext">Час</div>
                
            </div>
            <div>
                <span className="minutes" id="minute">{minutes}</span>
                <div className="smalltext">Минут</div>
                
            </div>
            <div>
                <span className="seconds" id="second">{seconds}</span>
                <div className="smalltext">Секунд</div>
                
            </div>
            </div>
            
            <p id="demo">{time_up}</p>
            </div>
            </div>
        )
    }
}
export default CountDown