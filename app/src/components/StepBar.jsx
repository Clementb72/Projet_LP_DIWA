import React from "react";
import { Steps } from 'antd';
import wystar from '../../public/Assets/images/Game_Star.svg';

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
            <Step title="" icon={<img style={{width: "50px"}} src={wystar} alt="illustration" />}/>
        </Steps>
    )
}

export default StepBar

