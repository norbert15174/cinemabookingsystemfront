import React from "react";
import styled from "styled-components";
import Item from "./item";

const ScheduleCointener = styled.div`

    position: relative;
    top: 100px;
    width: 100%;
    background-color: #292829;

`;


class Schedule extends React.Component{

    state = {
        data: [],
        isReady: 'no',
      };

    async componentDidMount() {
        await fetch("http://localhost:8010/filmshow")
          .then((response) => response.json())
          .then((data) => this.setState({ data, isReady: 'yes' }));
          console.log(this.state.data);
      }


    render(){
        return(
            <ScheduleCointener>
                {this.state.isReady === 'no' ? null : this.state.data.map((schedules) => (
                    <Item schedule={schedules}/>
                ))}
                

            </ScheduleCointener>
            
        )
    }


}

export default Schedule;