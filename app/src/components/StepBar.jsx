import React from "react";
import { Steps } from 'antd';
import wystar from '../Assets/images/wystar.png'

const { Step } = Steps;

function StepBar({current}) {
    return (
        <Steps current={current}>
            <Step title="" />
            <Step title="" />
            <Step title="" />
            <Step title="" />
            <Step title="" />
            <Step title="" />
            <Step title="" />
            <Step title="" />
            <Step title="" icon={<img style={{width: "50%"}}  src={wystar}/>}/>
        </Steps>
    )
}

export default StepBar

